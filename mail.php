<?php
require(__DIR__ . '/vendor/autoload.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load environment variables if .env file exists
if (file_exists(__DIR__ . '/.env')) {
    $env = parse_ini_file(__DIR__ . '/.env');
    foreach ($env as $key => $value) {
        putenv("$key=$value");
    }
}

date_default_timezone_set("Asia/Kolkata");

function send_mail($uemail, $subject, $body) {
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = getenv('SMTP_HOST') ?: 'mail.domain.com';
        $mail->SMTPAuth = true;
        $mail->Username = getenv('SMTP_USERNAME') ?: 'support@domain.com';
        $mail->Password = getenv('SMTP_PASSWORD') ?: 'your-password-here';
        $mail->SMTPSecure = getenv('SMTP_SECURE') ?: 'ssl';
        $mail->Port = getenv('SMTP_PORT') ?: 465;

        // Recipients
        $mail->setFrom(getenv('MAIL_FROM_ADDRESS') ?: 'support@domain.com', getenv('MAIL_FROM_NAME') ?: 'WordWise');
        $mail->addAddress($uemail);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $body;

        $mail->send();
        return ['success' => true, 'message' => 'Email sent successfully'];
    } catch (Exception $e) {
        error_log("Mail Error: " . $e->getMessage());
        return ['success' => false, 'message' => 'Failed to send email'];
    }
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header('Content-Type: application/json');
    
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
        exit;
    }

    $subject = "New Subscription from WordWise";
    $body = "Name: $name<br>Email: $email<br>Message: $message";

    $result = send_mail("admin@wordwise.com", $subject, $body);
    echo json_encode($result);
    exit;
}
?> 