<?php require ('api/config.php'); ?>
<?php check_login("3"); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "School Events"; ?>
  <?php require ('constant/head.php'); ?>
  <!-- //Head -->

  <body class="app sidebar-mini rtl">

    <!-- Navigation Bar-->
    <?php require ('constant/navigation_parent.php'); ?>
    <!-- //Navigation Bar-->

    <!-- Sidebar Navigation -->
    <?php require ('constant/sidenav_parent.php'); ?>
    <!-- //Sidebar Navigation -->

    <main class="app-content">

      <!-- Page Title -->
      <div class="app-title">
        <div>
          <h1><i class="fa fa-calendar"></i> School Events</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="">School Events</a></li>
        </ul>
      </div>
      <!-- //Page Title -->

      <?php get_school_events(); ?>

    </main>

    <?php require ('constant/bottom_script.php'); ?>

  </body>
</html>