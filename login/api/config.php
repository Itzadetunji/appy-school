<?php error_reporting(0); ?>
<?php require ('rand_assign.php'); ?>
<?php

	header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
	
	$system_name = 'Appy School';
	$sidebar_appname = 'Appy School';
	$domain = 'https://eniolaosabiya.com/appy_school/login';

	// $servername	= "localhost";
	// $username	= "eniolao2";
	// $password	= "a8t]6I3W5Egz-N";
	// $dbname		= "eniolao2_caleb_db";

	$servername	= "localhost";
	$username	= "root";
	$password	= "";
	$dbname		= "caleb_db";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} else {
		// echo "Connected successfully";
	}

	// check if a user exists in the database
	function check_if_exist ($type, $login_id){

		$conn = $GLOBALS['conn'];
		// 1 = teacher, 2 = student, 3 = parent

		switch ($type) {
			case '1':
				$sql = "SELECT * FROM tbl_teacher WHERE teacher_email='$login_id'";
				$result = mysqli_query($conn, $sql);
				if (mysqli_num_rows($result) == 1) {
					return true;
				} else {
					return false;
				}
				break;

			case '2':
				$sql = "SELECT * FROM tbl_student WHERE student_login_id='$login_id'";
				$result = mysqli_query($conn, $sql);
				if (mysqli_num_rows($result) == 1) {
					return true;
				} else {
					return false;
				}
				break;

			case '3':
				$sql = "SELECT * FROM tbl_parent WHERE parent_email='$login_id'";
				$result = mysqli_query($conn, $sql);
				if (mysqli_num_rows($result) == 1) {
					return true;
				} else {
					return false;
				}
				break;
			
			default:
				return false;
				break;
		}
	}
	// For testing purpose
	// if ( check_if_exist("1", "" )){ echo "Yes"; } else { echo "No"; }
	// if ( check_if_exist("2", "" )){ echo "Yes"; } else { echo "No"; }
	// if ( check_if_exist("3", "" )){ echo "Yes"; } else { echo "No"; }

	function check_gen_login(){

		// 1 = teacher, 2 = student, 3 = parent

		if(isset($_COOKIE['login_id']) && isset($_COOKIE['login_type']) /*&& isset($_COOKIE['verify_sess']*/){
			$login_type	= $_COOKIE['login_type'];
		} else {
			$login_type = "";
		}

		switch ($login_type){
			case '1':
				header("location:teacher_dashboard");
				break;

			case '2':
				header("location:student_dashboard");
				break;

			case '3':
				header("location:parent_dashboard");
				break;

			default:
				# do nothing...
				break;
		}
	}
	// For testing purpose
	// check_gen_login();

	function check_login($type){

		if(isset($_COOKIE['login_id']) && isset($_COOKIE['login_type']) /*&& isset($_COOKIE['verify_sess']*/){

			$login_type	= $_COOKIE['login_type'];

			if ($type == $login_type) {
				# do nothing...
				// echo "Good";
			} else {

				header("location:./");
			}
		} else {

			header("location:./");
		}	
	}
	// For testing purpose
	// check_login("1");

	function check_error_msg(){

		if (isset($_GET['er']) && isset($_GET['erty'])){
			$error = strtoupper($_GET['er']);
			$error_type = $_GET['erty'];
			echo '<div class="alert alert-'.$error_type.' text-center"><strong>'.$error.'</strong></div>';
		} else {
			$error = ""; $error_type = "";
		}
	}
	// For testing purpose
	// check_error_msg();

	function chat_modal_name($m_type, $m_to){

		$conn = $GLOBALS['conn'];

		if ($m_type == "1" || $m_type == "6") {

			$sql = "SELECT * FROM tbl_student WHERE student_system_code = '$m_to'";
			$result = mysqli_query($conn, $sql);
			$row = mysqli_fetch_assoc($result);

			$fname = $row['student_fname'];
			$lname = $row['student_lname'];

			$fullname = ''.$fname.' '.$lname.'';

			echo $fullname;

		} elseif ($m_type == "2" || $m_type == "4") {

			$sql = "SELECT * FROM tbl_parent WHERE parent_system_code = '$m_to'";
			$result = mysqli_query($conn, $sql);
			$row = mysqli_fetch_assoc($result);

			$fname = $row['parent_fname'];
			$lname = $row['parent_lname'];

			$fullname = ''.$fname.' '.$lname.'';

			echo $fullname;

		} elseif ($m_type == "3" || $m_type == "5" || $m_type == "7") {

			$sql = "SELECT * FROM tbl_teacher WHERE teacher_system_code = '$m_to'";
			$result = mysqli_query($conn, $sql);
			$row = mysqli_fetch_assoc($result);

			$fname = $row['teacher_fname'];
			$lname = $row['teacher_lname'];

			$fullname = ''.$fname.' '.$lname.'';

			echo $fullname;

		} else {
			echo "Invalid Argument";
		}
	}

	function teacher_chat_to_student(){

		$conn = $GLOBALS['conn'];

		$teacher_login_id = $_COOKIE['login_id'];

		$get_students_sql = "SELECT * FROM tbl_student";
		$get_students_result = mysqli_query($conn, $get_students_sql);

		while($get_students_row = mysqli_fetch_assoc($get_students_result)) {

			$to_id = $get_students_row['student_system_code'];
			$fname = $get_students_row['student_fname'];
			$lname = $get_students_row['student_lname'];
			$fullname = ''.$fname.' '.$lname.'';

			?>
				<li><a href="javascript:void(0);" class="openmodal" data-href="api/get_chat.php?type=1&from=<?php echo $teacher_login_id; ?>&to=<?php echo $to_id; ?>"><?php echo $fullname; ?> <sub class="float-right"><i>Student</i></sub></a></li>
			<?php
		}
	}

	function teacher_chat_to_parent(){

		$conn = $GLOBALS['conn'];

		$teacher_login_id = $_COOKIE['login_id'];

		$get_parent_sql = "SELECT * FROM tbl_parent";
		$get_parent_result = mysqli_query($conn, $get_parent_sql);

		while($get_parent_row = mysqli_fetch_assoc($get_parent_result)) {

			$to_id = $get_parent_row['parent_system_code'];
			$title = $get_parent_row['parent_title'];
			$fname = $get_parent_row['parent_fname'];
			$lname = $get_parent_row['parent_lname'];
			$fullname = ''.$title.' '.$fname.' '.$lname.'';

			?>
				<li><a href="javascript:void(0);" class="openmodal" data-href="api/get_chat.php?type=2&from=<?php echo $teacher_login_id; ?>&to=<?php echo $to_id; ?>"><?php echo $fullname; ?> <sub class="float-right"><i>Parent</i></sub></a></li>
			<?php
		}
	}

	function teacher_chat_to_teacher(){

		$conn = $GLOBALS['conn'];

		$teacher_login_id = $_COOKIE['login_id'];

		$get_teachers_sql = "SELECT * FROM tbl_teacher WHERE teacher_system_code != '$teacher_login_id'";
		$get_teachers_result = mysqli_query($conn, $get_teachers_sql);

		while($get_teachers_row = mysqli_fetch_assoc($get_teachers_result)) {

			$to_id = $get_teachers_row['teacher_system_code'];
			$title = $get_teachers_row['teacher_title'];
			$fname = $get_teachers_row['teacher_fname'];
			$lname = $get_teachers_row['teacher_lname'];
			$fullname = ''.$title.' '.$fname.' '.$lname.'';

			?>
				<li><a href="javascript:void(0);" class="openmodal" data-href="api/get_chat.php?type=3&from=<?php echo $teacher_login_id ?>&to=<?php echo $to_id; ?>"><?php echo $fullname; ?> <sub class="float-right"><i>Teacher</i></sub></a></li>
			<?php
		}
	}


	function student_chat_to_parent(){

		$conn = $GLOBALS['conn'];

		$student_login_id = $_COOKIE['login_id'];

		$get_students_parent_sql = "SELECT student_dad, student_mum, student_guardian FROM tbl_student WHERE student_system_code = '$student_login_id'";
		$get_students_parent_result = mysqli_query($conn, $get_students_parent_sql);
		$get_students_parent_row = mysqli_fetch_assoc($get_students_parent_result);

		$parent_mum = $get_students_parent_row['student_mum'];
		$parent_dad = $get_students_parent_row['student_dad'];
		$parent_guardian = $get_students_parent_row['student_guardian'];

		if ($parent_mum != NULL) {

			$get_parent_name_sql = "SELECT * FROM tbl_parent WHERE parent_system_code = '$parent_mum'";
			$parent_system_code = $parent_mum;

			$get_parent_name_result = mysqli_query($conn, $get_parent_name_sql);
			$get_parent_name_row = mysqli_fetch_assoc($get_parent_name_result);

			$title = $get_parent_name_row['parent_title'];
			$fname = $get_parent_name_row['parent_fname'];
			$lname = $get_parent_name_row['parent_lname'];
			$fullname = ''.$title.' '.$fname.' '.$lname.'';
			?>
				<li><a href="javascript:void(0);" class="openmodal" data-href="api/get_chat.php?type=4&from=<?php echo $student_login_id; ?>&to=<?php echo $parent_system_code; ?>"><?php echo $fullname; ?> <sub class="float-right"><i>Parent [MUM]</i></sub></a></li>
			<?php
		} else { }

		if ($parent_dad != NULL) {

			$get_parent_name_sql = "SELECT * FROM tbl_parent WHERE parent_system_code = '$parent_dad'";
			$parent_system_code = $parent_dad;

			$get_parent_name_result = mysqli_query($conn, $get_parent_name_sql);
			$get_parent_name_row = mysqli_fetch_assoc($get_parent_name_result);

			$title = $get_parent_name_row['parent_title'];
			$fname = $get_parent_name_row['parent_fname'];
			$lname = $get_parent_name_row['parent_lname'];
			$fullname = ''.$title.' '.$fname.' '.$lname.'';
			?>
				<li><a href="javascript:void(0);" class="openmodal" data-href="api/get_chat.php?type=4&from=<?php echo $student_login_id; ?>&to=<?php echo $parent_system_code; ?>"><?php echo $fullname; ?> <sub class="float-right"><i>Parent [DAD]</i></sub></a></li>
			<?php
		} else { }

		if ($parent_guardian != NULL) {

			$get_parent_name_sql = "SELECT * FROM tbl_parent WHERE parent_system_code = '$parent_guardian'";
			$parent_system_code = $parent_guardian;

			$get_parent_name_result = mysqli_query($conn, $get_parent_name_sql);
			$get_parent_name_row = mysqli_fetch_assoc($get_parent_name_result);

			$title = $get_parent_name_row['parent_title'];
			$fname = $get_parent_name_row['parent_fname'];
			$lname = $get_parent_name_row['parent_lname'];
			$fullname = ''.$title.' '.$fname.' '.$lname.'';
			?>
				<li><a href="javascript:void(0);" class="openmodal" data-href="api/get_chat.php?type=4&from=<?php echo $student_login_id; ?>&to=<?php echo $parent_system_code; ?>"><?php echo $fullname; ?> <sub class="float-right"><i>Parent [GUARDIAN]</i></sub></a></li>
			<?php
		} else { }
	}

	function student_chat_to_teacher(){

		$conn = $GLOBALS['conn'];

		$student_login_id = $_COOKIE['login_id'];

		$get_teachers_sql = "SELECT * FROM tbl_teacher";
		$get_teachers_result = mysqli_query($conn, $get_teachers_sql);

		while($get_teachers_row = mysqli_fetch_assoc($get_teachers_result)) {

			$to_id = $get_teachers_row['teacher_system_code'];
			$title = $get_teachers_row['teacher_title'];
			$fname = $get_teachers_row['teacher_fname'];
			$lname = $get_teachers_row['teacher_lname'];
			$fullname = ''.$title.' '.$fname.' '.$lname.'';

			?>
				<li><a href="javascript:void(0);" class="openmodal" data-href="api/get_chat.php?type=5&from=<?php echo $student_login_id; ?>&to=<?php echo $to_id; ?>"><?php echo $fullname; ?> <sub class="float-right"><i>Teacher</i></sub></a></li>
			<?php
		}
	}


	function parent_chat_to_child(){

		$conn = $GLOBALS['conn'];

		$parent_login_id = $_COOKIE['login_id'];

		$get_children_sql = "SELECT * FROM tbl_student WHERE student_dad = '$parent_login_id' OR student_mum = '$parent_login_id' OR student_guardian = '$parent_login_id'";
		$get_children_result = mysqli_query($conn, $get_children_sql);

		while($get_children_row = mysqli_fetch_assoc($get_children_result)) {

			$to_id = $get_children_row['student_system_code'];
			$fname = $get_children_row['student_fname'];
			$lname = $get_children_row['student_lname'];
			$fullname = ''.$fname.' '.$lname.'';

			?>
				<li><a href="javascript:void(0);" class="openmodal" data-href="api/get_chat.php?type=6&from=<?php echo $parent_login_id; ?>&to=<?php echo $to_id; ?>"><?php echo $fullname; ?> <sub class="float-right"><i>Child</i></sub></a></li>
			<?php
		}
	}

	function parent_chat_to_teacher(){

		$conn = $GLOBALS['conn'];

		$parent_login_id = $_COOKIE['login_id'];

		$get_teachers_sql = "SELECT * FROM tbl_teacher";
		$get_teachers_result = mysqli_query($conn, $get_teachers_sql);

		while($get_teachers_row = mysqli_fetch_assoc($get_teachers_result)) {

			$to_id = $get_teachers_row['teacher_system_code'];
			$title = $get_teachers_row['teacher_title'];
			$fname = $get_teachers_row['teacher_fname'];
			$lname = $get_teachers_row['teacher_lname'];
			$fullname = ''.$title.' '.$fname.' '.$lname.'';

			?>
				<li><a href="javascript:void(0);" class="openmodal" data-href="api/get_chat.php?type=7&from=<?php echo $parent_login_id; ?>&to=<?php echo $to_id; ?>"><?php echo $fullname; ?> <sub class="float-right"><i>Teacher</i></sub></a></li>
			<?php
		}
	}

	// 1=teacher-student**2=teacher-parent**3=teacher-teacher**4=student-parent**5=student-teacher**6=parent-student**7=parent-teacher

	function get_chat_history($m_type, $m_from, $m_to){

		$conn = $GLOBALS['conn'];

		switch ($m_type) {
			case '1':
				// $m_from = teacher
				// $m_to = student

				$get_chat_history_sql = "SELECT * FROM tbl_chat WHERE ((from_user_id = '$m_from' AND to_user_id = '$m_to') AND chat_type = '1') OR ((from_user_id = '$m_to' AND to_user_id = '$m_from') AND chat_type = '5') ORDER BY time_sent DESC ";
				break;

			case '2':
				// $m_from = teacher
				// $m_to = parent

				$get_chat_history_sql = "SELECT * FROM tbl_chat WHERE ((from_user_id = '$m_from' AND to_user_id = '$m_to') AND chat_type = '2') OR ((from_user_id = '$m_to' AND to_user_id = '$m_from') AND chat_type = '7') ORDER BY time_sent DESC ";
				break;

			case '3':
				// $m_from = teacher
				// $m_to = teacher

				$get_chat_history_sql = "SELECT * FROM tbl_chat WHERE ((from_user_id = '$m_from' AND to_user_id = '$m_to') AND chat_type = '3') OR ((from_user_id = '$m_to' AND to_user_id = '$m_from') AND chat_type = '3') ORDER BY time_sent DESC ";
				break;

			case '4':
				// $m_from = student
				// $m_to = parent

				$get_chat_history_sql = "SELECT * FROM tbl_chat WHERE ((from_user_id = '$m_from' AND to_user_id = '$m_to') AND chat_type = '4') OR ((from_user_id = '$m_to' AND to_user_id = '$m_from') AND chat_type = '6') ORDER BY time_sent DESC ";
				break;

			case '5':
				// $m_from = student
				// $m_to = teacher

				$get_chat_history_sql = "SELECT * FROM tbl_chat WHERE ((from_user_id = '$m_from' AND to_user_id = '$m_to') AND chat_type = '5') OR ((from_user_id = '$m_to' AND to_user_id = '$m_from') AND chat_type = '1') ORDER BY time_sent DESC ";
				break;

			case '6':
				// $m_from = parent
				// $m_to = student

				$get_chat_history_sql = "SELECT * FROM tbl_chat WHERE ((from_user_id = '$m_from' AND to_user_id = '$m_to') AND chat_type = '6') OR ((from_user_id = '$m_to' AND to_user_id = '$m_from') AND chat_type = '4') ORDER BY time_sent DESC ";
				break;

			case '7':
				// $m_from = parent
				// $m_to = teacher

				$get_chat_history_sql = "SELECT * FROM tbl_chat WHERE ((from_user_id = '$m_from' AND to_user_id = '$m_to') AND chat_type = '7') OR ((from_user_id = '$m_to' AND to_user_id = '$m_from') AND chat_type = '2') ORDER BY time_sent DESC ";
				break;
			
			default:
				#code ...
				break;
		}

		$get_chat_history_result = mysqli_query($conn, $get_chat_history_sql);
		while ($get_chat_history_row = mysqli_fetch_assoc($get_chat_history_result)) {
			if ($get_chat_history_row['from_user_id'] == $m_from) {

				$side = 'me';
			} elseif ($get_chat_history_row['from_user_id'] == $m_to) {

				$side = '';
			} else {

				$side = 'none';
			}
			?>
				<div class="message <?php echo $side; ?>">
					<p class="info"><?php echo $get_chat_history_row["message"]; ?> </p>
				</div>
			<?php
		}
	}

	function get_all_teachers_record(){

		$conn = $GLOBALS['conn'];

		$get_teachers_record_sql = "SELECT * FROM tbl_teacher";
		$get_teachers_record_result = mysqli_query($conn, $get_teachers_record_sql);

		while($get_teachers_record_row = mysqli_fetch_assoc($get_teachers_record_result)){

			$title = $get_teachers_record_row['teacher_title'];
			$fname = $get_teachers_record_row['teacher_fname'];
			$lname = $get_teachers_record_row['teacher_lname'];
			$fullname = ''.$title.' '.$fname.' '.$lname.'';

			$teacher_subject_id = $get_teachers_record_row['teacher_subject'];

			$get_subject_sql = "SELECT * FROM tbl_subject WHERE subject_id = '$teacher_subject_id'";
			$get_subject_result = mysqli_query($conn, $get_subject_sql);
			$get_subject_row = mysqli_fetch_assoc($get_subject_result);

			$subject_name = $get_subject_row['subject_name'];
			$contact = $get_teachers_record_row['teacher_contact'];

			$info = $get_teachers_record_row['teacher_additional_role'];

			if ($info != "") {

				$additional_info = "<br> <b>Additional role:</b> <b>".$info."</b>";
			} else {

				$additional_info = "";
			}

			?>
				<div class="col-lg-3 col-md-6 col-sm-12">
				  <div class="tile">
					<h3 class="tile-title"><?php echo $fullname; ?></h3>
					<div class="tile-body">
					  <b>Subject:</b> <b><?php echo $subject_name; ?></b> <br> <b>Contact:</b> <b><?php echo $contact; ?></b> <?php echo $additional_info; ?>

					</div>
				  </div>
				</div>
			<?php
		}
	}

	function get_school_events(){

		if (isset($_GET['section'])) { $get_section = $_GET['section']; } else { $get_section = ""; }

		switch ($get_section) {
			case 'junior_school':
				?><img src="../media/image/school_event/junior_school.jpg" class="school_event_images" alt="school_event"><?php
				break;

			case 'senior_school':
				?><img src="../media/image/school_event/senior_school.jpg" class="school_event_images" alt="school_event"><?php
				break;
			
			default:
				?>
				<!-- TILES -->
				  <div class="row">
					<div class="col-md-6">
					  <div class="click_effect">
						<a href="?section=junior_school">
						  <div class="widget-small primary"><i class="icon fa fa-cubes fa-3x"></i>
							<div class="info"><h4>JUNIOR SCHOOL</h4></div>
						  </div>
						</a>
					  </div>
					</div>
					<div class="col-md-6">
					  <div class="click_effect">
						<a href="?section=senior_school">
						  <div class="widget-small info"><i class="icon fa fa-cubes fa-3x"></i>
							<div class="info"><h4>SENIOR SCHOOL</h4></div>
						  </div>
						</a>
					  </div>
					</div>
				  </div>
				  <!-- //TILES -->
				<?php
				break;
		}

		if ($get_section == "junior_school" || $get_section == "senior_school") {
			?>
				<br><br>
				<div class="row">
				  <div class="col-md-6">
					<div class="click_effect">
					  <a href="../media/image/school_event/<?php echo $get_section; ?>.jpg" download="">
						<div class="widget-small primary"><i class="icon fa fa-download fa-3x"></i>
						  <div class="info"><h4>Download</h4></div>
						</div>
					  </a>
					</div>
				  </div>
				</div>
			<?php
		}
	}

	function get_logged_in_teacher_name(){

		$conn = $GLOBALS['conn'];

		$teacher_login_id = $_COOKIE['login_id'];

		$get_teacher_name_sql = "SELECT * FROM tbl_teacher WHERE teacher_system_code = '$teacher_login_id'";
		$get_teacher_name_result = mysqli_query($conn, $get_teacher_name_sql);
		$get_teacher_name_row = mysqli_fetch_assoc($get_teacher_name_result);

		$title = $get_teacher_name_row['teacher_title'];
		$fname = $get_teacher_name_row['teacher_fname'];
		$lname = $get_teacher_name_row['teacher_lname'];
		$fullname = ''.$title.' '.$fname.' '.$lname.'';

		echo $fullname;
	}

	function get_logged_in_teacher_subject(){

		$conn = $GLOBALS['conn'];

		$teacher_login_id = $_COOKIE['login_id'];

		$get_teacher_name_sql = "SELECT teacher_subject FROM tbl_teacher WHERE teacher_system_code = '$teacher_login_id'";
		$get_teacher_name_result = mysqli_query($conn, $get_teacher_name_sql);
		$get_teacher_name_row = mysqli_fetch_assoc($get_teacher_name_result);

		$teacher_subject_id = $get_teacher_name_row['teacher_subject'];

		$get_subject_sql = "SELECT * FROM tbl_subject WHERE subject_id = '$teacher_subject_id'";
		$get_subject_result = mysqli_query($conn, $get_subject_sql);
		$get_subject_row = mysqli_fetch_assoc($get_subject_result);

		$subject_name = $get_subject_row['subject_name'];

		echo $subject_name;
	}

	function get_logged_in_parent_name(){

		$conn = $GLOBALS['conn'];

		$parent_login_id = $_COOKIE['login_id'];

		$get_parent_name_sql = "SELECT * FROM tbl_parent WHERE parent_system_code = '$parent_login_id'";
		$get_parent_name_result = mysqli_query($conn, $get_parent_name_sql);
		$get_parent_name_row = mysqli_fetch_assoc($get_parent_name_result);

		$title = $get_parent_name_row['parent_title'];
		$fname = $get_parent_name_row['parent_fname'];
		$lname = $get_parent_name_row['parent_lname'];
		$fullname = ''.$title.' '.$fname.' '.$lname.'';

		echo $fullname;
	}

	function get_logged_in_student_name(){

		$conn = $GLOBALS['conn'];

		$student_login_id = $_COOKIE['login_id'];

		$get_student_name_sql = "SELECT * FROM tbl_student WHERE student_system_code = '$student_login_id'";
		$get_student_name_result = mysqli_query($conn, $get_student_name_sql);
		$get_student_name_row = mysqli_fetch_assoc($get_student_name_result);

		$fname = $get_student_name_row['student_fname'];
		$lname = $get_student_name_row['student_lname'];
		$fullname = ''.$fname.' '.$lname.'';

		echo $fullname;
	}

	function get_number_of_children(){

		$conn = $GLOBALS['conn'];

		$parent_login_id = $_COOKIE['login_id'];

		$get_students_sql = "SELECT * FROM tbl_student WHERE student_dad = '$parent_login_id' OR student_mum = '$parent_login_id' OR student_guardian = '$parent_login_id'";
		$get_students_result = mysqli_query($conn, $get_students_sql);

		$no_of_children = mysqli_num_rows($get_students_result);

		if ($no_of_children > "1") {

			echo '<b> '.$no_of_children.' </b> Children';
		} elseif ($no_of_children == "1") {

			echo '<b> '.$no_of_children.'</b> Child';
		} else {

			echo '<b> 0 child </b>';
		}
	}

	function get_logged_in_student_class(){

		$conn = $GLOBALS['conn'];

		$student_login_id = $_COOKIE['login_id'];

		$get_student_class_sql = "SELECT student_class_id FROM tbl_student WHERE student_system_code = '$student_login_id'";
		$get_student_class_result = mysqli_query($conn, $get_student_class_sql);
		$get_student_class_row = mysqli_fetch_assoc($get_student_class_result);

		$student_class_id = $get_student_class_row['student_class_id'];

		$get_student_class_name_sql = "SELECT class_name FROM tbl_class WHERE class_id = '$student_class_id'";
		$get_student_class_name_result = mysqli_query($conn, $get_student_class_name_sql);
		$get_student_class_name_row = mysqli_fetch_assoc($get_student_class_name_result);

		$student_class = $get_student_class_name_row['class_name'];

		echo $student_class;
	}

	function get_subjects_for_class($class_id){

		$conn = $GLOBALS['conn'];

		$get_subjects_for_class_sql = "SELECT * FROM tbl_subject WHERE subject_class_id = '$class_id'";
		$get_subjects_for_class_result = mysqli_query($conn, $get_subjects_for_class_sql);

		echo '<div class="row">';

		while($get_subjects_for_class_row = mysqli_fetch_assoc($get_subjects_for_class_result)){

			$subject_id = $get_subjects_for_class_row['subject_id'];
			$subject_name = $get_subjects_for_class_row['subject_name'];

			?>
				<div class="col-md-6">
				  <div class="click_effect">
					<a href="?page=choose_note&class=<?php echo $class_id; ?>&subject=<?php echo $subject_id; ?>">
					  <div class="widget-small primary"><i class="icon fa fa-cubes fa-3x"></i>
						<div class="info"><h4><?php echo $subject_name; ?></h4></div>
					  </div>
					</a>
				  </div>
				</div>
			<?php
		}

		echo '</div>';
	}

	function get_notes_on_subject($class_id, $subject_id){

		$conn = $GLOBALS['conn'];

		$get_notes_for_subject_sql = "SELECT * FROM tbl_notes WHERE note_class_id = '$class_id' AND note_subject_id = '$subject_id'";
		$get_notes_for_subject_result = mysqli_query($conn, $get_notes_for_subject_sql);

		if (mysqli_num_rows($get_notes_for_subject_result) == 1) {

			echo '<div class="row">';

			while($get_notes_for_subject_row = mysqli_fetch_assoc($get_notes_for_subject_result)){

			  $note_id = $get_notes_for_subject_row['note_id'];
			  $note_title = $get_notes_for_subject_row['note_title'];

			  ?>
				<div class="col-md-6">
				  <div class="click_effect">
					<a href="?page=note_content&class=<?php echo $class_id; ?>&subject=<?php echo $subject_id; ?>&note=<?php echo $note_id; ?>">
					  <div class="widget-small primary"><i class="icon fa fa-cubes fa-3x"></i>
						<div class="info"><h4><?php echo $note_title; ?></h4></div>
					  </div>
					</a>
				  </div>
				</div>
			  <?php
		  	}

			echo '</div>';
		} else {
			?>
			<div class="page-error tile">
				<h1><i class="fa fa-frown-o"></i> NO NOTE UPLOADED YET FOR THIS SUBJECT</h1>
			</div>
			<?php
		}
	}

	function get_note_content($class_id, $subject_id, $note_id){

		$conn = $GLOBALS['conn'];

		$get_notes_content_sql = "SELECT * FROM tbl_notes WHERE note_class_id = '$class_id' AND note_subject_id = '$subject_id' AND note_id = '$note_id'";
		$get_notes_content_result = mysqli_query($conn, $get_notes_content_sql);

		if (mysqli_num_rows($get_notes_content_result) == 1) {

			$get_notes_content_row = mysqli_fetch_assoc($get_notes_content_result);

			$note_title = $get_notes_content_row['note_title'];
			$note_filename = rawurlencode($get_notes_content_row['note_filename']);

			?>
				<!-- Notes Title -->
				<h4 class="card-header text-center"><?php echo $note_title; ?></h4>

				<iframe src="../ViewerJS/?title= #../media/notes/<?php echo $note_filename ?>" style="width: 100%; min-height: 655px;"></iframe>
				<!-- <iframe src="../ViewerJS/?title=<?php echo $title ?>#<?php echo ''.$cv_path.'' ?>" width="100%" height="655px"></iframe> -->

				<!-- TILES -->
				<br><br>
				<div class="row">
					<div class="col-md-6">
					  <div class="click_effect">
						<a href="../media/notes/<?php echo $note_filename ?>" download="">
						  <div class="widget-small primary"><i class="icon fa fa-download fa-3x"></i>
							<div class="info"><h4>Download</h4></div>
						  </div>
						</a>
					  </div>
					</div>
				</div>
				<!-- Notes Image -->
			<?php
		} else {
			?>
			<div class="page-error tile">
				<h1><i class="fa fa-frown-o"></i> INTERNAL ERROR. PLEASE GO BACK</h1>
				<p><a class="btn btn-primary" href="javascript:window.history.back();">Go Back</a></p>
			</div>
			<?php
		}
		
	}

?>