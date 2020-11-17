<?php
	$teacher_login_id = $_COOKIE['login_id'];

	$get_teacher_details_sql = "SELECT * FROM tbl_teacher WHERE teacher_system_code = '$teacher_login_id'";
	$get_teacher_details_result = mysqli_query($conn, $get_teacher_details_sql);
	$get_teacher_details_row = mysqli_fetch_assoc($get_teacher_details_result);

	$teacher_title = $get_teacher_details_row['teacher_title'];
	$teacher_fname = $get_teacher_details_row['teacher_fname'];
	$teacher_lname = $get_teacher_details_row['teacher_lname'];
	$teacher_email = $get_teacher_details_row['teacher_email'];
	$teacher_contact = $get_teacher_details_row['teacher_contact'];
?>
<form action="javascript:void(0);" method="POST" id="teacher_update_profile_form">
	<div class="row mb-4">
		<div class="col-md-8 mb-4">
			<label class="control-label">TITLE</label>
			<select class="form-control" id="title" required name="title">
				<option value="">Select Title</option>
				<option <?php if ($teacher_title == "Mr") { echo "selected";} ?> value="Mr">Mr</option>
				<option <?php if ($teacher_title == "Mrs") { echo "selected";} ?> value="Mrs">Mrs</option>
			</select>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-8 mb-4">
			<label>First Name</label>
			<input class="form-control" value="<?php echo $teacher_fname; ?>" id="first_name" required name="first_name" type="text" placeholder="Enter First Name">
		</div>
		<div class="clearfix"></div>
		<div class="col-md-8 mb-4">
			<label>Last Name</label>
			<input class="form-control" value="<?php echo $teacher_lname; ?>" id="last_name" required name="last_name" type="text" placeholder="Enter Last Name">
		</div>
		<div class="clearfix"></div>
		<div class="col-md-8 mb-4">
			<label>Email</label>
			<input class="form-control" value="<?php echo $teacher_email; ?>" id="email_address" required name="email_address" type="email" placeholder="Enter Email Address">
		</div>
		<div class="clearfix"></div>
		<div class="col-md-8 mb-4">
			<label>Mobile No</label>
			<input class="form-control" value="<?php echo $teacher_contact; ?>" id="phone_contact" required name="phone_contact" type="tel" placeholder="Enter Phone Number">
		</div>
	</div>
	<div class="row mb-10">
		<div class="col-md-12">
			<button class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i> Save</button>
		</div>
	</div>
</form>