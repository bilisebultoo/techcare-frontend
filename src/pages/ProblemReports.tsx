import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

type ReportStatus = "PENDING" | "REVIEWED" | "CONVERTED";

type ProblemReport = {
  id: number;
  customer: string;
  device: string;
  brand: string;
  model: string;
  problem: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: ReportStatus;
  date: string;
};

function ProblemReports() {
  const [selectedStatus, setSelectedStatus] =
    useState<"ALL" | ReportStatus>("ALL");

  /*
   * TEMPORARY UI DATA
   *
   * Later this will come from:
   * GET /api/problem-reports
   *
   * PostgreSQL → Prisma → Express → React
   */
  const reports: ProblemReport[] = [
    {
      id: 1,
      customer: "Abebe Kebede",
      device: "Laptop",
      brand: "Dell",
      model: "Latitude 5490",
      problem: "Laptop is not charging",
      priority: "HIGH",
      status: "PENDING",
      date: "Oct 6, 2026",
    },
    {
      id: 2,
      customer: "Hana Worku",
      device: "Printer",
      brand: "HP",
      model: "LaserJet Pro",
      problem: "Printer is not printing",
      priority: "MEDIUM",
      status: "PENDING",
      date: "Oct 6, 2026",
    },
    {
      id: 3,
      customer: "Dawit Tesfaye",
      device: "Desktop",
      brand: "Dell",
      model: "OptiPlex 7090",
      problem: "Computer is overheating",
      priority: "MEDIUM",
      status: "REVIEWED",
      date: "Oct 5, 2026",
    },
    {
      id: 4,
      customer: "Meron Alemu",
      device: "Phone",
      brand: "Samsung",
      model: "Galaxy S23",
      problem: "Phone battery drains quickly",
      priority: "LOW",
      status: "CONVERTED",
      date: "Oct 4, 2026",
    },
    {
      id: 5,
      customer: "Sara Mohammed",
      device: "Router",
      brand: "TP-Link",
      model: "Archer C6",
      problem: "Frequent Wi-Fi disconnection",
      priority: "HIGH",
      status: "PENDING",
      date: "Oct 3, 2026",
    },
  ];

  const filteredReports =
    selectedStatus === "ALL"
      ? reports
      : reports.filter(
          (report) => report.status === selectedStatus
        );

  const pendingCount = reports.filter(
    (report) => report.status === "PENDING"
  ).length;

  const reviewedCount = reports.filter(
    (report) => report.status === "REVIEWED"
  ).length;

  const convertedCount = reports.filter(
    (report) => report.status === "CONVERTED"
  ).length;

  return (
    <div className="admin-layout">

      <Sidebar />

      <main className="admin-main">

        {/* HEADER */}

        <header className="admin-header">

          <div>
            <h1>Problem Reports</h1>

            <p>
              Review hardware problems reported by customers.
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


        {/* CONTENT */}

        <section className="page-content">

          {/* PAGE TITLE */}

          <div className="page-toolbar">

            <div>
              <h2>Customer Problem Reports</h2>

              <p>
                Review reports before creating official tickets.
              </p>
            </div>

          </div>


          {/* SUMMARY CARDS */}

          <div className="report-summary-grid">

            <button
              className={
                selectedStatus === "ALL"
                  ? "report-summary-card selected"
                  : "report-summary-card"
              }
              onClick={() => setSelectedStatus("ALL")}
            >
              <div className="summary-icon blue">
                📋
              </div>

              <div>
                <span>Total Reports</span>
                <strong>{reports.length}</strong>
              </div>
            </button>


            <button
              className={
                selectedStatus === "PENDING"
                  ? "report-summary-card selected"
                  : "report-summary-card"
              }
              onClick={() => setSelectedStatus("PENDING")}
            >
              <div className="summary-icon orange">
                ⏳
              </div>

              <div>
                <span>Pending Review</span>
                <strong>{pendingCount}</strong>
              </div>
            </button>


            <button
              className={
                selectedStatus === "REVIEWED"
                  ? "report-summary-card selected"
                  : "report-summary-card"
              }
              onClick={() => setSelectedStatus("REVIEWED")}
            >
              <div className="summary-icon purple">
                👁️
              </div>

              <div>
                <span>Reviewed</span>
                <strong>{reviewedCount}</strong>
              </div>
            </button>


            <button
              className={
                selectedStatus === "CONVERTED"
                  ? "report-summary-card selected"
                  : "report-summary-card"
              }
              onClick={() => setSelectedStatus("CONVERTED")}
            >
              <div className="summary-icon green">
                🎫
              </div>

              <div>
                <span>Converted to Tickets</span>
                <strong>{convertedCount}</strong>
              </div>
            </button>

          </div>


          {/* FILTERS */}

          <div className="reports-filter-bar">

            <div className="filter-label">
              Filter by status:
            </div>

            <button
              className={
                selectedStatus === "ALL"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setSelectedStatus("ALL")}
            >
              All
            </button>

            <button
              className={
                selectedStatus === "PENDING"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setSelectedStatus("PENDING")}
            >
              Pending
            </button>

            <button
              className={
                selectedStatus === "REVIEWED"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setSelectedStatus("REVIEWED")}
            >
              Reviewed
            </button>

            <button
              className={
                selectedStatus === "CONVERTED"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setSelectedStatus("CONVERTED")}
            >
              Converted
            </button>

          </div>


          {/* TABLE */}

          <div className="customer-table-container">

            <table className="customer-table problem-reports-table">

              <thead>

                <tr>
                  <th>Report</th>
                  <th>Customer</th>
                  <th>Device</th>
                  <th>Problem</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {filteredReports.map((report) => (

                  <tr key={report.id}>

                    {/* REPORT */}

                    <td>

                      <div className="report-number">

                        <div className="report-table-icon">
                          📋
                        </div>

                        <div>
                          <strong>
                            #{report.id}
                          </strong>

                          <span>
                            Problem Report
                          </span>
                        </div>

                      </div>

                    </td>


                    {/* CUSTOMER */}

                    <td>

                      <strong className="table-customer-name">
                        {report.customer}
                      </strong>

                    </td>


                    {/* DEVICE */}

                    <td>

                      <div className="device-info">

                        <strong>
                          {report.device}
                        </strong>

                        <span>
                          {report.brand} {report.model}
                        </span>

                      </div>

                    </td>


                    {/* PROBLEM */}

                    <td>

                      <span className="problem-title">
                        {report.problem}
                      </span>

                    </td>


                    {/* PRIORITY */}

                    <td>

                      <span
                        className={`report-priority ${report.priority.toLowerCase()}`}
                      >
                        {report.priority}
                      </span>

                    </td>


                    {/* STATUS */}

                    <td>

                      <span
                        className={`report-status ${report.status.toLowerCase()}`}
                      >
                        {report.status === "PENDING" && "Pending"}

                        {report.status === "REVIEWED" && "Reviewed"}

                        {report.status === "CONVERTED" && "Converted"}

                      </span>

                    </td>


                    {/* DATE */}

                    <td>
                      <span className="report-date">
                        {report.date}
                      </span>
                    </td>


                    {/* ACTION */}

                    <td>

                      <Link
                        to={`/admin/problem-reports/${report.id}`}
                        className="review-btn"
                      >
                        Review
                      </Link>

                    </td>

                  </tr>

                ))}


                {filteredReports.length === 0 && (

                  <tr>

                    <td
                      colSpan={8}
                      className="empty-reports"
                    >
                      <div>
                        <span>📋</span>

                        <strong>
                          No problem reports found
                        </strong>

                        <p>
                          There are no reports with this status.
                        </p>
                      </div>
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

export default ProblemReports;