import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Customers() {
  const customers = [
    {
      id: 1,
      name: "Abebe Kebede",
      email: "abebe@gmail.com",
      phone: "+251 911 123 456",
      tickets: 5,
      status: "Active",
    },
    {
      id: 2,
      name: "Hana Worku",
      email: "hana@gmail.com",
      phone: "+251 922 456 789",
      tickets: 2,
      status: "Active",
    },
    {
      id: 3,
      name: "Dawit Tesfaye",
      email: "dawit@gmail.com",
      phone: "+251 933 654 321",
      tickets: 4,
      status: "Active",
    },
    {
      id: 4,
      name: "Meron Alemu",
      email: "meron@gmail.com",
      phone: "+251 944 987 654",
      tickets: 1,
      status: "Active",
    },
    {
      id: 5,
      name: "Sara Mohammed",
      email: "sara@gmail.com",
      phone: "+251 955 321 654",
      tickets: 3,
      status: "Inactive",
    },
  ];

  return (
    <div className="admin-layout">

      <Sidebar />

      <main className="admin-main">

        {/* Header */}

        <header className="admin-header">

          <div>
            <h1>Customers</h1>

            <p>
              Manage TechCare customer accounts.
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

          {/* Top Controls */}

          <div className="page-toolbar">

            <div>
              <h2>All Customers</h2>

              <p>
                {customers.length} registered customers
              </p>
            </div>

            <Link
              to="/admin/customers/create"
              className="primary-btn"
            >
              + Add Customer
            </Link>

          </div>


          {/* Search */}

          <div className="customer-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search by name, email or phone..."
            />

          </div>


          {/* Customer Table */}

          <div className="customer-table-container">

            <table className="customer-table">

              <thead>

                <tr>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Tickets</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {customers.map((customer) => (

                  <tr key={customer.id}>

                    <td>

                      <div className="customer-name">

                        <div className="customer-avatar">
                          {customer.name.charAt(0)}
                        </div>

                        <div>
                          <strong>
                            {customer.name}
                          </strong>

                          <span>
                            Customer #{customer.id}
                          </span>
                        </div>

                      </div>

                    </td>


                    <td>
                      {customer.email}
                    </td>


                    <td>
                      {customer.phone}
                    </td>


                    <td>

                      <span className="ticket-count">
                        {customer.tickets}
                      </span>

                    </td>


                    <td>

                      <span
                        className={
                          customer.status === "Active"
                            ? "customer-status active"
                            : "customer-status inactive"
                        }
                      >
                        {customer.status}
                      </span>

                    </td>


                    <td>

                      <Link
                        to={`/admin/customers/${customer.id}`}
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

export default Customers;