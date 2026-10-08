import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-icon">T</div>

        <div>
          <h2>TechCare</h2>
          <span>Admin Panel</span>
        </div>
      </div>


      <nav className="sidebar-nav">

        <p className="menu-title">MAIN MENU</p>

        <NavLink
          to="/admin/dashboard"
          className="sidebar-link"
        >
          <span>📊</span>
          Dashboard
        </NavLink>


        <NavLink
          to="/admin/customers"
          className="sidebar-link"
        >
          <span>👥</span>
          Customers
        </NavLink>


        <NavLink
          to="/admin/agents"
          className="sidebar-link"
        >
          <span>🧑‍💻</span>
          Support Agents
        </NavLink>


        <NavLink
          to="/admin/problem-reports"
          className="sidebar-link"
        >
          <span>📋</span>
          Problem Reports
        </NavLink>


        <NavLink
          to="/admin/tickets"
          className="sidebar-link"
        >
          <span>🎫</span>
          Tickets
        </NavLink>


        <p className="menu-title second-title">
          MANAGEMENT
        </p>


        <NavLink
          to="/admin/reports"
          className="sidebar-link"
        >
          <span>📈</span>
          Reports
        </NavLink>


        <NavLink
          to="/admin/settings"
          className="sidebar-link"
        >
          <span>⚙️</span>
          Settings
        </NavLink>

      </nav>


      <div className="sidebar-bottom">

        <div className="admin-user">

          <div className="admin-avatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>Admin</span>
          </div>

        </div>


        <NavLink
          to="/login"
          className="logout-link"
        >
          🚪 Logout
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;