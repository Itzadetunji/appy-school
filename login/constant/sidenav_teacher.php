<div class="app-sidebar__overlay" data-toggle="sidebar"></div>
<aside class="app-sidebar">
  <div class="app-sidebar__user">
    <img class="app-sidebar__user-avatar" src="../assets/image/default.jpg" width="50" height="50">
    <div>
      <p class="app-sidebar__user-name"><?php get_logged_in_teacher_name(); ?></p>
      <p class="app-sidebar__user-designation">Teacher</p>
      <p class="app-sidebar__user-designation"><?php get_logged_in_teacher_subject(); ?></p>
    </div>
  </div>
  <ul class="app-menu">
    <li>
      <a class="app-menu__item" href="teacher_dashboard">
        <i class="app-menu__icon fa fa-dashboard"></i>
        <span class="app-menu__label">Dashboard</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="teacher_timetable">
        <i class="app-menu__icon fa fa-calendar"></i>
        <span class="app-menu__label">Time-table</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="teacher_upload_note">
        <i class="app-menu__icon fa fa-upload"></i>
        <span class="app-menu__label">Upload notes</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="teacher_chat">
        <i class="app-menu__icon fa fa-comments"></i>
        <span class="app-menu__label">Chat</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="teacher_report">
        <i class="app-menu__icon fa fa-star"></i>
        <span class="app-menu__label">Report</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="teacher_notify">
        <i class="app-menu__icon fa fa-bell"></i>
        <span class="app-menu__label">Notify</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="teacher_school_events">
        <i class="app-menu__icon fa fa-eye"></i>
        <span class="app-menu__label">School events</span>
      </a>
    </li>
    <!-- <li class="treeview">
      <a class="app-menu__item" href="#" data-toggle="treeview">
        <i class="app-menu__icon fa fa-file-text"></i>
        <span class="app-menu__label">Pages</span>
        <i class="treeview-indicator fa fa-angle-right"></i>
      </a>
      <ul class="treeview-menu">
        <li><a class="treeview-item" href="#"><i class="icon fa fa-circle-o"></i> Page 1</a></li>
        <li><a class="treeview-item" href="#"><i class="icon fa fa-circle-o"></i> Page 2</a></li>
        <li><a class="treeview-item" href="#"><i class="icon fa fa-circle-o"></i> Page 3</a></li>
        <li><a class="treeview-item" href="#"><i class="icon fa fa-circle-o"></i> Page 4</a></li>
        <li><a class="treeview-item" href="#"><i class="icon fa fa-circle-o"></i> Page 5</a></li>
      </ul>
    </li> -->
    <li>
      <a class="app-menu__item" href="api/logout">
        <i class="app-menu__icon fa fa-power-off"></i>
        <span class="app-menu__label">Logout</span>
      </a>
    </li>
  </ul>
</aside>