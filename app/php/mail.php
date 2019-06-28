$to      = "fatfirebird@gmail.com";
$subject = $_POST["topic"];
$message = $_POST["text"];
$headers = array(
  "name" => $_POST["name"];
  "mail" => $_POST["mail"];
)



mail($to, $subject, $message, $headers);
