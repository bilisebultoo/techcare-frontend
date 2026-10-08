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
  created: string;
};

function AgentTickets() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState<
    "ALL" | TicketStatus
  >("ALL");

  const [search, setSearch] = useState("");

  const tickets: Ticket[] = [
    {
      id: "TC-001",
      customer: "Abebe Kebede",
      device: "Dell Laptop",
      problem: "Laptop is not charging",
      priority: "HIGH",
      status: "OPEN",
      created: "Today, 10:20 AM",
    },
    {
      id: "TC-002",
      customer: "Hana Tesfaye",
      device: "HP Printer",
      problem: "Printer is not printing",
      priority: "MEDIUM",
      status: "IN_PROGRESS",
      created: "Today, 9:15 AM",
    },
    {
      id: "TC-003",
      customer: "Dawit Alemu",
      device: "Lenovo Laptop",
      problem: "Laptop is overheating",
      priority: "LOW",
      status: "IN_PROGRESS",
      created: "Today, 7:40 AM",
    },
    {
      id: "TC-004",
      customer: "Mekdes Girma",
      device: "Samsung Phone",
      problem: "Phone is not charging",
      priority: "HIGH",
      status: "RESOLVED",
      created: "Yesterday, 4:30 PM",
    },
    {
      id: "TC-005",
      customer: "Samuel Bekele",
      device: "HP Desktop",
      problem: "Computer does not start",
      priority: "HIGH",
      status: "OPEN",
      created: "Yesterday, 2:10 PM",
    },
    {
      id: "TC-006",
      customer: "Rahel Tadesse",
      device: "Canon Printer",
      problem: "Paper keeps getting stuck",
      priority: "MEDIUM",
      status: "RESOLVED",
      created: "2 days ago",
    },
  ];

  const filteredTickets = tickets.filter((ticket) => {
    const matchesStatus =
      activeFilter === "ALL" ||
      ticket.status === activeFilter;

    const searchText = search.toLowerCase();

    const matchesSearch =
      ticket.id.toLowerCase().includes(searchText) ||
      ticket.customer.toLowerCase().includes(searchText) ||
      ticket.device.toLowerCase().includes(searchText) ||
      ticket.problem.toLowerCase().includes(searchText);

    return matchesStatus && matchesSearch;
  });

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="agent-tickets-page">

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
              className="agent-nav-link"
            >
              <span className="agent-nav-icon">
                ▦
              </span>
              Dashboard
            </Link>

            <Link
              to="/agent/tickets"
              className="agent-nav-link active"
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

      <main className="agent-tickets-main">

        {/* Header */}

        <header className="agent-tickets-topbar">

          <div>
            <p className="agent-page-label">
              TECHCARE AGENT PORTAL
            </p>

            <h1>My Tickets</h1>
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


        {/* Page Introduction */}

        <section className="agent-tickets-intro">

          <div>
            <h2>Assigned Support Tickets</h2>

            <p>
              View and manage the hardware support tickets
              assigned to you.
            </p>
          </div>

        </section>


        {/* Statistics */}

        <section className="agent-ticket-summary">

          <button
            type="button"
            className={`agent-summary-card ${
              activeFilter === "ALL"
                ? "active"
                : ""
            }`}
            onClick={() => setActiveFilter("ALL")}
          >
            <span>Total Tickets</span>
            <strong>{totalTickets}</strong>
          </button>

          <button
            type="button"
            className={`agent-summary-card ${
              activeFilter === "OPEN"
                ? "active"
                : ""
            }`}
            onClick={() => setActiveFilter("OPEN")}
          >
            <span>Open</span>
            <strong>{openTickets}</strong>
          </button>

          <button
            type="button"
            className={`agent-summary-card ${
              activeFilter === "IN_PROGRESS"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveFilter("IN_PROGRESS")
            }
          >
            <span>In Progress</span>
            <strong>{inProgressTickets}</strong>
          </button>

          <button
            type="button"
            className={`agent-summary-card ${
              activeFilter === "RESOLVED"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveFilter("RESOLVED")
            }
          >
            <span>Resolved</span>
            <strong>{resolvedTickets}</strong>
          </button>

        </section>


        {/* Filters and Search */}

        <section className="agent-ticket-controls">

          <div className="agent-ticket-filter-buttons">

            <button
              type="button"
              className={
                activeFilter === "ALL"
                  ? "active"
                  : ""
              }
              onClick={() => setActiveFilter("ALL")}
            >
              All
            </button>

            <button
              type="button"
              className={
                activeFilter === "OPEN"
                  ? "active"
                  : ""
              }
              onClick={() => setActiveFilter("OPEN")}
            >
              Open
            </button>

            <button
              type="button"
              className={
                activeFilter === "IN_PROGRESS"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveFilter("IN_PROGRESS")
              }
            >
              In Progress
            </button>

            <button
              type="button"
              className={
                activeFilter === "RESOLVED"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveFilter("RESOLVED")
              }
            >
              Resolved
            </button>

          </div>


          <div className="agent-ticket-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search tickets..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </section>


        {/* Ticket Table */}

        <section className="agent-full-ticket-card">

          {filteredTickets.length === 0 ? (

            <div className="agent-no-tickets">

              <div className="agent-no-tickets-icon">
                ✓
              </div>

              <h3>No tickets found</h3>

              <p>
                Try changing the filter or search
                for another ticket.
              </p>

            </div>

          ) : (

            <div className="agent-full-table-wrapper">

              <table className="agent-full-ticket-table">

                <thead>

                  <tr>
                    <th>Ticket</th>
                    <th>Customer</th>
                    <th>Device</th>
                    <th>Problem</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>

                </thead>

                <tbody>

                  {filteredTickets.map((ticket) => (

                    <tr key={ticket.id}>

                      <td>
                        <strong className="agent-full-ticket-id">
                          #{ticket.id}
                        </strong>
                      </td>

                      <td>

                        <div className="agent-full-customer">

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
                          {ticket.status === "IN_PROGRESS"
                            ? "In Progress"
                            : ticket.status === "OPEN"
                            ? "Open"
                            : "Resolved"}
                        </span>

                      </td>

                      <td>

                        <span className="agent-ticket-created">
                          {ticket.created}
                        </span>

                      </td>

                      <td>

                        <Link
                          to={`/agent/tickets/${ticket.id}`}
                          className="agent-full-view-btn"
                        >
                          View Ticket
                        </Link>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default AgentTickets;