<form action="javascript:void(0);" method="POST" id="teacher_update_password_form">
	<div class="row">
		<div class="col-md-8 mb-4">
			<label>Current Password</label>
			<input class="form-control" id="current_password" required name="current_password" type="password" placeholder="Enter Current Password">
		</div>
		<div class="clearfix"></div>
		<div class="col-md-8 mb-4">
			<label>New Password</label>
			<input class="form-control" id="new_password" required name="new_password" type="password" placeholder="Enter New Password">
		</div>
		<div class="clearfix"></div>
		<div class="col-md-8 mb-4">
			<label>Confirm Password</label>
			<input class="form-control" id="confirm_new_password" required name="confirm_new_password" type="password" placeholder="Confirm New Password">
		</div>
	</div>
	<div class="row mb-10">
		<div class="col-md-12">
			<button class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i> Save</button>
		</div>
	</div>
</form>