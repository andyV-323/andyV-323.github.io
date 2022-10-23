<?php 

if (isset($_POST['submit'])){
    $mailto = 'andyvalencia.cs@gmail.com';
    $from = $_POST['email'];
    $name = $_POST['name'];
    $message = $POST['message'];

    if ($result){
      echo '<script type = "text/javascript"> alert("Message was sent succesfully")</script>';
    }
  ?>