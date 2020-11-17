<?php require ('api/config.php'); ?>
<?php check_gen_login(); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "Login";?>
  <?php require ('constant/head.php'); ?>
  <!-- //Head -->

  <script type="text/javascript">
    function reload_page() {
      window.onload = function (){
        if(!window.location.hash){
          window.location = window.location + '#loaded';
          window.location.reload();
        }
      }
    }
    reload_page();
  </script>

  <body>
    <section class="material-half-bg"><div class="cover"></div></section>

    <section class="login-content">
      <div class="logo">
        <h1><?php echo $system_name; ?></h1>
      </div>
      <?php check_error_msg(); ?>
      <div class="login-box" style="min-height: 450px;">
        <?php
          if (isset($_GET['form'])) { $get_form = $_GET['form']; } else { $get_form = ""; }

          switch ($get_form) {
            case 'teacher':
            ?>
              <?php require ('form/login_teacher.php'); ?>
              <?php require ('form/forget_teacher.php'); ?>
            <?php
              break;

            case 'student':
            ?>
              <?php require ('form/login_student.php'); ?>
            <?php
              break;

            case 'parent':
            ?>
              <?php require ('form/login_parent.php'); ?>
              <?php require ('form/forget_parent.php'); ?>
            <?php
              break;
            
            default:
            ?>
              <?php require ('constant/choose_login.php'); ?>
            <?php
              break;
          }
        ?>
      </div>
    </section>
    
    <?php require ('constant/bottom_script.php'); ?>

  </body>
</html>
