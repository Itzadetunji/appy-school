<?php require ('api/config.php'); ?>
<?php check_gen_login(); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "Project Name";?>
  <?php require ('pt/head.php'); ?>
  <!-- //Head -->

  <body>
    <section class="material-half-bg"><div class="cover"></div></section>

    <section class="login-content">
      <div class="logo">
        <h1></h1>
      </div>
      <?php check_error_msg(); ?>
      <div class="login-box" style="min-height: 450px;">
        <form autocomplete="off" class="login-form" method="post" action="#">
          <h3 class="login-head"><i class="fa fa-lg fa-fw fa-edit"></i>REGISTER</h3>
          <div class="form-group">
            <label class="control-label">TITLE</label>
            <select class="form-control" id="title" required name="title">
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
            </select>
          </div>
          <div class="form-group">
            <label class="control-label">PASSWORD</label>
            <input required class="form-control" type="password" placeholder="Password">
          </div>
          <div class="form-group btn-container">
            <!-- <input type="submit" name="verify_bt" class="btn btn-primary btn-block" value="SIGN IN"> -->
            <button class="btn btn-primary btn-block" type="submit" name="verify_bt"><i class="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
          </div>
        </form>
      </div>
    </section>

    <?php require ('pt/bottom_script.php'); ?>

  </body>
</html>
