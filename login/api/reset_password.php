<?php error_reporting(0); ?>
<?php require ('config.php'); ?>
<?php

	$new_password = mysqli_real_escape_string($conn, $_POST['new_password']);
	$reset_token = mysqli_real_escape_string($conn, $_POST['token']);

	if ($new_password != "" && $reset_token != "") {

		$sql = "SELECT * FROM tbl_reset_token WHERE reset_token_code = '$reset_token' limit 1";
		$result = mysqli_query($conn, $sql);
		if (mysqli_num_rows($result) == 1) {

			$row = mysqli_fetch_array($result);

			$reset_token_user = $row['reset_token_user'];
			$reset_token_user_type = $row['reset_token_user_type'];

			$hashed_new_password = "c!a@l#e*b!".sha1(md5($new_password))."c!a@l#e*b!";

			switch ($reset_token_user_type) {
				case '1':
					$update_password_sql = "UPDATE tbl_teacher SET teacher_pswd = '$hashed_new_password' WHERE teacher_system_code = '$reset_token_user'";
					break;

				case '3':
					$update_password_sql = "UPDATE tbl_parent SET parent_pswd = '$hashed_new_password' WHERE parent_system_code = '$reset_token_user'";
					break;
				
				default:
					# code...
					break;
			}

			$update_password_result = mysqli_query($conn, $update_password_sql);

			if ($update_password_result) {

				$delete_token_sql = "DELETE FROM tbl_reset_token WHERE reset_token_code = '$reset_token' AND reset_token_user = '$reset_token_user' AND reset_token_user_type = '$reset_token_user_type'";
				$delete_token_result = mysqli_query($conn, $delete_token_sql);

				if ($delete_token_result) {
					?>
					<div class='alert alert-success'><center><strong>PASSWORD CHANGE SUCCESSFUL. YOU CAN NOW LOGIN</strong></center></div>
					<?php
				} else {
					?>
					<div class='alert alert-danger'><center><strong>ERROR WHILE PROCESSING.</strong></center></div>
					<?php
				}
			} else {
				?>
				<div class='alert alert-danger'><center><strong>ERROR WHILE PROCESSING.</strong></center></div>
				<?php
			}
		} else {
			?>
			<div class='alert alert-danger'><center><strong>INAVLID TOKEN CODE</strong></center></div>
			<?php
		}
	} else {
		?>
		<div class='alert alert-danger'><center><strong>ONE OR MORE FIELDS ARE EMPTY</strong></center></div>
		<?php
	}
?>