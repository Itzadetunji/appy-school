<?php error_reporting(0); ?>
<?php include('config.php'); ?>
<?php

	header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');

	$report_content = mysqli_real_escape_string($conn, $_POST['report_content']);
	$student_id = mysqli_real_escape_string($conn, $_POST['student']);

	if ($report_content != "" && $student_id != "") {

		$teacher_login_id = $_COOKIE['login_id'];
		
		$insert_report_sql = "INSERT INTO tbl_report (report_content, report_student_id, report_by_id) VALUES ('$report_content', '$student_id', '$teacher_login_id')";
		$insert_report_query = mysqli_query($conn, $insert_report_sql);

		if ($insert_report_query) {
			?>
			<div class='alert alert-success'><center><strong>REPORT HAS SUCCESSFULLY BEEN INSERTED</strong></center></div>
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