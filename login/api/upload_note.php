<?php error_reporting(0); ?>
<?php include('config.php'); ?>
<?php
	$note_title = mysqli_real_escape_string($conn, ucwords($_POST['note_title']));
	$note_class_id = mysqli_real_escape_string($conn, $_POST['note_class']);
	$note_subject_id = mysqli_real_escape_string($conn, $_POST['note_subject']);

	if ($note_title != "" && $note_class_id != "" && $note_subject_id != "") {

		$note_filename_generate = strtolower(str_replace(" ", "_", $note_title));
		
		$note_upload_dir = "../../media/notes/";
		$note_info = $_FILES["upload_note"]["name"];
		$file_extension = strtolower(pathinfo($note_info, PATHINFO_EXTENSION));

		$note_filename = "".$note_filename_generate."_".get_rand_numbers(5).".".$file_extension."";

		$target_file = $note_upload_dir . basename($note_filename);

		// Check file size
		if ($_FILES["upload_note"]["size"] > 5000000) {

			header("location:../teacher_upload_note?er=The file is too large to upload&erty=danger");
		} else {

			// Allow certain file formats
			if( $file_extension != "pdf") {

				header("location:../teacher_upload_note?er=Please Upload format must be a pdf&erty=danger");
			} else {

				// if everything is ok, try to upload file
				if (move_uploaded_file($_FILES["upload_note"]["tmp_name"], $target_file)) {

					$insert_note = "INSERT INTO tbl_notes (note_title, note_filename, note_subject_id, note_class_id)
						VALUES ('$note_title', '$note_filename', '$note_subject_id', '$note_class_id')";
					$insert_note_code = mysqli_query($conn, $insert_note);
					if ($insert_note_code) {

						header("location:../teacher_upload_note?er=note uploaded successfully&erty=success");
					} else {

						header("location:../teacher_upload_note?er=Error while processing Request&erty=danger");
					}
				} else {
					header("location:../teacher_upload_note?er=Error while uploading note. Try again Later&erty=danger");
				}
			}
		}
	}
?>