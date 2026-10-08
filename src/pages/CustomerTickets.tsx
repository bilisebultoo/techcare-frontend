import { Link } from "react-router-dom";

function CustomerTickets() {
  return (
    <div className="tickets-page">

      {/* Header */}
      <header className="tickets-header">

        <Link
          to="/customer/dashboard"
          className="tickets-logo"
        >
          <div className="tickets-logo-icon">
            TC
          </div>

          <div>
            <strong>TechCare</strong>
            <span>Hardware Support</span>
          </div>
        </Link>

        <Link
          to="/customer/dashboard"
          className="tickets-back"
        >
          ← Back to Dashboard
        </Link>

      </header>

      {/* Main */}
      <main className="tickets-main">

        <div className="tickets-title">
          <p>TECHCARE SUPPORT</p>

          <h1>My Tickets</h1>

          <span>
            View and track your hardware support tickets.
          </span>
        </div>

        {/* Filters */}
        <div className="tickets-filters">

          <button className="ticket-filter active">
            All
          </button>

          <button className="ticket-filter">
            Open
          </button>

          <button className="ticket-filter">
            In Progress
          </button>

          <button className="ticket-filter">
            Resolved
          </button>

          <button className="ticket-filter">
            Closed
          </button>

        </div>

        {/* Tickets */}
        <div className="tickets-card">

          <div className="tickets-empty">

            <div className="tickets-empty-icon">
              ✓
            </div>

            <h2>No Tickets Yet</h2>

            <p>
              You don't have any support tickets yet.
              If you are experiencing a hardware problem,
              report it and our support team will help you.
            </p>

            <Link
              to="/customer/report-problem"
              className="tickets-report-btn"
            >
              Report a Problem →
            </Link>

          </div>

        </div>

      </main>

    </div>
  );
}

export default CustomerTickets;