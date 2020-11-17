<?php require ('api/config.php'); ?>
<?php

	$student_pcode1 = 'P'.get_rand_numbers(5).'';
	$student_pcode2 = 'P'.get_rand_numbers(5).'';

	$student_system_code1 = 'ST'.get_rand_alphanumeric(30).'';
	$student_system_code2 = 'ST'.get_rand_alphanumeric(30).'';
	$parent_system_code1 = 'PT'.get_rand_alphanumeric(30).'';
	$parent_system_code2 = 'PT'.get_rand_alphanumeric(30).'';
	$teacher_system_code1 = 'TE'.get_rand_alphanumeric(30).'';
	$teacher_system_code2 = 'TE'.get_rand_alphanumeric(30).'';
	
	$student_sql = "INSERT INTO `tbl_student` (`student_id`, `student_fname`, `student_lname`, `student_gender`, `student_class_id`, `student_login_id`, `student_login_pswd`, `student_pcode`, `student_dad`, `student_mum`, `student_guardian`, `student_status`, `student_system_code`)
	VALUES ('1', 'Eniola', 'Osabiya', 'M', '4', '2004/0019', 'c!a@l#e*b!9136fa8d93443b5535bda485c622b05ce9199f77c!a@l#e*b!', '$student_pcode1', NULL, NULL, NULL, '1', '$student_system_code1'),
	('2', 'Onyehanere', 'Priscilla', 'F', '4', '2004/0020', 'c!a@l#e*b!9136fa8d93443b5535bda485c622b05ce9199f77c!a@l#e*b!', '$student_pcode2', NULL, NULL, NULL, '1', '$student_system_code2');";

	$parent_sql = "INSERT INTO `tbl_parent` (`parent_id`, `parent_title`, `parent_fname`, `parent_lname`, `parent_gender`, `parent_email`, `parent_pswd`, `parent_contact`, `parent_status`, `parent_system_code`)
	VALUES ('1', 'Mr', 'Olaribigbe', 'Osabiya', 'M', 'oosabiya@gmail.com', 'c!a@l#e*b!9136fa8d93443b5535bda485c622b05ce9199f77c!a@l#e*b!', '08023246760', '1', '$parent_system_code1'),
	('2', 'Mrs', 'Olakemi', 'Osabiya', 'F', 'olasabiya@gmail.com', 'c!a@l#e*b!9136fa8d93443b5535bda485c622b05ce9199f77c!a@l#e*b!', '08097576860', '1', '$parent_system_code2');";

	$teacher_sql = "INSERT INTO `tbl_teacher` (`teacher_id`, `teacher_title`, `teacher_fname`, `teacher_lname`, `teacher_gender`, `teacher_email`, `teacher_pswd`, `teacher_contact`, `teacher_subject`, `teacher_additional_role`, `teacher_system_code`)
	VALUES ('1', 'Mr', 'Enoch', 'Olisa', 'M', 'eolisa@gmail.com', 'c!a@l#e*b!9136fa8d93443b5535bda485c622b05ce9199f77c!a@l#e*b!', '07044693928', '6', 'H.O.D MATHEMATICS', '$teacher_system_code1'),
	('2', 'Mrs', 'Adebisi', 'Olisa', 'F', 'adeolisa@gmail.com', 'c!a@l#e*b!9136fa8d93443b5535bda485c622b05ce9199f77c!a@l#e*b!', '07044695543', '12', 'H.O.D ENGLISH', '$teacher_system_code2')";

	$class_sql = "INSERT INTO `tbl_class` (`class_id`, `class_name`)
	VALUES ('1', 'JSS1'),
	('2', 'JSS2'),
	('3', 'JSS3'),
	('4', 'SSS1'),
	('5', 'SSS2'),
	('6', 'SSS3')";

	$subject_sql = "INSERT INTO `tbl_subject` (`subject_id`, `subject_name`, `subject_class_id`)
	VALUES ('1', 'Mathematics', '1'),
	('2', 'Mathematics', '2'),
	('3', 'Mathematics', '3'),
	('4', 'Mathematics', '4'),
	('5', 'Mathematics', '5'),
	('6', 'Mathematics', '6'),
	('7', 'English Language', '1'),
	('8', 'English Language', '2'),
	('9', 'English Language', '3'),
	('10', 'English Language', '4'),
	('11', 'English Language', '5'),
	('12', 'English Language', '6')";


	// $sql .= "INSERT INTO MyGuests (firstname, lastname, email)
	// VALUES ('Julie', 'Dooley', 'julie@example.com')";
	mysqli_query($conn, $student_sql);
	mysqli_query($conn, $parent_sql);
	mysqli_query($conn, $teacher_sql);
	mysqli_query($conn, $class_sql);
	mysqli_query($conn, $subject_sql);


	mysqli_close($conn);
?>