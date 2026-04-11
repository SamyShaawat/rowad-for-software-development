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
header('Access-Control-Allow-Origin: *');
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

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request data']);
    exit;
}

// Extract and sanitize form fields
$name = trim($input['name'] ?? '');
$name = preg_replace('/[\r\n]/', '', $name); // Prevent header injection
$email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$company = trim($input['company'] ?? 'N/A');
$company = preg_replace('/[\r\n]/', '', $company);
$phone = trim($input['phone'] ?? 'N/A');
$phone = preg_replace('/[\r\n]/', '', $phone);
$service = trim($input['service'] ?? 'N/A');
$service = preg_replace('/[\r\n]/', '', $service);
$message = trim($input['message'] ?? '');
$recaptchaToken = $input['recaptchaToken'] ?? null;

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
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

// Verify reCAPTCHA if token provided
if ($recaptchaToken) {
    $recaptchaSecret = getenv('RECAPTCHA_SECRET_KEY') ?: 'YOUR_RECAPTCHA_SECRET_KEY';
    
    $verificationUrl = "https://www.google.com/recaptcha/api/siteverify?" .
        "secret={$recaptchaSecret}&response={$recaptchaToken}";
    
    $response = file_get_contents($verificationUrl);
    $recaptchaResult = json_decode($response, true);
    
    if (!$recaptchaResult['success']) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'reCAPTCHA verification failed. Please try again.']);
        exit;
    }
} else {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'reCAPTCHA verification required']);
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
