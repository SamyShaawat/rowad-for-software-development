<?php
/**
 * Contact Form Mailer for cPanel Deployment
 * 
 * This PHP script handles contact form submissions on cPanel.
 * Upload this file to your cPanel public_html directory.
 * 
 * Configuration:
 * - Set $recipient_email to your contact email address
 * - reCAPTCHA validation is performed if token is provided
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request data']);
    exit;
}

// Rate limit: 5 submissions per IP per hour (file-based, fine for a single cPanel host)
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/rowad_contact_' . md5($ip);
$hits = [];
if (is_file($rateFile)) {
    $hits = array_filter(
        array_map('intval', file($rateFile, FILE_IGNORE_NEW_LINES) ?: []),
        fn($t) => $t > time() - 3600
    );
}
if (count($hits) >= 5) {
    http_response_code(429);
    echo json_encode(['success' => false, 'error' => 'Too many requests. Please try again later.']);
    exit;
}

/** Read a string field: reject non-strings, strip control chars/CRLF and angle brackets, enforce max length. */
function field(array $input, string $key, int $max): ?string {
    $v = $input[$key] ?? '';
    if (!is_string($v)) return null;
    $v = trim(preg_replace('/[\x00-\x1F\x7F<>]/u', ' ', $v));
    return mb_strlen($v) > $max ? null : $v;
}

$name = field($input, 'name', 100);
$email = field($input, 'email', 254);
$company = field($input, 'company', 100);
$phone = field($input, 'phone', 20);
$service = field($input, 'service', 50);
$message = trim(is_string($input['message'] ?? null) ? $input['message'] : '');
$recaptchaToken = $input['recaptchaToken'] ?? null;

foreach ([$name, $email, $company, $phone, $service] as $v) {
    if ($v === null) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid or too long field']);
        exit;
    }
}
if (mb_strlen($message) < 10 || mb_strlen($message) > 2000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Message must be 10-2000 characters']);
    exit;
}
if ($phone !== '' && !preg_match('/^[\d\s\-+()]+$/', $phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid phone number']);
    exit;
}
$company = $company ?: 'N/A';
$phone = $phone ?: 'N/A';
$service = $service ?: 'N/A';

// Validate required fields
if ($name === '' || $email === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Name, email, and message are required']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit;
}

// Verify reCAPTCHA (required)
if (!is_string($recaptchaToken) || $recaptchaToken === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'reCAPTCHA verification required']);
    exit;
}
$recaptchaSecret = getenv('RECAPTCHA_SECRET_KEY') ?: 'YOUR_RECAPTCHA_SECRET_KEY';
$verificationUrl = 'https://www.google.com/recaptcha/api/siteverify?' .
    http_build_query(['secret' => $recaptchaSecret, 'response' => $recaptchaToken]);
$ctx = stream_context_create(['http' => ['method' => 'POST', 'timeout' => 5]]);
$response = @file_get_contents($verificationUrl, false, $ctx);
$recaptchaResult = $response ? json_decode($response, true) : null;
if (empty($recaptchaResult['success'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'reCAPTCHA verification failed. Please try again.']);
    exit;
}

// Configure email settings
$recipient_email = getenv('CONTACT_EMAIL') ?: 'info@rowad.com';
$subject = "New Contact Request: {$service}";

$email_body = "New contact form submission\n\n";
$email_body .= "Name: {$name}\n";
$email_body .= "Email: {$email}\n";
$email_body .= "Company: {$company}\n";
$email_body .= "Phone: {$phone}\n";
$email_body .= "Service Requested: {$service}\n\n";
$email_body .= "Message:\n{$message}\n";

// Email headers
$headers = "From: {$name} <noreply@{$_SERVER['HTTP_HOST']}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$hits[] = time();
@file_put_contents($rateFile, implode("\n", $hits));
$mail_sent = mail($recipient_email, $subject, $email_body, $headers);

if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send message. Please try again later.'
    ]);
}
