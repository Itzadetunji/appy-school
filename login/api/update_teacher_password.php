<?php error_reporting(0); ?>
<?php include('config.php'); ?>
<?php

	header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');

	//update teacher password
	$current_password = mysqli_real_escape_string($conn, $_POST['current_password']);
	$new_password = mysqli_real_escape_string($conn, $_POST['new_password']);
	$confirm_new_password = mysqli_real_escape_string($conn, $_POST['confirm_new_password']);

	if ($current_password != "" && $new_password != "" && $confirm_new_password != "") {

		if ($new_password == $confirm_new_password) {

			$teacher_login_id = $_COOKIE['login_id'];
			$hashed_current_password = "c!a@l#e*b!".sha1(md5($current_password))."c!a@l#e*b!";

			$get_current_password_sql = "SELECT * FROM tbl_teacher WHERE teacher_system_code = '$teacher_login_id'";
			$get_current_password_result = mysqli_query($conn, $get_current_password_sql);
			$get_current_password_row = mysqli_fetch_assoc($get_current_password_result);

			$stored_gotten_password = $get_current_password_row['teacher_pswd'];

			if ($hashed_current_password == $stored_gotten_password) {
				
				$hashed_new_password = "c!a@l#e*b!".sha1(md5($new_password))."c!a@l#e*b!";

				$update_new_password_sql = "UPDATE tbl_teacher SET teacher_pswd = '$hashed_new_password' WHERE teacher_system_code = '$teacher_login_id'";
				$update_new_password_query = mysqli_query($conn, $update_new_password_sql);

				if ($update_new_password_query) {
					?>
					<div class='alert alert-success'><center><strong>PASSWORD HAS BEEN CHANGED SUCCESSFULLY</strong></center></div>
					<?php

					return true;
				} else {
					?>
					<div class='alert alert-danger'><center><strong>ERROR WHILE PROCESSING.</strong></center></div>
					<?php
				}
			} else {
				?>
				<div class='alert alert-danger'><center><strong>YOUR PASSWORD IS INCORRET</strong></center></div>
				<?php
			}
		} else {
			?>
			<div class='alert alert-danger'><center><strong>PASSWORDS DO NOT MATCH</strong></center></div>
			<?php
		}
	} else {
		?>
		<div class='alert alert-danger'><center><strong>ONE OR MORE FIELDS ARE EMPTY</strong></center></div>
		<?php
	}
?>