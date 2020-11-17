<form autocomplete="off" class="login-form" method="post" action="api/login_query?login=student" required>
  <h3 class="login-head"><i class="fa fa-lg fa-fw fa-child"></i>STUDENT SIGN IN</h3>
  <div class="form-group">
    <label class="control-label">ADMISSION NUMBER</label>
    <input required name="login_id" class="form-control" type="text" placeholder="Admission Number Code" autofocus>
  </div>
  <div class="form-group">
    <label class="control-label">PASSWORD</label>
    <input required name="login_password" class="form-control" type="password" placeholder="Password">
  </div>
  <div class="form-group btn-container">
    <button class="btn btn-primary btn-block" type="submit" name="verify_bt"><i class="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
  </div>
</form>