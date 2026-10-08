import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check required fields
    if (
      !fullName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Check password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // Check passwords
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Create temporary customer information
    const user = {
      name: fullName,
      email: email,
      phone: phone,
      role: "CUSTOMER",
    };

    // Save user information temporarily
    localStorage.setItem("user", JSON.stringify(user));

    // Temporary login token
    localStorage.setItem("token", "customer-demo-token");

    // Go directly to customer dashboard
    navigate("/customer/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* Logo */}
        <div className="auth-logo">

          <div className="auth-logo-icon">
            TC
          </div>

          <span>
            TechCare
          </span>

        </div>

        {/* Title */}
        <h1>
          Create Account
        </h1>

        <p className="auth-subtitle">
          Create your TechCare customer account
        </p>

        {/* Form */}
        <form onSubmit={handleRegister}>

          {/* Full Name */}
          <div className="auth-form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
            />

          </div>

          {/* Email */}
          <div className="auth-form-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          {/* Phone */}
          <div className="auth-form-group">

            <label>
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />

          </div>

          {/* Password */}
          <div className="auth-form-group">

            <label>
              Password
            </label>

            <div className="password-input-wrapper">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create a password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword
                  ? "Hide"
                  : "Show"}
              </button>

            </div>

          </div>

          {/* Confirm Password */}
          <div className="auth-form-group">

            <label>
              Confirm Password
            </label>

            <div className="password-input-wrapper">

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword
                  ? "Hide"
                  : "Show"}
              </button>

            </div>

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="auth-submit-btn"
          >
            Create Account
          </button>

        </form>

        {/* Login */}
        <div className="auth-footer">

          <span>
            Already have an account?
          </span>

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;