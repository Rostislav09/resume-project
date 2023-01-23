<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'phamailer/srs/Exception.php';
require 'phamailer/srs/PHPMailer.php'


$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru','phamailer/language/');
$mail->IsHTML(true);


$mail->setFrom('fs.petrenko@gmail.com' 'Resume-Web-Saite');                      
$mail->addAddress('fs.petrenko@gmail.com');                                            
$mail->Subject = 'It is me';                     
   

    
$mail->Body = 'Hello';

if(trim(!empty($_POST['name']))){
    $body.='<p><srtong>Name:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><srtong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p><srtong>Message:</strong> '.$_POST['message'].'</p>';
}


$mail->Body = $body;

if(!$mail->send()){
    $message = 'Error';
} else {
    $message = "Data sent!";
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>