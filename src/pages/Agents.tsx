import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Agents() {
  const agents = [
    {
      id: 1,
      name: "Hana Worku",
      email: "hana@techcare.com",
      phone: "+251 911 234 567",
      specialization: "Laptop & Desktop",
      tickets: 12,
      status: "Active",
    },
    {
      id: 2,
      name: "Dawit Tesfaye",
      email: "dawit@techcare.com",
      phone: "+251 922 345 678",
      specialization: "Printer Support",
      tickets: 8,
      status: "Active",
    },
    {
      id: 3,
      name: "Meron Alemu",
      email: "meron@techcare.com",
      phone: "+251 933 456 789",
      specialization: "Mobile Devices",
      tickets: 6,
      status: "Active",
    },
    {
      id: 4,
      name: "Ahmed Ali",
      email: "ahmed@techcare.com",
      phone: "+251 944 567 890",
      specialization: "Network & Router",
      tickets: 10,
      status: "Inactive",
    },
    {
      id: 5,
      name: "Sara Mohammed",
      email: "sara@techcare.com",
      phone: "+251 955 678 901",
      specialization: "Hardware Support",
      tickets: 4,
      status: "Active",
    },
  ];

  return (
    <div className="admin-layout">

      <Sidebar />

      <main className="admin-main">

        {/* Header */}

        <header className="admin-header">

          <div>
            <h1>Support Agents</h1>

            <p>
              Manage your TechCare support team.
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


        {/* Page Content */}

        <section className="page-content">

          {/* Toolbar */}

          <div className="page-toolbar">

            <div>
              <h2>All Support Agents</h2>

              <p>
                {agents.length} registered support agents
              </p>
            </div>

            <Link
              to="/admin/agents/create"
              className="primary-btn"
            >
              + Add Agent
            </Link>

          </div>


          {/* Search */}

          <div className="customer-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search by name, email or specialization..."
            />

          </div>


          {/* Agent Table */}

          <div className="customer-table-container">

            <table className="customer-table">

              <thead>

                <tr>
                  <th>Support Agent</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Specialization</th>
                  <th>Tickets</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {agents.map((agent) => (

                  <tr key={agent.id}>

                    {/* Agent */}

                    <td>

                      <div className="customer-name">

                        <div className="customer-avatar agent-avatar">
                          {agent.name.charAt(0)}
                        </div>

                        <div>

                          <strong>
                            {agent.name}
                          </strong>

                          <span>
                            Agent #{agent.id}
                          </span>

                        </div>

                      </div>

                    </td>


                    {/* Email */}

                    <td>
                      {agent.email}
                    </td>


                    {/* Phone */}

                    <td>
                      {agent.phone}
                    </td>


                    {/* Specialization */}

                    <td>

                      <span className="specialization-badge">
                        {agent.specialization}
                      </span>

                    </td>


                    {/* Tickets */}

                    <td>

                      <span className="ticket-count">
                        {agent.tickets}
                      </span>

                    </td>


                    {/* Status */}

                    <td>

                      <span
                        className={
                          agent.status === "Active"
                            ? "agent-status active"
                            : "agent-status inactive"
                        }
                      >
                        <span className="status-dot-small"></span>

                        {agent.status}

                      </span>

                    </td>


                    {/* Action */}

                    <td>

                      <Link
                        to={`/admin/agents/${agent.id}`}
                        className="table-action"
                      >
                        View
                      </Link>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Agents;