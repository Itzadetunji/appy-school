<?php error_reporting(0); ?>
<?php require ('config.php'); ?>
<?php check_gen_login(); ?>
<?php if (isset($_GET['login'])) { $get_login = $_GET['login']; } else { $get_login = ""; } ?>
<?php

	header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');

	if (isset($_POST['verify_bt'])) {

		$login_id 		= mysqli_real_escape_string($conn, $_POST['login_id']);
		$login_password = mysqli_real_escape_string($conn, $_POST['login_password']);

		if ($login_id != null && $login_password != null ) {

			$hashed_login_password = "c!a@l#e*b!".sha1(md5($login_password))."c!a@l#e*b!";

			switch ($get_login) {
				case 'teacher':

					if (check_if_exist("1", $login_id)) {
						
						$sql = "SELECT teacher_system_code, teacher_pswd FROM tbl_teacher WHERE teacher_email='$login_id'";
						$result = mysqli_query($conn, $sql);
						$row = mysqli_fetch_assoc($result);

						$retrieved_password = $row['teacher_pswd'];
						$cookie_login_id = $row['teacher_system_code'];

						if ($retrieved_password == $hashed_login_password) {

							setcookie("login_id",$cookie_login_id, time() + (86400 * 30 * 12), "/"); // 86400 = 1 day
							setcookie("login_type","1", time() + (86400 * 30 * 12), "/"); // 86400 = 1 day
							// setcookie("verify_sess", $hashed_login_password, time() + (86400 * 30 * 12), "/"); // 86400 = 1 day

							if(isset($_COOKIE['login_id']) && isset($_COOKIE['login_type']) /*&& isset($_COOKIE['verify_sess']*/) {

							    header("location:../teacher_dashboard");
							} else {
							   
							   header("location:../?er=Error while Authenticating. Try again later&erty=danger");
							}
						} else {

							header("location:../?er=Password Is incorrect&erty=danger");
						}
					} else {

						header("location:../?er=Account details are invalid&erty=danger");
					}
					break;

				case 'student':

					if (check_if_exist("2", $login_id)) {
						
						$sql = "SELECT student_system_code, student_login_pswd FROM tbl_student WHERE student_login_id='$login_id'";
						$result = mysqli_query($conn, $sql);
						$row = mysqli_fetch_assoc($result);

						$retrieved_password = $row['student_login_pswd'];
						$cookie_login_id = $row['student_system_code'];

						if ($retrieved_password == $hashed_login_password) {

							setcookie("login_id",$cookie_login_id, time() + (86400 * 30 * 12), "/"); // 86400 = 1 day
							setcookie("login_type","2", time() + (86400 * 30 * 12), "/"); // 86400 = 1 day
							// setcookie("verify_sess", $hashed_login_password, time() + (86400 * 30 * 12), "/"); // 86400 = 1 day

							if(isset($_COOKIE['login_id']) && isset($_COOKIE['login_type']) /*&& isset($_COOKIE['verify_sess']*/) {

								header("location:../student_dashboard");
							} else {
							   
							   header("location:../?er=Error while Authenticating. Try again later&erty=danger");
							}
						} else {

							header("location:../?er=Password Is incorrect&erty=danger");
						}
					} else {

						header("location:../?er=Account details are invalid&erty=danger");
					}
					break;

				case 'parent':

					if (check_if_exist("3", $login_id)) {
						
						$sql = "SELECT parent_system_code, parent_pswd FROM tbl_parent WHERE parent_email='$login_id'";
						$result = mysqli_query($conn, $sql);
						$row = mysqli_fetch_assoc($result);

						$retrieved_password = $row['parent_pswd'];
						$cookie_login_id = $row['parent_system_code'];

						if ($retrieved_password == $hashed_login_password) {

							setcookie("login_id",$cookie_login_id, time() + (86400 * 30 * 12), "/"); // 86400 = 1 day
							setcookie("login_type","3", time() + (86400 * 30 * 12), "/"); // 86400 = 1 day
							// setcookie("verify_sess", $hashed_login_password, time() + (86400 * 30 * 12), "/"); // 86400 = 1 day

							if(isset($_COOKIE['login_id']) && isset($_COOKIE['login_type']) /*&& isset($_COOKIE['verify_sess']*/) {

								header("location:../parent_dashboard");
							} else {
							   
							   header("location:../?er=Error while Authenticating. Try again later&erty=danger");
							}
						} else {

							header("location:../?er=Password Is incorrect&erty=danger");
						}
					} else {

						header("location:../?er=Account details are invalid&erty=danger");
					}
					break;
				
				default:
					header("location:../?er=Invalid Argument&erty=danger");
					break;
			}

		} else {

			header("location:../");
		}
	} else {

		header("location:../");
	}

?>