<?php error_reporting(0); ?>
<?php

	header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
	
	// set the cookie to - 1 year
	setcookie("login_id","", time() - (86400 * 30 * 12), "/"); // 86400 = 1 day
	setcookie("login_type","", time() - (86400 * 30 * 12), "/"); // 86400 = 1 day
	// setcookie("verify_sess", "", time() - (86400 * 30 * 12), "/"); // 86400 = 1 day

	// redirect back to login form
	header("location:../?er=You have successfully logged out&erty=success");

?>