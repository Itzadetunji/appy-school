<?php require ('api/config.php'); ?>
<?php check_login("2"); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "Dashboard"; ?>
  <?php require ('constant/head.php'); ?>
  <!-- //Head -->

  <body class="app sidebar-mini rtl">

    <!-- Navigation Bar-->
    <?php require ('constant/navigation_student.php'); ?>
    <!-- //Navigation Bar-->

    <!-- Sidebar Navigation -->
    <?php require ('constant/sidenav_student.php'); ?>
    <!-- //Sidebar Navigation -->

    <main class="app-content">

      <!-- Page Title -->
      <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i> Dashboard</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
        </ul>
      </div>
      <!-- //Page Title -->

      <!-- TILES -->
      <div class="row">
        <div class="col-md-6">
          <div class="click_effect">
            <a href="student_timetable">
              <div class="widget-small primary coloured-icon"><i class="icon fa fa-calendar fa-3x"></i>
                <div class="info"><h4>TIME-TABLE</h4></div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="click_effect">
            <a href="student_notes">
              <div class="widget-small info coloured-icon"><i class="icon fa fa-book fa-3x"></i>
                <div class="info"><h4>NOTES</h4></div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="click_effect">
            <a href="student_chat">
              <div class="widget-small warning coloured-icon"><i class="icon fa fa-comments fa-3x"></i>
                <div class="info"><h4>CHAT</h4></div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="click_effect">
            <a href="student_school_events">
              <div class="widget-small danger coloured-icon"><i class="icon fa fa-star fa-3x"></i>
                <div class="info"><h4>SCHOOL EVENTS</h4></div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="click_effect">
            <a href="student_notification">
              <div class="widget-small primary coloured-icon"><i class="icon fa fa-bell fa-3x"></i>
                <div class="info"><h4>NOTIFICATION</h4></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- //TILES -->

    </main>

    <?php require ('constant/bottom_script.php'); ?>

  </body>
</html>
