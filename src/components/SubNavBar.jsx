import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SubNavBar = () => {
  return (
    <nav
      className="d-none d-md-flex"
      style={{
        height: "40px",
        backgroundColor: "#009dde",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        width: "100%", // Ensure full width
        overflow: "hidden", // Hide overflow to prevent scrollbars
      }}
    >
      <div className="nav-container">
        <span className="nav-item">Products</span>
        <span className="nav-item">Diagnostics</span>
        <span className="nav-item">Software and Drivers</span>
        <span className="nav-item">Contact Us</span>
        <span className="nav-item">Warranty & Returns</span>
        <span className="nav-item">My HP Account</span>
      </div>

      <style jsx>{`
        .nav-container {
          display: flex;
          justify-content: space-between; // Distribute space evenly between items
          flex-wrap: nowrap; // Prevent wrapping
          width: 100%; // Ensure full width of container
        }

        .nav-item {
          color: white;
          font-weight: bold;
          margin: 0 10px;
          flex-grow: 1; // Allow items to grow and fill available space
          text-align: center; // Center text within each item
          white-space: nowrap; // Prevent text from wrapping
        }
      `}</style>
    </nav>
  );
};

export default SubNavBar;
