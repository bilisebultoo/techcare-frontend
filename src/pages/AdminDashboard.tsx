import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  return (
    <div className="admin-layout">

      <Sidebar />


      <main className="admin-main">

        {/* Top Header */}

        <header className="admin-header">

          <div>
            <h1>Dashboard</h1>
            <p>
              Welcome back, Administrator.
              Here's what's happening with TechCare.
            </p>
          </div>


          <div className="admin-header-right">

            <button className="notification-btn">
              🔔
            </button>

            <div className="header-user">
              <div className="admin-avatar">
                A
              </div>

              <div>
                <strong>Administrator</strong>
                <span>Admin</span>
              </div>
            </div>

          </div>

        </header>


        {/* Statistics */}

        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon blue">
              👥
            </div>

            <div>
              <span>Total Customers</span>
              <h2>120</h2>
              <small>Registered customers</small>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon purple">
              🧑‍💻
            </div>

            <div>
              <span>Support Agents</span>
              <h2>8</h2>
              <small>Active agents</small>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon orange">
              🎫
            </div>

            <div>
              <span>Open Tickets</span>
              <h2>24</h2>
              <small>Waiting for support</small>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon green">
              ✓
            </div>

            <div>
              <span>Resolved Tickets</span>
              <h2>96</h2>
              <small>Successfully resolved</small>
            </div>

          </div>

        </section>


        {/* Content Grid */}

        <section className="dashboard-content">


          {/* Recent Tickets */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>
                <h2>Recent Tickets</h2>
                <p>Latest customer support tickets</p>
              </div>

              <button className="view-all-btn">
                View All
              </button>

            </div>


            <div className="ticket-list">

              <div className="ticket-row">

                <div className="ticket-number">
                  #105
                </div>

                <div className="ticket-info">
                  <strong>
                    Laptop is not charging
                  </strong>

                  <span>
                    Abebe Kebede • Dell Latitude 5490
                  </span>
                </div>

                <span className="priority high">
                  HIGH
                </span>

                <span className="status open-status">
                  OPEN
                </span>

              </div>


              <div className="ticket-row">

                <div className="ticket-number">
                  #104
                </div>

                <div className="ticket-info">
                  <strong>
                    Printer not printing
                  </strong>

                  <span>
                    Hana Worku • HP LaserJet
                  </span>
                </div>

                <span className="priority medium">
                  MEDIUM
                </span>

                <span className="status progress-status">
                  IN PROGRESS
                </span>

              </div>


              <div className="ticket-row">

                <div className="ticket-number">
                  #103
                </div>

                <div className="ticket-info">
                  <strong>
                    Computer overheating
                  </strong>

                  <span>
                    Dawit Tesfaye • Dell Desktop
                  </span>
                </div>

                <span className="priority medium">
                  MEDIUM
                </span>

                <span className="status resolved-status">
                  RESOLVED
                </span>

              </div>


              <div className="ticket-row">

                <div className="ticket-number">
                  #102
                </div>

                <div className="ticket-info">
                  <strong>
                    Phone won't charge
                  </strong>

                  <span>
                    Meron Alemu • Samsung Galaxy
                  </span>
                </div>

                <span className="priority low">
                  LOW
                </span>

                <span className="status closed-status">
                  CLOSED
                </span>

              </div>

            </div>

          </div>


          {/* Problem Reports */}

          <div className="dashboard-panel reports-panel">

            <div className="panel-header">

              <div>
                <h2>Problem Reports</h2>
                <p>Waiting for review</p>
              </div>

              <span className="report-count">
                5
              </span>

            </div>


            <div className="problem-report">

              <div className="report-icon">
                💻
              </div>

              <div>
                <strong>
                  Laptop won't turn on
                </strong>

                <span>
                  Abebe Kebede
                </span>
              </div>

            </div>


            <div className="problem-report">

              <div className="report-icon">
                🖨️
              </div>

              <div>
                <strong>
                  Printer paper jam
                </strong>

                <span>
                  Sara Mohammed
                </span>
              </div>

            </div>


            <div className="problem-report">

              <div className="report-icon">
                📱
              </div>

              <div>
                <strong>
                  Phone overheating
                </strong>

                <span>
                  Ahmed Ali
                </span>
              </div>

            </div>


            <button className="view-reports-btn">
              View All Reports →
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;