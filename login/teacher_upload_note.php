<?php require ('api/config.php'); ?>
<?php check_login("1"); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "Upload Note"; ?>
  <?php require ('constant/head.php'); ?>
  <!-- //Head -->

  <body class="app sidebar-mini rtl">

    <!-- Navigation Bar-->
    <?php require ('constant/navigation_teacher.php'); ?>
    <!-- //Navigation Bar-->

    <!-- Sidebar Navigation -->
    <?php require ('constant/sidenav_teacher.php'); ?>
    <!-- //Sidebar Navigation -->

    <main class="app-content">

      <!-- Page Title -->
      <div class="app-title">
        <div>
          <h1><i class="fa fa-upload"></i> Upload Note</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="">Upload Note</a></li>
        </ul>
      </div>
      <!-- //Page Title -->

      <!-- FORM -->
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 col-md-12">
          <div class="tile">
            <h3 class="tile-title">Upload Note Form</h3>
            <?php check_error_msg(); ?>
            <!-- <div id="upload_note_status"></div> -->
            <?php require ('form/teacher_upload_note_form.php') ?>
          </div>
        </div>
        <div class="col-lg-2"></div>
      </div>
      <!-- //FORM -->

    </main>

    <?php require ('constant/bottom_script.php'); ?>

  </body>
</html>