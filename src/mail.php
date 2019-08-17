<?php 

$data = $_POST; 

echo $data["username"]; 

$username = $_POST['username'];
$fio = $_POST['fio'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$username = htmlspecialchars($username);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$username = urldecode($username);
$phone = urldecode($phone);
$email = urldecode($email);
$username = trim($username);
$phone = trim($phone);
$email = trim($email);
mail("repair-rromms@yandex.ru", "Заполнение формы", "Имя .$username \n Почта .$email\n Телефон .$phone ");
/* mail("trb34074@yandex.ru", "Заявка с сайта", "ФИО:".$username.". E-mail: ".$email ); */
//echo $username;
//echo "<br>";
//echo $phone;
/* if (mail("trb34074@yandex.ru", "Заявка с сайта", "ФИО:".$username.". E-mail: ".$email ,"From: mail.paul-kline.ru \r\n")){ 
  echo "Сообщение успешно отправлено"; 
 } else { 
  echo "При отправке сообщения возникли ошибки";
 } */
/* } */
?>
