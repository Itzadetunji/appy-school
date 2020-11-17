<?php require ('api/config.php'); ?>
<?php check_login("2"); ?>
<!DOCTYPE html>
<html lang="en">

  <!-- Head -->
  <?php $head_title = "Notes"; ?>
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
          <h1><i class="fa fa-book"></i> Notes</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="">Notes</a></li>
        </ul>
      </div>
      <!-- //Page Title -->


      <?php
        if (isset($_GET['page'])) { $get_page = $_GET['page']; } else { $get_page = ""; }
        if (isset($_GET['class'])) { $get_class = $_GET['class']; } else { $get_class = ""; }
        if (isset($_GET['subject'])) { $get_subject = $_GET['subject']; } else { $get_subject = ""; }
        if (isset($_GET['note'])) { $get_note = $_GET['note']; } else { $get_note = ""; }

        switch ($get_page) {

          case 'choose_subject':
            
            get_subjects_for_class($get_class);
            break;

          case 'choose_note':

            get_notes_on_subject($get_class, $get_subject);
            break;

          case 'note_content':

            get_note_content($get_class, $get_subject, $get_note);
            break;
          
          default:
            ?>
              <!-- TILES -->
              <div class="row">
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?page=choose_subject&class=1">
                      <div class="widget-small primary"><i class="icon fa fa-cubes fa-3x"></i>
                        <div class="info"><h4>JSS 1</h4></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?page=choose_subject&class=2">
                      <div class="widget-small info"><i class="icon fa fa-cubes fa-3x"></i>
                        <div class="info"><h4>JSS 2</h4></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?page=choose_subject&class=3">
                      <div class="widget-small warning"><i class="icon fa fa-cubes fa-3x"></i>
                        <div class="info"><h4>JSS 3</h4></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?page=choose_subject&class=4">
                      <div class="widget-small primary"><i class="icon fa fa-cubes fa-3x"></i>
                        <div class="info"><h4>SSS 1</h4></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?page=choose_subject&class=5">
                      <div class="widget-small info"><i class="icon fa fa-cubes fa-3x"></i>
                        <div class="info"><h4>SSS 2</h4></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="click_effect">
                    <a href="?page=choose_subject&class=6">
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
      ?>
    </main>

    <?php require ('constant/bottom_script.php'); ?>

  </body>
</html>
