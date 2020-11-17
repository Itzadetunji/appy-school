<form autocomplete="off" class="login-form" action="javascript:void(0);" method="POST" id="reset_password_form">
  <h3 class="login-head"><i class="fa fa-lg fa-fw fa-lock"></i>RESET PASSWORD</h3>
  <div class="form-group">
    <label class="control-label">New Password</label>
    <input class="form-control" id="new_password" required name="new_password" type="password" placeholder="Enter New Password">
  </div>
  <div class="form-group">
    <label class="control-label">Confirm Password</label>
    <input class="form-control" id="confirm_new_password" required name="confirm_new_password" type="password" placeholder="Confirm New Password">
  </div>
  <input type="text" name="token" value="<?php echo $token; ?>" id="token" required hidden>
  <div class="form-group btn-container">
    <button class="btn btn-primary btn-block" type="submit" onclick="return check_passwords();" name="verify_bt"><i class="fa fa-sign-in fa-lg fa-fw"></i>RESET PASSWORD</button>
  </div>
</form>