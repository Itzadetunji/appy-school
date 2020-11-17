<?php
	$parent_login_id = $_COOKIE['login_id'];

	$get_parent_details_sql = "SELECT * FROM tbl_parent WHERE parent_system_code = '$parent_login_id'";
	$get_parent_details_result = mysqli_query($conn, $get_parent_details_sql);
	$get_parent_details_row = mysqli_fetch_assoc($get_parent_details_result);

	$parent_title = $get_parent_details_row['parent_title'];
	$parent_fname = $get_parent_details_row['parent_fname'];
	$parent_lname = $get_parent_details_row['parent_lname'];
	$parent_email = $get_parent_details_row['parent_email'];
	$parent_contact = $get_parent_details_row['parent_contact'];
?>
<form action="javascript:void(0);" method="POST" id="parent_update_profile_form">
	<div class="row mb-4">
		<div class="col-md-8 mb-4">
			<label class="control-label">TITLE</label>
			<select class="form-control" id="title" required name="title">
				<option value="">Select Title</option>
				<option <?php if ($parent_title == "Mr") { echo "selected";} ?> value="Mr">Mr</option>
				<option <?php if ($parent_title == "Mrs") { echo "selected";} ?> value="Mrs">Mrs</option>
			</select>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-8 mb-4">
			<label>First Name</label>
			<input class="form-control" value="<?php echo $parent_fname; ?>" id="first_name" required name="first_name" type="text" placeholder="Enter First Name">
		</div>
		<div class="clearfix"></div>
		<div class="col-md-8 mb-4">
			<label>Last Name</label>
			<input class="form-control" value="<?php echo $parent_lname; ?>" id="last_name" required name="last_name" type="text" placeholder="Enter Last Name">
		</div>
		<div class="clearfix"></div>
		<div class="col-md-8 mb-4">
			<label>Email</label>
			<input class="form-control" value="<?php echo $parent_email; ?>" id="email_address" required name="email_address" type="email" placeholder="Enter Email Address">
		</div>
		<div class="clearfix"></div>
		<div class="col-md-8 mb-4">
			<label>Mobile No</label>
			<input class="form-control" value="<?php echo $parent_contact; ?>" id="phone_contact" required name="phone_contact" type="tel" placeholder="Enter Phone Number">
		</div>
	</div>
	<div class="row mb-10">
		<div class="col-md-12">
			<button class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i> Save</button>
		</div>
	</div>
</form>