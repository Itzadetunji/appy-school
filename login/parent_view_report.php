<?php require ('api/config.php'); ?>
<?php check_login("3"); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "View Child Reports"; ?>
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
          <h1><i class="fa fa-eye"></i> View Report</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="">View Report</a></li>
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
                    <th>Child</th>
                    <th>Report</th>
                    <th>By</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <?php
                    $parent_login_id = $_COOKIE['login_id'];

                    $get_students_sql = "SELECT * FROM tbl_student WHERE student_dad = '$parent_login_id' || student_mum = '$parent_login_id' || student_guardian = '$parent_login_id'";
                    $get_students_result = mysqli_query($conn, $get_students_sql);

                    while($get_students_row = mysqli_fetch_assoc($get_students_result)){

                      $my_child_id = $get_students_row['student_system_code'];

                      $get_reports_sql = "SELECT * FROM tbl_report WHERE report_student_id = '$my_child_id' ORDER BY report_id DESC";
                      $get_reports_result = mysqli_query($conn, $get_reports_sql);

                      while($get_reports_row = mysqli_fetch_assoc($get_reports_result)) {

                          $report_content = $get_reports_row['report_content'];
                          $report_student_id = $get_reports_row['report_student_id'];
                          $report_by_id = $get_reports_row['report_by_id'];
                          $report_date = substr($get_reports_row['date_added'], 0, 10);

                          $get_student_name_sql = "SELECT * FROM tbl_student WHERE student_system_code = '$report_student_id'";
                          $get_student_name_result = mysqli_query($conn, $get_student_name_sql);
                          $get_student_name_row = mysqli_fetch_assoc($get_student_name_result);

                          $student_fname = $get_student_name_row['student_fname'];
                          $student_lname = $get_student_name_row['student_lname'];
                          $student_fullname = ''.$student_fname.' '.$student_lname.'';

                          $get_teacher_name_sql = "SELECT * FROM tbl_teacher WHERE teacher_system_code = '$report_by_id'";
                          $get_teacher_name_result = mysqli_query($conn, $get_teacher_name_sql);
                          $get_teacher_name_row = mysqli_fetch_assoc($get_teacher_name_result);

                          $teacher_title = $get_teacher_name_row['teacher_title'];
                          $teacher_fname = $get_teacher_name_row['teacher_fname'];
                          $teacher_lname = $get_teacher_name_row['teacher_lname'];
                          $teacher_fullname = ''.$teacher_title.' '.$teacher_fname.' '.$teacher_lname.'';

                          ?>
                            <tr>
                              <td><?php echo $student_fullname; ?></td>
                              <td style="white-space: pre-line;"><?php echo $report_content; ?></td>
                              <td><?php echo $teacher_fullname; ?></td>
                              <td><?php echo $report_date; ?></td>
                            </tr>
                          <?php
                      }
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