<?php error_reporting(0); ?>
<?php include('config.php'); ?>
<?php

	header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');

	// fetch user chat history
	$from_user_id = mysqli_real_escape_string($conn, $_POST['from_user_id']);
	$to_user_id = mysqli_real_escape_string($conn, $_POST['to_user_id']);
	$chat_type = mysqli_real_escape_string($conn, $_POST['message_type']);

	if ($from_user_id != "" && $to_user_id != "" && $chat_type != "") {

		echo get_chat_history($chat_type, $from_user_id, $to_user_id);
	} else {}

?>