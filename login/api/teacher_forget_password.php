<?php error_reporting(0); ?>
<?php require ('config.php'); ?>
<?php

	$email = mysqli_real_escape_string($conn, $_POST['teacher_email']);

	if ($email != "") {
		
		if (check_if_exist("1", $email)){

			$get_teacher_details_sql = "SELECT * FROM `tbl_teacher` WHERE teacher_email = '$email'";
			$get_teacher_details_result = mysqli_query($conn, $get_teacher_details_sql);
			$get_teacher_details_row = mysqli_fetch_assoc($get_teacher_details_result);

			$teacher_fname = $get_teacher_details_row['teacher_fname'];
			$teacher_lname = $get_teacher_details_row['teacher_lname'];

			$teacher_id = $get_teacher_details_row['teacher_system_code'];

			$teacher_fullname = "$teacher_fname $teacher_lname";
			$get_token = 'token'.get_rand_numbers(20).'';
			$token = md5($get_token);

			$link = ''.$domain.'/reset?token='.$token.'';

			$delete_token_sql = "DELETE FROM tbl_reset_token WHERE reset_token_user = '$teacher_id'";
			$delete_token_result = mysqli_query($conn, $delete_token_sql);

			$insert_new_token = "INSERT INTO `tbl_reset_token` (reset_token_code, reset_token_user, reset_token_user_type) VALUES ('$token', '$teacher_id', '1')";
			$insert_new_token_code = mysqli_query($conn, $insert_new_token);

			if ($insert_new_token_code) {

				$message = "Hello!! <b>".$teacher_fullname."</b>, <br>Click <a href='".$link."'>HERE</a> to reset your <b>School Management</b> Account password.";

				require_once "Mail.php"; // PEAR Mail package
				require_once ('Mail/mime.php'); // PEAR Mail_Mime packge

				$from = 'eosabiya@gmail.com'; //enter your email address
				$to = $email; //enter the email address of the contact your sending to
				$subject = "School Management Password Reset"; // subject of your email

				$headers = array ('From' => $from,'To' => $to, 'Subject' => $subject);

				$text = ''; // text versions of email.
				$html = "
					<html>
						<body>
							<b>Teacher Account Details</b>
							<hr>
							Name: $teacher_fullname <br>
							Email: $email <br>
							Message: ".nl2br($message)." <br>
						</body>
					</html>
				";
				// html versions of email.

				$crlf = "\n";

				$mime = new Mail_mime($crlf);
				$mime->setTXTBody($text);
				$mime->setHTMLBody($html);

				//do not ever try to call these lines in reverse order
				$body = $mime->get();
				$headers = $mime->headers($headers);

				$host = "localhost"; // all scripts must use localhost
				$username = "eniolao2"; //  your email address (same as webmail username)
				$password = "a8t]6I3W5Egz-N"; // your password (same as webmail password)

				$smtp = Mail::factory('smtp', array ('host' => $host, 'auth' => true, 'username' => $username,'password' => $password));

				$mail = $smtp->send($to, $headers, $body);

				if (PEAR::isError($mail)) {
					?>
					<div class='alert alert-danger'><center><strong>ERROR WHILE SENDING CONFIRMATION LINK TO YOUR MAIL. TRY AGAIN</strong></center></div>
					<?php
				} else {
					?>
					<div class='alert alert-success'><center><strong>A LINK TO RESET YOUR PASSWORD WAS SENT TO <?php echo $email; ?></strong></center></div>
					<?php
				}
			} else {
				?>
				<div class='alert alert-danger'><center><strong>ERROR WHILE PROCESSING REQUEST</strong></center></div>
				<?php
			}
		} else {
			?>
			<div class='alert alert-danger'><center><strong>NO ACCOUNT IS ASSOCIATED WITH EMAIL : <?php echo $email; ?></strong></center></div>
			<?php
		}
	}
?>