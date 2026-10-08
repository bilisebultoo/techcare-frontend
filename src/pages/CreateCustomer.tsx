import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function CreateCustomer() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <main className="admin-main">

        {/* Header */}

        <header className="admin-header">

          <div>
            <h1>Add Customer</h1>

            <p>
              Create a new customer account.
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

              <div>
                <h2>Customer Information</h2>

                <p>
                  Enter the customer's basic information.
                </p>
              </div>

            </div>


            <form className="customer-form">

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter full name"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter email address"
                  />

                </div>

              </div>


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


              <div className="customer-account-info">

                <div className="info-icon">
                  🔐
                </div>

                <div>

                  <strong>
                    Customer password
                  </strong>

                  <p>
                    The customer will create their own private
                    password. The administrator will never see
                    the customer's password.
                  </p>

                </div>

              </div>


              <div className="form-actions">

                <Link
                  to="/admin/customers"
                  className="cancel-btn"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  Create Customer
                </button>

              </div>

            </form>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CreateCustomer;