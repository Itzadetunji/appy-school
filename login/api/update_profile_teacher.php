<?php error_reporting(0); ?>
<?php include('config.php'); ?>
<?php

	header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');

	//update teacher profile
	$title = mysqli_real_escape_string($conn, ucwords($_POST['title']));
	$first_name = mysqli_real_escape_string($conn, ucwords($_POST['first_name']));
	$last_name = mysqli_real_escape_string($conn, ucwords($_POST['last_name']));
	$email_address = mysqli_real_escape_string($conn, strtolower($_POST['email_address']));
	$phone_contact = mysqli_real_escape_string($conn, $_POST['phone_contact']);

	if ($title != "" && $first_name != "" && $last_name != "" && $email_address != "" && $phone_contact != "") {

		$teacher_login_id = $_COOKIE['login_id'];
		
		$update_teacher_profile_sql = "UPDATE tbl_teacher SET teacher_title = '$title', teacher_fname = '$first_name', teacher_lname = '$last_name', teacher_email = '$email_address', teacher_contact = '$phone_contact' WHERE teacher_system_code = '$teacher_login_id'";
		$update_teacher_profile_query = mysqli_query($conn, $update_teacher_profile_sql);

		if ($update_teacher_profile_query) {
			?>
			<div class='alert alert-success'><center><strong>ACCOUNT UPDATED SUCCESSFULLY</strong></center></div>
			<?php

			return true;
		} else {
			?>
			<div class='alert alert-danger'><center><strong>ERROR WHILE PROCESSING.</strong></center></div>
			<?php
		}
	} else {
		?>
		<div class='alert alert-danger'><center><strong>ONE OR MORE FIELDS ARE EMPTY</strong></center></div>
		<?php
	}
?>