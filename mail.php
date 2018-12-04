<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['phone'];
$tipoNegocio = $_POST['negocio'];
$tipoServicio = $_POST['servicio'];
$fechaLimite = $_POST['fecha'];
$idea = $_POST['idea'];

$header = 'From:' . $email ."\r\n";
$header .= "X-Mailer: PHP/" . phpversion() ."\r\n";
$header.= "Mime-Version: 1.0 \r\n";
$header.= "Content-Type: text/plain";

$mensaje = "Este Mensaje fue enviado por ".$nombre. ",\r\n";
$mensaje.= "email: ".$email. ",\r\n";
$mensaje.= "telefono: " .$telefono. ",\r'n";
$mensaje.= "Tipo de Negocio:" .$tipoNegocio. ",\r\n";
$mensaje.= "Servicio Requerido: " .$tipoServicio. ",\r\n";
$mensaje.= "Fecha de entrega: " .$fechaLimite. ",\r\n";
$mensaje.= "Idea a implementar: " .$idea. ",\r\n";
$mensaje.= "Enviado el :" .date('d/m/Y', time());

$para = "thisenginersdevelop@gmail.com";
$asunto = "".$tipoServicio;

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html")
?>