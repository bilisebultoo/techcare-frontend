import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Temporary: go directly to customer dashboard
    navigate("/customer/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* Left Side */}

        <div className="login-info">

          <Link to="/" className="login-logo">

            <div className="logo-icon">
              T
            </div>

            <div>
              <h2>TechCare</h2>
              <span>Hardware Support</span>
            </div>

          </Link>


          <div className="login-welcome">

            <span>WELCOME BACK</span>

            <h1>
              Get Support
              <br />
              <strong>When You Need It.</strong>
            </h1>

            <p>
              Login to your TechCare account to report
              hardware problems, track support tickets,
              and communicate with our support team.
            </p>

          </div>


          <div className="login-feature">

            <div>✓</div>

            <span>
              Track your support tickets
            </span>

          </div>

          <div className="login-feature">

            <div>✓</div>

            <span>
              Communicate with support agents
            </span>

          </div>

          <div className="login-feature">

            <div>✓</div>

            <span>
              Get your hardware problems resolved
            </span>

          </div>

        </div>


        {/* Right Side */}

        <div className="login-form-area">

          <div className="login-form">

            <div className="mobile-login-logo">

              <div className="logo-icon">
                T
              </div>

              <h2>TechCare</h2>

            </div>


            <h2>Sign in to your account</h2>

            <p className="login-description">
              Enter your account information below.
            </p>


            <form onSubmit={handleLogin}>

              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>


              <div className="form-group">

                <div className="password-label">

                  <label>
                    Password
                  </label>

                  <a href="#forgot">
                    Forgot password?
                  </a>

                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                />

              </div>


              <button
                type="submit"
                className="login-submit"
              >
                Sign In
              </button>

            </form>


            <div className="login-divider">
              <span>OR</span>
            </div>


            <p className="register-text">

              Don't have an account?

              <Link
                to="/register"
                className="create-account-link"
              >
                Create Account
              </Link>

            </p>


            <Link
              to="/"
              className="back-home"
            >
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;