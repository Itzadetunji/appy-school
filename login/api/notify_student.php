<?php error_reporting(0); ?>
<?php include('config.php'); ?>
<?php

	header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');

	$notification_content = mysqli_real_escape_string($conn, $_POST['notify_content']);
	$class_id = mysqli_real_escape_string($conn, $_POST['class']);

	if ($notification_content != "" && $class_id != "") {

		$teacher_login_id = $_COOKIE['login_id'];

		$insert_notification_sql = "INSERT INTO tbl_notification (notification_content, notification_class_id, notification_by_id) VALUES ('$notification_content', '$class_id', '$teacher_login_id')";
		$insert_notification_query = mysqli_query($conn, $insert_notification_sql);

		if ($insert_notification_query) {
			?>
			<div class='alert alert-success'><center><strong>NOTIFICATION HAS SUCCESSFULLY BEEN INSERTED</strong></center></div>
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