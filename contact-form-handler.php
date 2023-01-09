<?php
    $name = $_POST['name'];
    $visitor_Email = $_POST['email'];
    $number = $_POST['number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_From = "Rachasima.tran001@gmail.com";
    $email_Subject = "New Form Submission";
    $email_Body = "User Name: $name.\n".
                    "User Email: $visitor_Email.\n".
                    "User Phone #: $number.\n".
                    "User Subject: $subject.\n".
                    "User Message: $message.\n";
    
    $to = "Rachasima.tran001@gmail.com";
    $headers = "From: $email_From \r\n";
    $headers .= "Reply-To: $visitor_Email \r\n";

    mail($to, $email_Subject, $email_Body, $headers);

    header("Location: index.html");

?>