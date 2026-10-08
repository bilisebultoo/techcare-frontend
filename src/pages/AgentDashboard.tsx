import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type TicketStatus = "OPEN" | "IN_PROGRESS" | "RESOLVED";

type Ticket = {
  id: string;
  customer: string;
  device: string;
  problem: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: TicketStatus;
  time: string;
};

function AgentDashboard() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState<
    "ALL" | TicketStatus
  >("ALL");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  // Temporary ticket data
  // Later this will come from the backend.
  const tickets: Ticket[] = [
    {
      id: "TC-001",
      customer: "Abebe Kebede",
      device: "Dell Laptop",
      problem: "Laptop is not charging",
      priority: "HIGH",
      status: "OPEN",
      time: "10 minutes ago",
    },
    {
      id: "TC-002",
      customer: "Hana Tesfaye",
      device: "HP Printer",
      problem: "Printer is not printing",
      priority: "MEDIUM",
      status: "IN_PROGRESS",
      time: "1 hour ago",
    },
    {
      id: "TC-003",
      customer: "Dawit Alemu",
      device: "Lenovo Laptop",
      problem: "Laptop is overheating",
      priority: "LOW",
      status: "IN_PROGRESS",
      time: "3 hours ago",
    },
    {
      id: "TC-004",
      customer: "Mekdes Girma",
      device: "Samsung Phone",
      problem: "Phone is not charging",
      priority: "HIGH",
      status: "RESOLVED",
      time: "Yesterday",
    },
    {
      id: "TC-005",
      customer: "Samuel Bekele",
      device: "HP Desktop",
      problem: "Computer does not start",
      priority: "HIGH",
      status: "OPEN",
      time: "Yesterday",
    },
    {
      id: "TC-006",
      customer: "Rahel Tadesse",
      device: "Canon Printer",
      problem: "Paper keeps getting stuck",
      priority: "MEDIUM",
      status: "RESOLVED",
      time: "2 days ago",
    },
  ];

  // Filter tickets
  const filteredTickets =
    activeFilter === "ALL"
      ? tickets
      : tickets.filter(
          (ticket) => ticket.status === activeFilter
        );

  // Count tickets
  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "OPEN"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "IN_PROGRESS"
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status === "RESOLVED"
  ).length;

  return (
    <div className="agent-dashboard">

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className="agent-sidebar">

        <div className="agent-sidebar-top">

          <Link
            to="/agent/dashboard"
            className="agent-logo"
          >
            <div className="agent-logo-icon">
              TC
            </div>

            <div>
              <strong>TechCare</strong>
              <span>Agent Portal</span>
            </div>
          </Link>

          <nav className="agent-nav">

            <Link
              to="/agent/dashboard"
              className="agent-nav-link active"
            >
              <span className="agent-nav-icon">
                ▦
              </span>

              Dashboard
            </Link>

            <Link
              to="/agent/tickets"
              className="agent-nav-link"
            >
              <span className="agent-nav-icon">
                ▣
              </span>

              My Tickets
            </Link>

            <Link
              to="/agent/profile"
              className="agent-nav-link"
            >
              <span className="agent-nav-icon">
                ◯
              </span>

              My Profile
            </Link>

          </nav>

        </div>

        <div className="agent-sidebar-bottom">

          <div className="agent-help-box">
            <strong>Need Help?</strong>

            <p>
              Contact the administrator if you
              need assistance.
            </p>

            <a href="mailto:support@techcare.com">
              Contact Admin →
            </a>
          </div>

          <button
            type="button"
            className="agent-logout"
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

      <main className="agent-main">

        {/* Top Header */}

        <header className="agent-topbar">

          <div>
            <p className="agent-page-label">
              TECHCARE AGENT PORTAL
            </p>

            <h1>Dashboard</h1>
          </div>

          <div className="agent-user">

            <div className="agent-user-avatar">
              A
            </div>

            <div>
              <strong>Support Agent</strong>
              <span>Support Agent</span>
            </div>

          </div>

        </header>


        {/* Welcome Banner */}

        <section className="agent-welcome">

          <div>

            <span>WELCOME BACK</span>

            <h2>
              Ready to help customers?
            </h2>

            <p>
              Review your assigned tickets and help
              customers solve their hardware problems.
            </p>

          </div>

          <div className="agent-welcome-icon">
            ✓
          </div>

        </section>


        {/* =========================
            STATISTICS
        ========================= */}

        <section className="agent-stats">

          <div
            className={`agent-stat-card ${
              activeFilter === "ALL"
                ? "selected"
                : ""
            }`}
            onClick={() => setActiveFilter("ALL")}
          >

            <div className="agent-stat-icon blue">
              ▣
            </div>

            <div>
              <span>Total Assigned</span>
              <strong>{totalTickets}</strong>
            </div>

          </div>


          <div
            className={`agent-stat-card ${
              activeFilter === "OPEN"
                ? "selected"
                : ""
            }`}
            onClick={() => setActiveFilter("OPEN")}
          >

            <div className="agent-stat-icon orange">
              !
            </div>

            <div>
              <span>Open Tickets</span>
              <strong>{openTickets}</strong>
            </div>

          </div>


          <div
            className={`agent-stat-card ${
              activeFilter === "IN_PROGRESS"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setActiveFilter("IN_PROGRESS")
            }
          >

            <div className="agent-stat-icon purple">
              ◷
            </div>

            <div>
              <span>In Progress</span>
              <strong>{inProgressTickets}</strong>
            </div>

          </div>


          <div
            className={`agent-stat-card ${
              activeFilter === "RESOLVED"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setActiveFilter("RESOLVED")
            }
          >

            <div className="agent-stat-icon green">
              ✓
            </div>

            <div>
              <span>Resolved</span>
              <strong>{resolvedTickets}</strong>
            </div>

          </div>

        </section>


        {/* =========================
            TICKETS
        ========================= */}

        <section className="agent-tickets-section">

          <div className="agent-section-header">

            <div>
              <h2>My Assigned Tickets</h2>

              <p>
                Tickets currently assigned to you.
              </p>
            </div>

            <Link
              to="/agent/tickets"
              className="agent-view-all"
            >
              View All →
            </Link>

          </div>


          {/* FILTER BUTTONS */}

          <div className="agent-ticket-filters">

            <button
              type="button"
              className={`agent-filter-btn ${
                activeFilter === "ALL"
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveFilter("ALL")}
            >
              All
              <span>{totalTickets}</span>
            </button>


            <button
              type="button"
              className={`agent-filter-btn ${
                activeFilter === "OPEN"
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveFilter("OPEN")}
            >
              Open
              <span>{openTickets}</span>
            </button>


            <button
              type="button"
              className={`agent-filter-btn ${
                activeFilter === "IN_PROGRESS"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveFilter("IN_PROGRESS")
              }
            >
              In Progress
              <span>{inProgressTickets}</span>
            </button>


            <button
              type="button"
              className={`agent-filter-btn ${
                activeFilter === "RESOLVED"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveFilter("RESOLVED")
              }
            >
              Resolved
              <span>{resolvedTickets}</span>
            </button>

          </div>


          {/* TICKET TABLE */}

          <div className="agent-ticket-card">

            {filteredTickets.length === 0 ? (

              <div className="agent-no-tickets">

                <div className="agent-no-tickets-icon">
                  ✓
                </div>

                <h3>No tickets found</h3>

                <p>
                  There are no tickets with this
                  status.
                </p>

              </div>

            ) : (

              <div className="agent-ticket-table-wrapper">

                <table className="agent-ticket-table">

                  <thead>

                    <tr>
                      <th>Ticket</th>
                      <th>Customer</th>
                      <th>Device</th>
                      <th>Problem</th>
                      <th>Priority</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>

                  </thead>

                  <tbody>

                    {filteredTickets.map(
                      (ticket) => (

                        <tr key={ticket.id}>

                          <td>

                            <strong className="agent-ticket-id">
                              #{ticket.id}
                            </strong>

                            <span className="agent-ticket-time">
                              {ticket.time}
                            </span>

                          </td>


                          <td>

                            <div className="agent-customer">

                              <div className="agent-customer-avatar">
                                {ticket.customer.charAt(0)}
                              </div>

                              <span>
                                {ticket.customer}
                              </span>

                            </div>

                          </td>


                          <td>

                            <span className="agent-device">
                              {ticket.device}
                            </span>

                          </td>


                          <td>

                            <span className="agent-problem">
                              {ticket.problem}
                            </span>

                          </td>


                          <td>

                            <span
                              className={`agent-priority ${ticket.priority.toLowerCase()}`}
                            >
                              {ticket.priority}
                            </span>

                          </td>


                          <td>

                            <span
                              className={`agent-status ${ticket.status
                                .toLowerCase()
                                .replace("_", "-")}`}
                            >
                              {ticket.status ===
                              "IN_PROGRESS"
                                ? "In Progress"
                                : ticket.status ===
                                  "OPEN"
                                ? "Open"
                                : "Resolved"}
                            </span>

                          </td>


                          <td>

                            <Link
                              to={`/agent/tickets/${ticket.id}`}
                              className="agent-ticket-action"
                            >
                              View
                            </Link>

                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            )}

          </div>

        </section>


        {/* =========================
            INFORMATION
        ========================= */}

        <section className="agent-bottom-grid">

          <div className="agent-info-card">

            <div className="agent-info-icon">
              ✓
            </div>

            <div>

              <h3>Remember</h3>

              <p>
                A ticket should only be closed after
                the customer confirms that their
                problem has been solved.
              </p>

            </div>

          </div>


          <div className="agent-info-card">

            <div className="agent-info-icon blue-icon">
              💬
            </div>

            <div>

              <h3>Customer Communication</h3>

              <p>
                Keep customers updated and ask if
                they have any other questions before
                resolving their ticket.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AgentDashboard;