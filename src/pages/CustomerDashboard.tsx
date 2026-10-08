import { Link, useNavigate } from "react-router-dom";

function CustomerDashboard() {
    const navigate = useNavigate();

const handleLogout = () => {
  // Temporary logout
  localStorage.removeItem("token");

  navigate("/login");
};
  return (
    <div className="customer-dashboard">

      {/* =========================
          SIDEBAR
      ========================= */}
      <aside className="customer-sidebar">

        {/* LOGO */}
        <Link to="/" className="dashboard-logo">

          <div className="dashboard-logo-icon">
            TC
          </div>

          <div>
            <strong>TechCare</strong>
            <span>Hardware Support</span>
          </div>

        </Link>


        {/* NAVIGATION */}
        <nav className="dashboard-nav">

          <p className="nav-title">
            MAIN MENU
          </p>

          <Link
            to="/customer/dashboard"
            className="dashboard-nav-link active"
          >
            <span>⌂</span>
            Dashboard
          </Link>

          <Link
            to="/customer/tickets"
            className="dashboard-nav-link"
          >
            <span>▣</span>
            My Tickets
          </Link>

          <Link
            to="/customer/report-problem"
            className="dashboard-nav-link"
          >
            <span>＋</span>
            Report Problem
          </Link>


          <p className="nav-title second-title">
            ACCOUNT
          </p>

          <Link
            to="/customer/profile"
            className="dashboard-nav-link"
          >
            <span>◯</span>
            My Profile
          </Link>

        </nav>


        {/* SIDEBAR BOTTOM */}
        <div className="sidebar-bottom">

          <div className="support-box">

            <div className="support-icon">
              ?
            </div>

            <div>
              <strong>Need help?</strong>
              <p>Our support team is here.</p>
            </div>

          </div>


          <button
  type="button"
  className="logout-link"
  onClick={handleLogout}
>
  <span>↪</span>
  Logout
</button>

        </div>

      </aside>


      {/* =========================
          MAIN CONTENT
      ========================= */}
      <main className="customer-main">

        {/* TOP BAR */}
        <header className="customer-topbar">

          <div>
            <p className="page-label">
              CUSTOMER PORTAL
            </p>

            <h2>
              Dashboard
            </h2>
          </div>


          <div className="customer-user">

            <div className="notification">
              ♢
            </div>

            <div className="user-avatar">
              C
            </div>

            <div className="user-info">
              <strong>Customer</strong>
              <span>Customer Account</span>
            </div>

          </div>

        </header>


        {/* =========================
            WELCOME SECTION
        ========================= */}
        <section className="dashboard-welcome">

          <div className="welcome-content">

            <p className="welcome-small">
              WELCOME BACK 👋
            </p>

            <h1>
              How can we help you today?
            </h1>

            <p>
              Report a hardware problem, check your support
              tickets, or communicate with our support team.
            </p>

            <Link
              to="/customer/report-problem"
              className="report-problem-btn"
            >
              <span>＋</span>
              Report a Problem
            </Link>

          </div>


          <div className="welcome-decoration">

            <div className="decoration-circle circle-one"></div>
            <div className="decoration-circle circle-two"></div>
            <div className="decoration-circle circle-three"></div>

            <div className="laptop-icon">
              💻
            </div>

          </div>

        </section>


        {/* =========================
            STATISTICS
        ========================= */}
        <section className="dashboard-stats">

          <div className="stat-card">

            <div className="stat-icon blue">
              ◫
            </div>

            <div>
              <span>Open Tickets</span>
              <strong>0</strong>
            </div>

            <small>
              Need attention
            </small>

          </div>


          <div className="stat-card">

            <div className="stat-icon orange">
              ◷
            </div>

            <div>
              <span>In Progress</span>
              <strong>0</strong>
            </div>

            <small>
              Being worked on
            </small>

          </div>


          <div className="stat-card">

            <div className="stat-icon green">
              ✓
            </div>

            <div>
              <span>Resolved</span>
              <strong>0</strong>
            </div>

            <small>
              Successfully resolved
            </small>

          </div>


          <div className="stat-card">

            <div className="stat-icon purple">
              #
            </div>

            <div>
              <span>Total Tickets</span>
              <strong>0</strong>
            </div>

            <small>
              All your tickets
            </small>

          </div>

        </section>


        {/* =========================
            LOWER CONTENT
        ========================= */}
        <section className="dashboard-grid">

          {/* RECENT TICKETS */}
          <div className="dashboard-card tickets-card">

            <div className="card-header">

              <div>
                <h3>Recent Tickets</h3>

                <p>
                  Track your latest support requests
                </p>
              </div>

              <Link to="/customer/tickets">
                View All
              </Link>

            </div>


            <div className="empty-tickets">

              <div className="empty-icon">
                ✓
              </div>

              <h4>No tickets yet</h4>

              <p>
                You haven't submitted any hardware
                support requests yet.
              </p>

              <Link
                to="/customer/report-problem"
                className="empty-action"
              >
                Report Your First Problem →
              </Link>

            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>
                <h3>Quick Actions</h3>

                <p>
                  Frequently used options
                </p>
              </div>

            </div>


            <div className="quick-actions">

              <Link
                to="/customer/report-problem"
                className="quick-action"
              >

                <div className="quick-icon blue">
                  +
                </div>

                <div>
                  <strong>Report a Problem</strong>

                  <span>
                    Submit a new hardware issue
                  </span>
                </div>

                <b>→</b>

              </Link>


              <Link
                to="/customer/tickets"
                className="quick-action"
              >

                <div className="quick-icon purple">
                  ▣
                </div>

                <div>
                  <strong>View My Tickets</strong>

                  <span>
                    Check your support requests
                  </span>
                </div>

                <b>→</b>

              </Link>


              <Link
                to="/customer/profile"
                className="quick-action"
              >

                <div className="quick-icon green">
                  ◯
                </div>

                <div>
                  <strong>My Profile</strong>

                  <span>
                    Manage your account
                  </span>
                </div>

                <b>→</b>

              </Link>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CustomerDashboard;