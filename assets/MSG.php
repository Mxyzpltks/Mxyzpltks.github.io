<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'your-email@example.com'; // Replace with your email address
    $subject = 'New Message from Contact Form';
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Send the email
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo 'Email sent successfully';
    } else {
        echo 'An error occurred while sending the email';
    }
}
?>
