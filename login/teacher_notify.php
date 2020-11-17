<?php require ('api/config.php'); ?>
<?php check_login("1"); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "Notify"; ?>
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
          <h1><i class="fa fa-bell"></i> Notify</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="">Notify</a></li>
        </ul>
      </div>
      <!-- //Page Title -->

      <!-- FORM -->
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 col-md-12">
          <div class="tile">
            <h3 class="tile-title">Notify Form</h3>
            <div id="notify_student_status"></div>
            <?php require ('form/teacher_notify_student_form.php') ?>
          </div>
        </div>
        <div class="col-lg-2"></div>
      </div>
      <!-- //FORM -->

    </main>

    <?php require ('constant/bottom_script.php'); ?>

  </body>
</html>