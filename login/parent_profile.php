<?php require ('api/config.php'); ?>
<?php check_login("3"); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "My Account"; ?>
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
          <h1><i class="fa fa-user"></i> My Account</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="">Profile</a></li>
        </ul>
      </div>
      <!-- //Page Title -->

      <!-- Profile -->
      <div class="row user">
        <div class="col-md-3">
          <div class="tile p-0">
            <ul class="nav flex-column nav-tabs user-tabs">
              <li class="nav-item"><a class="nav-link active" href="#my-account" data-toggle="tab">My Account</a></li>
              <li class="nav-item"><a class="nav-link" href="#change-pass" data-toggle="tab">Change Password</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-9">
          <div class="tab-content">
            <div class="tab-pane active" id="my-account">
              <div class="tile user-settings">
                <h4 class="line-head">My Account</h4>
                <div id="parent_update_profile_status"></div>
                <?php require ('form/parent_update_profile_form.php') ?>
              </div>
            </div>
            <div class="tab-pane fade" id="change-pass">
              <div class="tile user-settings">
                <h4 class="line-head">Change Password</h4>
                <div id="parent_update_password_status"></div>
                <?php require ('form/parent_update_password_form.php') ?>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //Profile -->

    </main>

    <?php require ('constant/bottom_script.php'); ?>

  </body>
</html>