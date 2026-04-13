<?php
/**
 * cPanel Deployment Webhook
 * 
 * This script is called by GitHub when you push to main.
 * It automatically pulls from the 'deploy' branch.
 * 
 * Setup:
 * 1. Place this file in: /home/irowad/public_html/deploy.php
 * 2. Make it executable: chmod 755 deploy.php
 * 3. Add webhook to GitHub:
 *    - Go to: Repo Settings → Webhooks → Add webhook
 *    - Payload URL: https://rowad.com/deploy.php?secret=YOUR_SECRET_HERE
 *    - Content type: application/json
 *    - Secret: YOUR_SECRET_HERE (same as below)
 *    - Events: Pushes to 'main' branch
 */

// ── Configuration ──
$DEPLOY_SECRET = 'rowad-deploy-2026-secret'; // Change this!
$REPO_PATH = '/home/irowad/repositories/rowad-for-software-development';
$DEPLOY_BRANCH = 'deploy';
$LOG_FILE = '/home/irowad/deployment-log.txt';

// ── Security Check ──
$secret = $_GET['secret'] ?? '';
if ($secret !== $DEPLOY_SECRET) {
    http_response_code(403);
    die('❌ Unauthorized');
}

// ── Get GitHub payload ──
$input = file_get_contents('php://input');
$payload = json_decode($input, true);

// Verify this is a push to main branch
$ref = $payload['ref'] ?? '';
if ($ref !== 'refs/heads/main') {
    http_response_code(200);
    die('⏭️  Not a push to main branch');
}

// ── Start Deployment ──
$response = [];
$response['started_at'] = date('Y-m-d H:i:s');
$response['branch'] = $ref;

// Step 1: Fetch latest from GitHub
$fetch_cmd = "cd {$REPO_PATH} && git fetch origin {$DEPLOY_BRANCH} 2>&1";
exec($fetch_cmd, $fetch_output, $fetch_status);

$response['fetch_status'] = $fetch_status;
$response['fetch_output'] = implode("\n", $fetch_output);

if ($fetch_status !== 0) {
    $response['error'] = 'Git fetch failed';
    log_deployment($response);
    http_response_code(500);
    die(json_encode($response, JSON_PRETTY_PRINT));
}

// Step 2: Reset to deploy branch
$reset_cmd = "cd {$REPO_PATH} && git reset --hard origin/{$DEPLOY_BRANCH} 2>&1";
exec($reset_cmd, $reset_output, $reset_status);

$response['reset_status'] = $reset_status;
$response['reset_output'] = implode("\n", $reset_output);

// Step 3: Copy files to public_html
$deploy_path = '/home/irowad/public_html';
$backup_path = '/home/irowad/backups';
$timestamp = date('Ymd_His');

// Create backup
if (is_dir($deploy_path) && count(glob("$deploy_path/*")) > 0) {
    exec("mkdir -p {$backup_path}");
    exec("cp -R {$deploy_path} {$backup_path}/public_html_backup_{$timestamp} 2>&1");
    $response['backup'] = "public_html_backup_{$timestamp}";
}

// Copy new files
exec("cp -Rf {$REPO_PATH}/* {$deploy_path}/ 2>&1", $copy_output, $copy_status);
exec("cp -Rf {$REPO_PATH}/.* {$deploy_path}/ 2>/dev/null", $dot_copy_output);

$response['copy_status'] = $copy_status;
$response['completed_at'] = date('Y-m-d H:i:s');
$response['status'] = $copy_status === 0 ? '✅ Success' : '❌ Failed';

// Log the deployment
log_deployment($response);

// Return response
http_response_code(200);
header('Content-Type: application/json');
echo json_encode($response, JSON_PRETTY_PRINT);

// ── Helper Function ──
function log_deployment($data) {
    global $LOG_FILE;
    $log_entry = "\n" . str_repeat('━', 50) . "\n";
    $log_entry .= "Deployment: {$data['completed_at']}\n";
    $log_entry .= "Status: {$data['status']}\n";
    $log_entry .= "Branch: {$data['branch']}\n";
    if (isset($data['backup'])) {
        $log_entry .= "Backup: {$data['backup']}\n";
    }
    $log_entry .= str_repeat('━', 50) . "\n";
    
    file_put_contents($LOG_FILE, $log_entry, FILE_APPEND | LOCK_EX);
}
