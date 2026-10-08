import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

type Message = {
  id: number;
  sender: "CUSTOMER" | "AGENT";
  name: string;
  message: string;
  time: string;
};

function AgentTicketDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "CUSTOMER",
      name: "Abebe Kebede",
      message:
        "My laptop is not charging even when I connect the charger.",
      time: "10:20 AM",
    },
    {
      id: 2,
      sender: "AGENT",
      name: "You",
      message:
        "Hello! I will help you with this problem. Please check whether the charging light on your charger is on.",
      time: "10:25 AM",
    },
    {
      id: 3,
      sender: "CUSTOMER",
      name: "Abebe Kebede",
      message:
        "Yes, the charging light is on.",
      time: "10:28 AM",
    },
  ]);

  const [status, setStatus] = useState("IN_PROGRESS");

  const handleSend = () => {
    if (!message.trim()) {
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      sender: "AGENT",
      name: "You",
      message: message.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((oldMessages) => [
      ...oldMessages,
      newMessage,
    ]);

    setMessage("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f9fc",
        display: "flex",
      }}
    >

      {/* SIDEBAR */}

      <aside
        style={{
          width: "245px",
          minHeight: "100vh",
          background: "#ffffff",
          borderRight: "1px solid #e5eaf0",
          padding: "25px 18px",
          boxSizing: "border-box",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >

        <Link
          to="/agent/dashboard"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#20252d",
            marginBottom: "40px",
          }}
        >

          <div
            style={{
              width: "40px",
              height: "40px",
              background: "#1677ff",
              color: "white",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "12px",
            }}
          >
            TC
          </div>

          <div>
            <strong
              style={{
                display: "block",
                fontSize: "17px",
              }}
            >
              TechCare
            </strong>

            <span
              style={{
                display: "block",
                color: "#929aaa",
                fontSize: "10px",
                marginTop: "3px",
              }}
            >
              Agent Portal
            </span>
          </div>

        </Link>


        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >

          <Link
            to="/agent/dashboard"
            style={navStyle}
          >
            ▦ &nbsp; Dashboard
          </Link>

          <Link
            to="/agent/tickets"
            style={{
              ...navStyle,
              background: "#eaf3ff",
              color: "#1677ff",
            }}
          >
            ▣ &nbsp; My Tickets
          </Link>

          <Link
            to="/agent/profile"
            style={navStyle}
          >
            ◯ &nbsp; My Profile
          </Link>

        </nav>


        <button
          type="button"
          onClick={handleLogout}
          style={{
            position: "absolute",
            bottom: "25px",
            left: "18px",
            right: "18px",
            padding: "12px",
            border: "none",
            background: "#fff1f1",
            color: "#e55353",
            borderRadius: "8px",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          ↪ &nbsp; Logout
        </button>

      </aside>


      {/* MAIN */}

      <main
        style={{
          marginLeft: "245px",
          width: "calc(100% - 245px)",
          padding: "0 40px 60px",
          boxSizing: "border-box",
        }}
      >

        {/* TOP BAR */}

        <header
          style={{
            minHeight: "95px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #e7ebf0",
          }}
        >

          <div>

            <p
              style={{
                margin: "0 0 6px",
                color: "#1677ff",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "1.2px",
              }}
            >
              TECHCARE AGENT PORTAL
            </p>

            <h1
              style={{
                margin: 0,
                fontSize: "25px",
                color: "#20252d",
              }}
            >
              Ticket Details
            </h1>

          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >

            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#eaf3ff",
                color: "#1677ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              A
            </div>

            <div>
              <strong
                style={{
                  display: "block",
                  fontSize: "12px",
                }}
              >
                Support Agent
              </strong>

              <span
                style={{
                  color: "#929aaa",
                  fontSize: "10px",
                }}
              >
                Agent Account
              </span>
            </div>

          </div>

        </header>


        {/* BACK */}

        <Link
          to="/agent/tickets"
          style={{
            display: "inline-block",
            marginTop: "25px",
            marginBottom: "20px",
            color: "#697586",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          ← Back to My Tickets
        </Link>


        {/* TICKET HEADER */}

        <section
          style={{
            background: "white",
            border: "1px solid #e5eaf0",
            borderRadius: "12px",
            padding: "25px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >

          <div>

            <span
              style={{
                color: "#1677ff",
                fontSize: "11px",
                fontWeight: 800,
              }}
            >
              #{id || "TC-001"}
            </span>

            <h2
              style={{
                margin: "8px 0",
                color: "#252a32",
                fontSize: "23px",
              }}
            >
              Laptop is not charging
            </h2>

            <p
              style={{
                margin: 0,
                color: "#929aaa",
                fontSize: "11px",
              }}
            >
              Customer: Abebe Kebede
            </p>

          </div>


          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >

            <span
              style={{
                padding: "7px 11px",
                background: "#fff0f0",
                color: "#e55353",
                borderRadius: "6px",
                fontSize: "9px",
                fontWeight: 800,
              }}
            >
              HIGH
            </span>

            <span
              style={{
                padding: "7px 11px",
                background:
                  status === "RESOLVED"
                    ? "#eaf9f0"
                    : "#eeeaff",
                color:
                  status === "RESOLVED"
                    ? "#269a59"
                    : "#7257c7",
                borderRadius: "6px",
                fontSize: "9px",
                fontWeight: 800,
              }}
            >
              {status === "IN_PROGRESS"
                ? "IN PROGRESS"
                : status}
            </span>

          </div>

        </section>


        {/* INFORMATION */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, 1fr)",
            gap: "15px",
            marginTop: "15px",
          }}
        >

          <InfoCard
            title="DEVICE"
            value="Dell Laptop"
            description="Latitude 5490"
          />

          <InfoCard
            title="CUSTOMER"
            value="Abebe Kebede"
            description="Customer Account"
          />

          <InfoCard
            title="CATEGORY"
            value="Hardware"
            description="Charging Problem"
          />

        </section>


        {/* PROBLEM */}

        <section
          style={{
            background: "white",
            border: "1px solid #e5eaf0",
            borderRadius: "12px",
            padding: "25px",
            marginTop: "15px",
          }}
        >

          <p
            style={{
              margin: "0 0 7px",
              color: "#1677ff",
              fontSize: "8px",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            PROBLEM INFORMATION
          </p>

          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "17px",
              color: "#303640",
            }}
          >
            Problem Description
          </h2>

          <div
            style={{
              padding: "18px",
              background: "#f8fafc",
              borderRadius: "8px",
            }}
          >

            <strong
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#303640",
                fontSize: "12px",
              }}
            >
              Laptop is not charging
            </strong>

            <p
              style={{
                margin: 0,
                color: "#687384",
                fontSize: "11px",
                lineHeight: 1.7,
              }}
            >
              My Dell laptop is not charging even
              when the charger is connected. The
              battery percentage does not increase.
            </p>

          </div>

        </section>


        {/* STATUS */}

        <section
          style={{
            background: "white",
            border: "1px solid #e5eaf0",
            borderRadius: "12px",
            padding: "22px 25px",
            marginTop: "15px",
          }}
        >

          <h2
            style={{
              margin: "0 0 15px",
              fontSize: "16px",
              color: "#303640",
            }}
          >
            Update Ticket Status
          </h2>

          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >

            <button
              type="button"
              onClick={() => setStatus("OPEN")}
              style={statusButton(status === "OPEN")}
            >
              Open
            </button>

            <button
              type="button"
              onClick={() =>
                setStatus("IN_PROGRESS")
              }
              style={statusButton(
                status === "IN_PROGRESS"
              )}
            >
              In Progress
            </button>

            <button
              type="button"
              onClick={() =>
                setStatus("RESOLVED")
              }
              style={statusButton(
                status === "RESOLVED"
              )}
            >
              Resolved
            </button>

          </div>

        </section>


        {/* CONVERSATION */}

        <section
          style={{
            background: "white",
            border: "1px solid #e5eaf0",
            borderRadius: "12px",
            marginTop: "15px",
            overflow: "hidden",
          }}
        >

          <div
            style={{
              padding: "22px 25px",
              borderBottom: "1px solid #edf0f4",
            }}
          >

            <p
              style={{
                margin: "0 0 6px",
                color: "#1677ff",
                fontSize: "8px",
                fontWeight: 800,
                letterSpacing: "1px",
              }}
            >
              CUSTOMER COMMUNICATION
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "17px",
                color: "#303640",
              }}
            >
              Conversation
            </h2>

          </div>


          {/* MESSAGES */}

          <div
            style={{
              padding: "25px",
            }}
          >

            {messages.map((item) => (

              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection:
                    item.sender === "AGENT"
                      ? "row-reverse"
                      : "row",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >

                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    background:
                      item.sender === "AGENT"
                        ? "#1677ff"
                        : "#eaf3ff",
                    color:
                      item.sender === "AGENT"
                        ? "white"
                        : "#1677ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 800,
                  }}
                >
                  {item.sender === "AGENT"
                    ? "A"
                    : "C"}
                </div>

                <div
                  style={{
                    maxWidth: "70%",
                  }}
                >

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "5px",
                    }}
                  >

                    <strong
                      style={{
                        fontSize: "10px",
                        color: "#303640",
                      }}
                    >
                      {item.name}
                    </strong>

                    <span
                      style={{
                        fontSize: "8px",
                        color: "#929aaa",
                      }}
                    >
                      {item.time}
                    </span>

                  </div>

                  <div
                    style={{
                      padding: "11px 14px",
                      borderRadius: "8px",
                      background:
                        item.sender === "AGENT"
                          ? "#eaf3ff"
                          : "#f5f7fa",
                      color: "#505966",
                      fontSize: "10px",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.message}
                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* SEND MESSAGE */}

          <div
            style={{
              padding: "20px 25px",
              borderTop: "1px solid #edf0f4",
              background: "#fafbfc",
            }}
          >

            <textarea
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Write a message to the customer..."
              rows={3}
              style={{
                width: "100%",
                boxSizing: "border-box",
                resize: "vertical",
                padding: "12px",
                border: "1px solid #dfe5ec",
                borderRadius: "7px",
                outline: "none",
                fontFamily: "inherit",
                fontSize: "10px",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >

              <button
                type="button"
                onClick={handleSend}
                style={{
                  padding: "10px 17px",
                  border: "none",
                  borderRadius: "7px",
                  background: "#1677ff",
                  color: "white",
                  fontSize: "9px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Send Message →
              </button>

            </div>

          </div>

        </section>


        {/* CLOSE */}

        <section
          style={{
            marginTop: "15px",
            padding: "22px 25px",
            background: "white",
            border: "1px solid #e5eaf0",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >

          <div>

            <h2
              style={{
                margin: "0 0 6px",
                color: "#303640",
                fontSize: "14px",
              }}
            >
              Customer Confirmation
            </h2>

            <p
              style={{
                margin: 0,
                color: "#929aaa",
                fontSize: "10px",
              }}
            >
              The customer must confirm the problem
              is solved before the ticket is closed.
            </p>

          </div>

          <button
            type="button"
            onClick={() => {
              alert(
                "Customer confirmation is required before closing this ticket."
              );
            }}
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "7px",
              background: "#e8ebef",
              color: "#7b8491",
              fontSize: "9px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Close Ticket
          </button>

        </section>

      </main>

    </div>
  );
}


/* =========================================
   SMALL COMPONENTS
========================================= */

function InfoCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5eaf0",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <span
        style={{
          display: "block",
          marginBottom: "8px",
          color: "#929aaa",
          fontSize: "8px",
          fontWeight: 800,
          letterSpacing: "0.8px",
        }}
      >
        {title}
      </span>

      <strong
        style={{
          display: "block",
          marginBottom: "5px",
          color: "#303640",
          fontSize: "12px",
        }}
      >
        {value}
      </strong>

      <p
        style={{
          margin: 0,
          color: "#929aaa",
          fontSize: "9px",
        }}
      >
        {description}
      </p>
    </div>
  );
}


function statusButton(active: boolean) {
  return {
    padding: "9px 14px",
    border: active
      ? "1px solid #1677ff"
      : "1px solid #dfe5ec",
    borderRadius: "7px",
    background: active
      ? "#1677ff"
      : "white",
    color: active
      ? "white"
      : "#697586",
    fontSize: "9px",
    fontWeight: 700,
    cursor: "pointer",
  };
}


const navStyle = {
  display: "block",
  padding: "12px 14px",
  borderRadius: "8px",
  textDecoration: "none",
  color: "#687384",
  fontSize: "11px",
  fontWeight: 600,
};

export default AgentTicketDetails;