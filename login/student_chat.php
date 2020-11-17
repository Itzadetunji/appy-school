<?php require ('api/config.php'); ?>
<?php check_login("2"); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "Chat"; ?>
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
          <h1><i class="fa fa-comments"></i> Chat</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="">Chat</a></li>
        </ul>
      </div>
      <!-- //Page Title -->

      <div class="tile mb-4">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-header">
              <div class="row">
                <div class="form-group col-md-12">
                  <!-- <input class="form-control" type="text" id="custom_search" placeholder="Search chat ..."> -->
                  <input class="form-control" type="text" id="custom_search" onkeyup="filter_list()" placeholder="Search chat ...">
                </div>
              </div>
              <h2 class="mb-3 line-head" id="dialogs"></h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">

              <h4 class="card-header text-center" id="no_result" style="display: none;">no result found</h4>

              <ul id="mini_search">
                <?php student_chat_to_parent(); ?>

                <?php student_chat_to_teacher(); ?>
              </ul>

              <div class="modal fade" id="chat_modal" role="dialog">
                <div class="modal-dialog" role="dialog">
                  <div class="modal-content"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </main>

    <?php require ('constant/bottom_script.php'); ?>

  </body>
</html>