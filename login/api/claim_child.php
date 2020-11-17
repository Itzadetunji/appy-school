<?php error_reporting(0); ?>
<?php include('config.php'); ?>
<?php
	
	header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');

	$child_admission_number = mysqli_real_escape_string($conn, $_POST['child_admission_number']);
	$parent_confirm_code 	= mysqli_real_escape_string($conn, $_POST['parent_confirm_code']);
	$child_gender 			= mysqli_real_escape_string($conn, $_POST['gender']);
	$claim_type 			= mysqli_real_escape_string($conn, strtolower($_POST['relationship']));

	if ($child_admission_number != "" && $parent_confirm_code != "" && $child_gender != "" && $claim_type != ""){

		$confirm_student_code_sql = "SELECT student_pcode FROM tbl_student WHERE student_login_id = '$child_admission_number' AND student_gender = '$child_gender'";
		$confirm_student_code_result = mysqli_query($conn, $confirm_student_code_sql);
		$confirm_student_code_row = mysqli_fetch_assoc($confirm_student_code_result);

		$student_code = $confirm_student_code_row['student_pcode'];

		if ($student_code == $parent_confirm_code) {

			$parent_login_id = $_COOKIE['login_id'];

			$insert_parent_system_code_sql = "UPDATE tbl_student SET student_$claim_type = '$parent_login_id' WHERE student_login_id = '$child_admission_number'";
			$insert_parent_system_code_query = mysqli_query($conn, $insert_parent_system_code_sql);

			if ($insert_parent_system_code_query) {
				?>
				<div class='alert alert-success'><center><strong>CHILD HAS BEEN SUCCESSFULLY CLAIMED</strong></center></div>
				<?php

				return true;
			} else {
				?>
				<div class='alert alert-danger'><center><strong>ERROR WHILE PROCESSING.</strong></center></div>
				<?php
			}
		} else {
			?>
			<div class='alert alert-danger'><center><strong>INCORRECT PARENT CODE ENTERED</strong></center></div>
			<?php
		}
	} else {
		?>
		<div class='alert alert-danger'><center><strong>ONE OR MORE FIELDS ARE EMPTY</strong></center></div>
		<?php
	}
?>