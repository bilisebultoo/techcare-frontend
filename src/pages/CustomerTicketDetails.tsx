import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

type Message = {
  id: number;
  sender: "CUSTOMER" | "AGENT";
  name: string;
  message: string;
  time: string;
};

function CustomerTicketDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [messageText, setMessageText] = useState("");
  const [customerConfirmed, setCustomerConfirmed] =
    useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "CUSTOMER",
      name: "You",
      message:
        "My laptop is not charging even when I connect the charger.",
      time: "10:20 AM",
    },
    {
      id: 2,
      sender: "AGENT",
      name: "Support Agent",
      message:
        "Hello! I will help you with this problem. Please check whether the charging light on your charger is on.",
      time: "10:25 AM",
    },
    {
      id: 3,
      sender: "CUSTOMER",
      name: "You",
      message:
        "Yes, the charging light is on.",
      time: "10:28 AM",
    },
    {
      id: 4,
      sender: "AGENT",
      name: "Support Agent",
      message:
        "Thank you. Please try connecting the charger to another power outlet and let me know if the laptop starts charging.",
      time: "10:30 AM",
    },
  ]);

  // Send customer message
  const handleSendMessage = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const trimmedMessage = messageText.trim();

    if (!trimmedMessage) {
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      sender: "CUSTOMER",
      name: "You",
      message: trimmedMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      newMessage,
    ]);

    setMessageText("");
  };

  // Confirm that the problem is solved
  const handleConfirmSolved = () => {
    const confirmed = window.confirm(
      "Are you sure your hardware problem has been solved?"
    );

    if (!confirmed) {
      return;
    }

    setCustomerConfirmed(true);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="customer-ticket-details-page">

      {/* =========================================
          SIDEBAR
      ========================================= */}

      <aside className="customer-dashboard-sidebar">

        <div className="customer-sidebar-top">

          <Link
            to="/customer/dashboard"
            className="customer-dashboard-logo"
          >
            <div className="customer-dashboard-logo-icon">
              TC
            </div>

            <div>
              <strong>TechCare</strong>
              <span>Customer Portal</span>
            </div>
          </Link>

          <nav className="customer-dashboard-nav">

            <Link
              to="/customer/dashboard"
              className="customer-dashboard-nav-link"
            >
              <span>▦</span>
              Dashboard
            </Link>

            <Link
              to="/customer/tickets"
              className="customer-dashboard-nav-link active"
            >
              <span>▣</span>
              My Tickets
            </Link>

            <Link
              to="/customer/report-problem"
              className="customer-dashboard-nav-link"
            >
              <span>＋</span>
              Report Problem
            </Link>

            <Link
              to="/customer/profile"
              className="customer-dashboard-nav-link"
            >
              <span>◯</span>
              My Profile
            </Link>

          </nav>
        </div>

        <div className="customer-sidebar-bottom">

          <div className="customer-support-box">
            <strong>Need Help?</strong>

            <p>
              Contact our support team if you
              need additional assistance.
            </p>

            <a href="mailto:support@techcare.com">
              Contact Support →
            </a>
          </div>

          <button
            type="button"
            className="customer-dashboard-logout"
            onClick={handleLogout}
          >
            <span>↪</span>
            Logout
          </button>

        </div>

      </aside>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <main className="customer-ticket-details-main">

        {/* =========================================
            TOP BAR
        ========================================= */}

        <header className="customer-ticket-details-topbar">

          <div>
            <p>TECHCARE CUSTOMER PORTAL</p>
            <h1>Ticket Details</h1>
          </div>

          <div className="customer-ticket-user">

            <div className="customer-ticket-user-avatar">
              C
            </div>

            <div>
              <strong>Customer</strong>
              <span>Customer Account</span>
            </div>

          </div>

        </header>


        {/* =========================================
            BACK BUTTON
        ========================================= */}

        <Link
          to="/customer/tickets"
          className="customer-ticket-back"
        >
          ← Back to My Tickets
        </Link>


        {/* =========================================
            TICKET HEADER
        ========================================= */}

        <section className="customer-ticket-header-card">

          <div className="customer-ticket-header-left">

            <div className="customer-ticket-number">
              #{id || "TC-001"}
            </div>

            <h2>
              Laptop is not charging
            </h2>

            <p>
              Created today at 10:20 AM
            </p>

          </div>

          <div className="customer-ticket-header-right">

            <span className="customer-ticket-priority high">
              HIGH
            </span>

            <span className="customer-ticket-status in-progress">
              IN PROGRESS
            </span>

          </div>

        </section>


        {/* =========================================
            TICKET INFORMATION
        ========================================= */}

        <section className="customer-ticket-info-grid">

          <div className="customer-ticket-info-card">

            <div className="customer-ticket-info-icon">
              💻
            </div>

            <div>
              <span>DEVICE</span>
              <strong>Dell Laptop</strong>
              <p>Latitude 5490</p>
            </div>

          </div>


          <div className="customer-ticket-info-card">

            <div className="customer-ticket-info-icon">
              👨‍💻
            </div>

            <div>
              <span>ASSIGNED AGENT</span>
              <strong>Support Agent</strong>
              <p>TechCare Support Team</p>
            </div>

          </div>


          <div className="customer-ticket-info-card">

            <div className="customer-ticket-info-icon">
              🛠
            </div>

            <div>
              <span>CATEGORY</span>
              <strong>Hardware</strong>
              <p>Charging Problem</p>
            </div>

          </div>

        </section>


        {/* =========================================
            PROBLEM DESCRIPTION
        ========================================= */}

        <section className="customer-ticket-description-card">

          <div className="customer-ticket-section-title">

            <div>
              <span>PROBLEM INFORMATION</span>
              <h2>Problem Description</h2>
            </div>

          </div>

          <div className="customer-problem-box">

            <strong>
              Laptop is not charging
            </strong>

            <p>
              My Dell laptop is not charging even
              when the charger is connected. The
              battery percentage does not increase.
            </p>

          </div>

        </section>


        {/* =========================================
            CONVERSATION
        ========================================= */}

        <section className="customer-conversation-card">

          <div className="customer-conversation-header">

            <div>
              <span>SUPPORT CONVERSATION</span>
              <h2>Messages</h2>
            </div>

            <div className="conversation-status">
              ● Live Support
            </div>

          </div>


          {/* =========================================
              MESSAGES
          ========================================= */}

          <div className="customer-messages">

            {messages.map((message) => (

              <div
                key={message.id}
                className={`customer-message-row ${
                  message.sender === "CUSTOMER"
                    ? "customer-message"
                    : "agent-message"
                }`}
              >

                <div className="customer-message-avatar">
                  {message.sender === "CUSTOMER"
                    ? "C"
                    : "A"}
                </div>

                <div className="customer-message-content">

                  <div className="customer-message-meta">

                    <strong>
                      {message.name}
                    </strong>

                    <span>
                      {message.time}
                    </span>

                  </div>

                  <div className="customer-message-bubble">
                    {message.message}
                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* =========================================
              MESSAGE INPUT
          ========================================= */}

          {!customerConfirmed && (

            <form
              className="customer-message-form"
              onSubmit={handleSendMessage}
            >

              <textarea
                value={messageText}
                onChange={(e) =>
                  setMessageText(e.target.value)
                }
                placeholder="Write a message to your support agent..."
                rows={3}
              />

              <div className="customer-message-actions">

                <span>
                  Your support agent will see this message.
                </span>

                <button
                  type="submit"
                  className="customer-send-message-btn"
                >
                  Send Message →
                </button>

              </div>

            </form>

          )}

        </section>


        {/* =========================================
            PROBLEM SOLVED CONFIRMATION
        ========================================= */}

        {!customerConfirmed ? (

          <section className="customer-confirm-card">

            <div className="customer-confirm-icon">
              ✓
            </div>

            <div className="customer-confirm-content">

              <h2>
                Is your problem solved?
              </h2>

              <p>
                Only confirm this after you have
                tested your device and are satisfied
                that the problem has been resolved.
              </p>

            </div>

            <button
              type="button"
              className="customer-confirm-btn"
              onClick={handleConfirmSolved}
            >
              Yes, Problem Is Solved
            </button>

          </section>

        ) : (

          <section className="customer-confirmed-card">

            <div className="customer-confirmed-icon">
              ✓
            </div>

            <div>

              <h2>
                Problem Confirmed as Solved
              </h2>

              <p>
                Thank you for confirming. The support
                agent can now close this ticket.
              </p>

            </div>

          </section>

        )}

      </main>

    </div>
  );
}

export default CustomerTicketDetails;