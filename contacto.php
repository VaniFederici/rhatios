<?php

if (isset($_POST['email']) and $_POST['email']!=""){
	
	$empresa=$_POST['empresa'];
	$nombre=$_POST['nombre'];
	$apellido=$_POST['apellido'];
	$email=$_POST['email'];
	$telefono=$_POST['telefono'];
	$ciudad=$_POST['ciudad'];
	$provincia=$_POST['provincia'];
	$pais=$_POST['pais'];
	$mensaje=$_POST['mensaje'];
	
	//-----------------------------------------------------------
	//ENVIO MAIL 
	//-----------------------------------------------------------
	
	
	$correo=$email;
	//$destinatario= "";
	
	$destinatario= "comercial@rhatios.com.ar";
	$asunto = "Consulta desde www.rhatios.com.ar"; 
	$cuerpo_rec = '<br />Consulta enviada desde www.rhatios.com.ar:<br /><br />
	
	Empresa: '.$empresa.'<br />
	Nombre: '.$nombre.'<br />
	Apellido: '.$apellido.'<br />
	Email: '.$email.'<br />
	Telefono: '.$telefono.'<br />
	Ciudad: '.$ciudad.'<br />
	Provincia: '.$provincia.'<br />
	Pais: '.$pais.'<br />
	Mensaje: '.$mensaje.'<br /><br />'; 
	
	$cuerpo="Mensaje de ".$nombre."\r\n\r\n".$cuerpo_rec;
	$headers = "MIME-Version: 1.0\r\n"; 
	$headers .= "Content-type: text/html; charset=UTF-8\r\n"; 
	//direcci�n del remitente 
	$headers .= "From: ".$nombre."<".$correo.">\r\n";
	if ( mail($destinatario,$asunto,$cuerpo,$headers) ) {
		echo '<SCRIPT LANGUAGE="javascript">
			location.href = "contacto_ok.html";
			</SCRIPT>';
	}else{
		echo '<SCRIPT LANGUAGE="javascript">
			location.href = "contacto_error.html";
			</SCRIPT>';
	}
	
	
	
	
}else{
	echo '<SCRIPT LANGUAGE="javascript">
			location.href = "contacto.html";
			</SCRIPT>';
}

?>