<?php error_reporting(0); ?>
<?php include('config.php'); ?>
<?php

	header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');

	//insert_chat.php
	$from_user_id = mysqli_real_escape_string($conn, $_POST['from_user_id']);
	$chat_message = mysqli_real_escape_string($conn, rtrim(ltrim($_POST['chat_message'])));
	$to_user_id = mysqli_real_escape_string($conn, $_POST['to_user_id']);
	$read_status = "0";
	$chat_type = mysqli_real_escape_string($conn, $_POST['message_type']);

	if ($from_user_id != "" && $chat_message != "" && $to_user_id != "" && $read_status != "" && $chat_type != "") {

		$insert_chat_sql = "INSERT INTO tbl_chat (from_user_id, message, to_user_id, read_status, chat_type)
		VALUES ('$from_user_id', '$chat_message', '$to_user_id', '$read_status', '$chat_type')";
		$insert_chat_query = mysqli_query($conn, $insert_chat_sql);

		if ($insert_chat_query) {
			echo get_chat_history($chat_type, $from_user_id, $to_user_id);
		} else {}
	}

?>