<?php require ('api/config.php'); ?>
<?php check_login("2"); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "Notification"; ?>
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
          <h1><i class="fa fa-bell"></i> Notification</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="">Notification</a></li>
        </ul>
      </div>
      <!-- //Page Title -->


      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="tile-body table-responsive">
              <table class="table table-hover table-bordered respond-table table-striped" id="dtable">
                <thead>
                  <tr>
                    <th>Notification Content</th>
                    <th>Notification By</th>
                    <th>Notification For</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <?php

                    $student_login_id = $_COOKIE['login_id'];

                    $get_student_id_sql = "SELECT student_class_id FROM tbl_student WHERE student_system_code = '$student_login_id'";
                    $get_student_id_result = mysqli_query($conn, $get_student_id_sql);
                    $get_student_id_row = mysqli_fetch_assoc($get_student_id_result);

                    $student_class_id = $get_student_id_row['student_class_id'];

                    $get_notification_sql = "SELECT * FROM tbl_notification WHERE notification_class_id = '$student_class_id' || notification_class_id = '0' ORDER BY notification_id DESC";
                    $get_notification_result = mysqli_query($conn, $get_notification_sql);

                    while($get_notification_row = mysqli_fetch_assoc($get_notification_result)) {

                      $notification_content = $get_notification_row['notification_content'];
                      $notification_by_id = $get_notification_row['notification_by_id'];
                      $notification_date = substr($get_notification_row['date_added'], 0, 10);

                      $notification_class_id = $get_notification_row['notification_class_id'];
                      if ($notification_class_id != "0") {

                        $get_class_name_sql = "SELECT class_name FROM tbl_class WHERE class_id = '$notification_class_id'";
                        $get_class_name_result = mysqli_query($conn, $get_class_name_sql);
                        $get_class_name_row = mysqli_fetch_assoc($get_class_name_result);

                        $class_name = $get_class_name_row['class_name'];

                        $notification_for = "".$class_name."";
                      } else {

                        $notification_for = "All students";
                      }

                      $get_teacher_name_sql = "SELECT * FROM tbl_teacher WHERE teacher_system_code = '$notification_by_id'";
                      $get_teacher_name_result = mysqli_query($conn, $get_teacher_name_sql);
                      $get_teacher_name_row = mysqli_fetch_assoc($get_teacher_name_result);

                      $teacher_title = $get_teacher_name_row['teacher_title'];
                      $teacher_fname = $get_teacher_name_row['teacher_fname'];
                      $teacher_lname = $get_teacher_name_row['teacher_lname'];
                      $teacher_fullname = ''.$teacher_title.' '.$teacher_fname.' '.$teacher_lname.'';

                      ?>
                      <tr>
                        <td style="white-space: pre-line;"><?php echo $notification_content; ?></td>
                        <td><?php echo $teacher_fullname; ?></td>
                        <td><?php echo $notification_for; ?></td>
                        <td><?php echo $notification_date; ?></td>
                      </tr>
                      <?php
                    }
                  ?>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </main>

    <?php require ('constant/bottom_script.php'); ?>

  </body>
</html>
