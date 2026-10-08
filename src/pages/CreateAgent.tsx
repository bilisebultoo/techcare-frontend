import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function CreateAgent() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <main className="admin-main">

        {/* Header */}

        <header className="admin-header">

          <div>
            <h1>Add Support Agent</h1>

            <p>
              Create a new support agent account.
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


        {/* Form */}

        <section className="page-content">

          <div className="form-card">

            <div className="form-card-header">

              <h2>Support Agent Information</h2>

              <p>
                Enter the basic information for the new support agent.
              </p>

            </div>


            <form className="customer-form">

              {/* Row 1 */}

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter agent full name"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="agent@techcare.com"
                  />

                </div>

              </div>


              {/* Row 2 */}

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+251 9XX XXX XXX"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Specialization
                  </label>

                  <select defaultValue="Hardware Support">

                    <option value="Hardware Support">
                      Hardware Support
                    </option>

                    <option value="Laptop & Desktop">
                      Laptop & Desktop
                    </option>

                    <option value="Printer Support">
                      Printer Support
                    </option>

                    <option value="Mobile Devices">
                      Mobile Devices
                    </option>

                    <option value="Network & Router">
                      Network & Router
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>

              </div>


              {/* Status */}

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Account Status
                  </label>

                  <select defaultValue="ACTIVE">

                    <option value="ACTIVE">
                      Active
                    </option>

                    <option value="INACTIVE">
                      Inactive
                    </option>

                  </select>

                </div>

              </div>


              {/* Information */}

              <div className="customer-account-info agent-info">

                <div className="info-icon">
                  🔐
                </div>

                <div>

                  <strong>
                    Agent account security
                  </strong>

                  <p>
                    The support agent will create their own
                    private password. The administrator will
                    not see or store the password directly.
                  </p>

                </div>

              </div>


              {/* Buttons */}

              <div className="form-actions">

                <Link
                  to="/admin/agents"
                  className="cancel-btn"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  Create Agent
                </button>

              </div>

            </form>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CreateAgent;