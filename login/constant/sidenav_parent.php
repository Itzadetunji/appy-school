<div class="app-sidebar__overlay" data-toggle="sidebar"></div>
<aside class="app-sidebar">
  <div class="app-sidebar__user">
    <img class="app-sidebar__user-avatar" src="../assets/image/default.jpg" width="50" height="50">
    <div>
      <p class="app-sidebar__user-name"><?php get_logged_in_parent_name(); ?></p>
      <p class="app-sidebar__user-designation">Parent</p>
      <p class="app-sidebar__user-designation"><?php get_number_of_children(); ?></p>
    </div>
  </div>
  <ul class="app-menu">
    <li>
      <a class="app-menu__item" href="parent_dashboard">
        <i class="app-menu__icon fa fa-dashboard"></i>
        <span class="app-menu__label">Dashboard</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="parent_claim_child">
        <i class="app-menu__icon fa fa-plus"></i>
        <span class="app-menu__label">Claim child</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="parent_all_teacher">
        <i class="app-menu__icon fa fa-users"></i>
        <span class="app-menu__label">All teachers</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="parent_chat">
        <i class="app-menu__icon fa fa-comments"></i>
        <span class="app-menu__label">Chat</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="parent_view_report">
        <i class="app-menu__icon fa fa-eye"></i>
        <span class="app-menu__label">View reports</span>
      </a>
    </li>
    <li>
      <a class="app-menu__item" href="parent_school_events">
        <i class="app-menu__icon fa fa-calendar"></i>
        <span class="app-menu__label">School events</span>
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