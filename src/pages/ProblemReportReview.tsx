import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

type ReportStatus = "PENDING" | "REVIEWED" | "CONVERTED";

function ProblemReportReview() {
  const { id } = useParams();

  /*
   * TEMPORARY UI DATA
   *
   * Later this will come from:
   * GET /api/problem-reports/:id
   *
   * PostgreSQL → Prisma → Express → React
   */
  const report = {
    id: id || "1",
    customer: {
      name: "Abebe Kebede",
      email: "abebe@example.com",
      phone: "+251 911 234 567",
    },
    device: {
      type: "Laptop",
      brand: "Dell",
      model: "Latitude 5490",
      serialNumber: "DL5490-2026-001",
      warranty: "Under Warranty",
    },
    problem: {
      title: "Laptop is not charging",
      description:
        "The laptop is not charging when the charger is connected. The customer reported that the battery percentage does not increase even though the charging cable is connected. The charging indicator also sometimes disappears.",
    },
    priority: "HIGH",
    submittedDate: "October 6, 2026",
    status: "PENDING" as ReportStatus,
  };

  const [status, setStatus] = useState<ReportStatus>(
    report.status
  );

  const handleStatusChange = (
    newStatus: ReportStatus
  ) => {
    setStatus(newStatus);

    // Later:
    // PUT /api/problem-reports/:id/status
  };

  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="admin-main">

        {/* HEADER */}
        <header className="admin-header">
          <div>
            <h1>Review Problem Report</h1>
            <p>
              Review the customer's hardware problem before
              creating an official ticket.
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

        {/* PAGE */}
        <section className="page-content">

          {/* BACK */}
          <Link
            to="/admin/problem-reports"
            className="back-link"
          >
            ← Back to Problem Reports
          </Link>

          {/* TITLE */}
          <div className="review-page-title">
            <div>
              <span className="review-report-label">
                PROBLEM REPORT
              </span>

              <h2>
                Report #{report.id}
              </h2>

              <p>
                Submitted on {report.submittedDate}
              </p>
            </div>

            <div>
              <span
                className={`report-status ${status.toLowerCase()}`}
              >
                {status === "PENDING" && "Pending Review"}
                {status === "REVIEWED" && "Reviewed"}
                {status === "CONVERTED" && "Converted"}
              </span>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="report-review-grid">

            {/* LEFT SIDE */}
            <div className="report-review-main">

              {/* CUSTOMER */}
              <div className="review-card">
                <div className="review-card-header">
                  <div>
                    <h3>Customer Details</h3>
                    <p>
                      Information about the customer who
                      submitted this report.
                    </p>
                  </div>

                  <div className="review-section-icon">
                    👤
                  </div>
                </div>

                <div className="customer-detail-grid">

                  <div className="detail-item">
                    <span>Full Name</span>
                    <strong>
                      {report.customer.name}
                    </strong>
                  </div>

                  <div className="detail-item">
                    <span>Email Address</span>
                    <strong>
                      {report.customer.email}
                    </strong>
                  </div>

                  <div className="detail-item">
                    <span>Phone Number</span>
                    <strong>
                      {report.customer.phone}
                    </strong>
                  </div>

                </div>
              </div>

              {/* DEVICE */}
              <div className="review-card">
                <div className="review-card-header">
                  <div>
                    <h3>Device Information</h3>
                    <p>
                      Hardware information provided by the
                      customer.
                    </p>
                  </div>

                  <div className="review-section-icon">
                    💻
                  </div>
                </div>

                <div className="customer-detail-grid">

                  <div className="detail-item">
                    <span>Device Type</span>
                    <strong>
                      {report.device.type}
                    </strong>
                  </div>

                  <div className="detail-item">
                    <span>Brand</span>
                    <strong>
                      {report.device.brand}
                    </strong>
                  </div>

                  <div className="detail-item">
                    <span>Model</span>
                    <strong>
                      {report.device.model}
                    </strong>
                  </div>

                  <div className="detail-item">
                    <span>Serial Number</span>
                    <strong>
                      {report.device.serialNumber}
                    </strong>
                  </div>

                  <div className="detail-item">
                    <span>Warranty Status</span>
                    <strong className="warranty-active">
                      {report.device.warranty}
                    </strong>
                  </div>

                </div>
              </div>

              {/* PROBLEM */}
              <div className="review-card">
                <div className="review-card-header">
                  <div>
                    <h3>Problem Description</h3>
                    <p>
                      Details of the hardware problem reported
                      by the customer.
                    </p>
                  </div>

                  <div className="review-section-icon">
                    ⚠️
                  </div>
                </div>

                <div className="problem-detail-box">
                  <div className="problem-detail-title">
                    <span>Problem</span>

                    <span
                      className={`report-priority ${report.priority.toLowerCase()}`}
                    >
                      {report.priority}
                    </span>
                  </div>

                  <h4>
                    {report.problem.title}
                  </h4>

                  <p>
                    {report.problem.description}
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <aside className="report-review-sidebar">

              {/* STATUS */}
              <div className="review-card status-card">

                <div className="review-card-header">
                  <div>
                    <h3>Report Status</h3>
                    <p>
                      Update the review status.
                    </p>
                  </div>
                </div>

                <div className="status-options">

                  <button
                    className={
                      status === "PENDING"
                        ? "status-option active pending-option"
                        : "status-option"
                    }
                    onClick={() =>
                      handleStatusChange("PENDING")
                    }
                  >
                    <span>⏳</span>

                    <div>
                      <strong>Pending</strong>
                      <small>
                        Waiting for admin review
                      </small>
                    </div>
                  </button>

                  <button
                    className={
                      status === "REVIEWED"
                        ? "status-option active reviewed-option"
                        : "status-option"
                    }
                    onClick={() =>
                      handleStatusChange("REVIEWED")
                    }
                  >
                    <span>👁️</span>

                    <div>
                      <strong>Reviewed</strong>
                      <small>
                        Report has been reviewed
                      </small>
                    </div>
                  </button>

                  <button
                    className={
                      status === "CONVERTED"
                        ? "status-option active converted-option"
                        : "status-option"
                    }
                    onClick={() =>
                      handleStatusChange("CONVERTED")
                    }
                  >
                    <span>🎫</span>

                    <div>
                      <strong>Converted</strong>
                      <small>
                        Official ticket created
                      </small>
                    </div>
                  </button>

                </div>
              </div>

              {/* CREATE TICKET */}
              <div className="create-ticket-card">

                <div className="ticket-card-icon">
                  🎫
                </div>

                <h3>
                  Create Official Ticket
                </h3>

                <p>
                  Convert this customer problem report into
                  an official support ticket.
                </p>

                <Link
                  to={`/admin/problem-reports/${report.id}/create-ticket`}
                  className="create-ticket-btn"
                >
                  Create Ticket
                </Link>

              </div>

              {/* INFORMATION */}
              <div className="review-card">
                <div className="review-card-header">
                  <div>
                    <h3>Review Information</h3>
                  </div>
                </div>

                <div className="review-info-list">

                  <div>
                    <span>Report ID</span>
                    <strong>
                      #{report.id}
                    </strong>
                  </div>

                  <div>
                    <span>Submitted</span>
                    <strong>
                      {report.submittedDate}
                    </strong>
                  </div>

                  <div>
                    <span>Priority</span>
                    <span
                      className={`report-priority ${report.priority.toLowerCase()}`}
                    >
                      {report.priority}
                    </span>
                  </div>

                </div>
              </div>

            </aside>

          </div>

        </section>
      </main>
    </div>
  );
}

export default ProblemReportReview;