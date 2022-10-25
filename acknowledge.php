<?php

if (isset($_POST['send'])) {
	$to = 'andyvalencia.cs@gmail.com';
	$subject = 'from my site';
	$message = 'Name:' .$POST['name'] . "\r\n\r\n";
	$message .='Email: ' .$_POST['email'] . "\r\n\r\n";
	$message .= 'Comments: ' . $_POST['comments'];
	echo $message;
}
?>