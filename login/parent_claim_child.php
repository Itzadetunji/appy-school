<?php require ('api/config.php'); ?>
<?php check_login("3"); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "Claim Child"; ?>
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
          <h1><i class="fa fa-plus"></i> Claim Child</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="">Claim Child</a></li>
        </ul>
      </div>
      <!-- //Page Title -->

      <!-- FORM -->
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 col-md-12">
          <div class="tile">
            <h3 class="tile-title">Claim Child Form</h3>
            <div id="claim_child_status"></div>
            <?php require ('form/parent_claim_child_form.php') ?>
          </div>
        </div>
        <div class="col-lg-2"></div>
      </div>
      <!-- //FORM -->

    </main>

    <?php require ('constant/bottom_script.php'); ?>

  </body>
</html>