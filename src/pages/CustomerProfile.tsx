import { Link } from "react-router-dom";

function CustomerProfile() {
  return (
    <div className="profile-page">

      {/* HEADER */}
      <header className="profile-header">

        <Link
          to="/customer/dashboard"
          className="profile-logo"
        >
          <div className="profile-logo-icon">
            TC
          </div>

          <div>
            <strong>TechCare</strong>
            <span>Hardware Support</span>
          </div>
        </Link>

        <Link
          to="/customer/dashboard"
          className="profile-back"
        >
          ← Back to Dashboard
        </Link>

      </header>


      {/* MAIN */}
      <main className="profile-main">

        <div className="profile-title">

          <p>TECHCARE ACCOUNT</p>

          <h1>My Profile</h1>

          <span>
            View and manage your TechCare account information.
          </span>

        </div>


        {/* PROFILE CARD */}
        <div className="profile-card">

          <div className="profile-card-header">

            <div className="profile-avatar">
              C
            </div>

            <div>
              <h2>Customer</h2>
              <p>Customer Account</p>
            </div>

          </div>


          {/* ACCOUNT INFORMATION */}
          <div className="profile-section">

            <h3>Personal Information</h3>

            <div className="profile-grid">

              <div className="profile-field">

                <label>Full Name</label>

                <div className="profile-value">
                  Customer
                </div>

              </div>


              <div className="profile-field">

                <label>Email Address</label>

                <div className="profile-value">
                  customer@example.com
                </div>

              </div>


              <div className="profile-field">

                <label>Phone Number</label>

                <div className="profile-value">
                  Not provided
                </div>

              </div>


              <div className="profile-field">

                <label>Account Type</label>

                <div className="profile-value">
                  Customer
                </div>

              </div>

            </div>

          </div>


          {/* SECURITY */}
          <div className="profile-section">

            <h3>Security</h3>

            <div className="security-row">

              <div>

                <strong>Password</strong>

                <p>
                  Keep your account secure with a strong password.
                </p>

              </div>

              <button
                type="button"
                className="change-password-btn"
              >
                Change Password
              </button>

            </div>

          </div>


          {/* ACTIONS */}
          <div className="profile-actions">

            <Link
              to="/customer/dashboard"
              className="profile-cancel-btn"
            >
              Back
            </Link>

            <button
              type="button"
              className="profile-save-btn"
            >
              Save Changes
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default CustomerProfile;