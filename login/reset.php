<?php require ('api/config.php'); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "Password Reset Form";?>
  <?php require ('constant/head.php'); ?>
  <!-- //Head -->

  <body>
    <section class="material-half-bg"><div class="cover"></div></section>

    <section class="login-content">
      <div class="logo">
        <h1><?php echo $system_name; ?></h1>
      </div>
      <div id="reset_password_status"></div>
      <div class="login-box" style="min-height: 450px;">
        <?php
          if (isset($_GET['token'])) { $token = $_GET['token']; } else { $token = ""; }

          $sql = "SELECT * FROM tbl_reset_token WHERE reset_token_code = '$token' limit 1";
          $result = mysqli_query($conn, $sql);
          if (mysqli_num_rows($result) == 1) {

            require ('form/reset_password_form.php');
          } else {
            ?>
              <div class='alert alert-danger' style="padding: 14em 4em; margin-bottom: 0px;">
                <strong>Could not use this token because:</strong>
                <br>
                <li>This token is invalid</li>
                <li>This token is already used</li>
              </div>
            <?php
          }
        ?>
      </div>
    </section>
    
    <?php require ('constant/bottom_script.php'); ?>
    <script type="text/javascript">
      function check_passwords(){
        if(reset_password_form.new_password.value == ""){

          swal({ title: "Enter New Password", type: "info" });
          reset_password_form.new_password.focus();
          return false;
        }

        if(reset_password_form.confirm_new_password.value == ""){

          swal({ title: "Enter Confirm Password", type: "info" });
          reset_password_form.confirm_new_password.focus();
          return false;
        }

        if(reset_password_form.confirm_new_password.value != reset_password_form.new_password.value){

          swal({ title: "Passwords do not match", type: "info" });
          return false;
        }
        return true;
      }
    </script>

  </body>
</html>
