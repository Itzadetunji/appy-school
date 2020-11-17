<?php require ('api/config.php'); ?>
<?php check_login("2"); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "Timetable"; ?>
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
          <h1><i class="fa fa-calendar"></i> Timetable</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="">Timetable</a></li>
        </ul>
      </div>
      <!-- //Page Title -->

      <?php
        if (isset($_GET['class'])) { $get_class = $_GET['class']; } else { $get_class = ""; }

        switch ($get_class) {
          case 'JSS1':
            ?>
              <img src="../media/image/timetable/student/JSS1_timetable.jpg" class="timetable_images" alt="student_timetable">
            <?php
            break;

          case 'JSS2':
            ?>
              <img src="../media/image/timetable/student/JSS2_timetable.jpg" class="timetable_images" alt="student_timetable">
            <?php
            break;

          case 'JSS3':
            ?>
              <img src="../media/image/timetable/student/JSS3_timetable.jpg" class="timetable_images" alt="student_timetable">
            <?php
            break;

          case 'SSS1':
            ?>
              <img src="../media/image/timetable/student/SSS1_timetable.jpg" class="timetable_images" alt="student_timetable">
            <?php
            break;

          case 'SSS2':
            ?>
              <img src="../media/image/timetable/student/SSS2_timetable.jpg" class="timetable_images" alt="student_timetable">
            <?php
            break;

          case 'SSS3':
            ?>
              <img src="../media/image/timetable/student/SSS3_timetable.jpg" class="timetable_images" alt="student_timetable">
            <?php
            break;

          default:
            ?>
              <!-- TILES -->
              <div class="row">
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?class=JSS1">
                      <div class="widget-small primary"><i class="icon fa fa-cubes fa-3x"></i>
                        <div class="info"><h4>JSS 1</h4></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?class=JSS2">
                      <div class="widget-small info"><i class="icon fa fa-cubes fa-3x"></i>
                        <div class="info"><h4>JSS 2</h4></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?class=JSS3">
                      <div class="widget-small warning"><i class="icon fa fa-cubes fa-3x"></i>
                        <div class="info"><h4>JSS 3</h4></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?class=SSS1">
                      <div class="widget-small primary"><i class="icon fa fa-cubes fa-3x"></i>
                        <div class="info"><h4>SSS 1</h4></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?class=SSS2">
                      <div class="widget-small info"><i class="icon fa fa-cubes fa-3x"></i>
                        <div class="info"><h4>SSS 2</h4></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?class=SSS3">
                      <div class="widget-small warning"><i class="icon fa fa-cubes fa-3x"></i>
                        <div class="info"><h4>SSS 3</h4></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <!-- //TILES -->
            <?php
            break;
        }

        if ($get_class == "JSS1" || $get_class == "JSS2" || $get_class == "JSS3" || $get_class == "SSS1" || $get_class == "SSS2" || $get_class == "SSS3") {
          ?>
            <br><br>
            <div class="row">
              <div class="col-md-6">
                <div class="click_effect">
                  <a href="../media/image/timetable/student/<?php echo $get_class; ?>_timetable.jpg" download="">
                    <div class="widget-small primary"><i class="icon fa fa-download fa-3x"></i>
                      <div class="info"><h4>Download</h4></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          <?php
        } else {
          // echo "nothing";
        }
      ?>

    </main>

    <?php require ('constant/bottom_script.php'); ?>

  </body>
</html>
