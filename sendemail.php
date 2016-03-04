<?php
if($_POST)
{
	$to_Email   	= "aman.narain@gmail.com"; //Replace with recipient email address
	$subject        = 'CODEBLU CONTACT FORM'; //Subject line for emails
	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
	
		//exit script outputting json data
		$output = json_encode(
		array(
			'type'=>'error', 
			'text' => 'Request must come from Ajax'
		));
		
		die($output);
    } 
	
	//check $_POST vars are set, exit if any missing
	if(!isset($_POST["userName"]) || !isset($_POST["userEmail"]) || !isset($_POST["userSubject"]) || !isset($_POST["userMessage"]))
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Input fields are empty!'));
		die($output);
	}

	//Sanitize input data using PHP filter_var().
	$user_name        = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
	$user_email       = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
	$user_subject     = filter_var($_POST["userSubject"], FILTER_SANITIZE_STRING);
	$user_message     = filter_var($_POST["userMessage"], FILTER_SANITIZE_STRING);
	
	//additional php validation
	if(strlen($user_name)<4) // If length is less than 4 it will throw an HTTP error.
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
		die($output);
	}
	if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)) //email validation
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
		die($output);
	}
	
	if(strlen($user_subject)<1) // If length is less than 4 it will throw an HTTP error.
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Subject Name is too short or empty!'));
		die($output);
	}
	if(strlen($user_message)<2) //check emtpy message
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
		die($output);
	}
	
	//proceed with PHP email.
	$headers = 'From: '.$user_email.'' . "\r\n" .
	'Reply-To: '.$user_email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	$sentMail = @mail($to_Email, $subject, "Name: ".$user_name."\n"."\n"."Email: ".$user_email."\n"."\n"."Subject: ".$user_subject."\n"."\n"."Message: ".$user_message, $headers);
	
	//proceed with PHP email.
	$headers2 = 'From: '.$to_Email.'' . "\r\n" .
	'Reply-To: '.$to_Email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	$sentMail = @mail($user_email, $subject, 'Hi '.$user_name .','."\n"."\n".' Thank you for contacting CODEBLU. Your message is very important to us, we will return your request as soon as we can ...', $headers2);
	
	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_name .','.' Thank you for contacting <strong>CODEBLU</strong>. Your message is very important to us, we will return your request as soon as we can ...'));
		die($output);
	}
}
?>