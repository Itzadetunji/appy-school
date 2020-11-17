<div class="app-sidebar__overlay" data-toggle="sidebar"></div>
<aside class="app-sidebar">
  <div class="app-sidebar__user">
    <img class="app-sidebar__user-avatar" src="../assets/image/default.jpg" width="50" height="50">
    <div>
      <p class="app-sidebar__user-name"><?php get_logged_in_student_name(); ?></p>
      <p class="app-sidebar__user-designation">Student</p>
      <p class="app-sidebar__user-designation"><?php get_logged_in_student_class(); ?></p>
    </div>
  </div>
  <ul class="app-menu">
    <li>
      <a class="app-menu__item" href="student_dashboard">
        <i class="app-menu__icon fa fa-dashboard"></i>
        <span class="app-menu__label">Dashboard</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="student_timetable">
        <i class="app-menu__icon fa fa-calendar"></i>
        <span class="app-menu__label">Time-table</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="student_notes">
        <i class="app-menu__icon fa fa-book"></i>
        <span class="app-menu__label">Notes</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="student_chat">
        <i class="app-menu__icon fa fa-comments"></i>
        <span class="app-menu__label">Chat</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="student_school_events">
        <i class="app-menu__icon fa fa-star"></i>
        <span class="app-menu__label">School events</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="student_notification">
        <i class="app-menu__icon fa fa-bell"></i>
        <span class="app-menu__label">Notification</span>
      </a>
    </li>

    <li>
      <a class="app-menu__item" href="api/logout">
        <i class="app-menu__icon fa fa-power-off"></i>
        <span class="app-menu__label">Logout</span>
      </a>
    </li>
  </ul>
</aside>