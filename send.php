<?php
    $adminEmail = "milos.ribera@gmail.com";
    $mailSubject = "Nuovo messaggio da MR website";
    $customerEmail = filter_var($_POST['email']);
    $userMessage = filter_var($_POST['message']);
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text; charset=UTF-8";

    mail($adminEmail, $mailSubject, "Inviato da:" + $customerEmail + $userMessage, implode("\r\n", $headers)
?>