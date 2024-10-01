import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after installation completion
import { FiDownload } from "react-icons/fi";
import { Footer, Navbar } from "../components"; // Import Footer and Navbar components

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [installStarted, setInstallStarted] = useState(false);
  const [messages, setMessages] = useState([]); // State to store terminal messages
  const navigate = useNavigate(); // For redirecting after progress completion

  useEffect(() => {
    // Start the installation automatically
    if (!installStarted) {
      setInstallStarted(true);
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 5; // Increase progress by 5%
          }
          clearInterval(interval);
          return 100;
        });
      }, 1000); // Increment progress every 1 second

      // Add initial terminal messages
      setMessages((prev) => ["Connecting to the network...", ...prev]); // Add new message at the top
      setTimeout(() => {
        setMessages((prev) => ["Downloading driver...", ...prev]);
      }, 2000);
      setTimeout(() => {
        setMessages((prev) => ["Download in progress...", ...prev]);
      }, 4000);
      setTimeout(() => {
        setMessages((prev) => ["Establishing connection...", ...prev]);
      }, 6000);
      setTimeout(() => {
        setMessages((prev) => ["Almost done...", ...prev]);
      }, 8000);
    }

    // Redirect to another page when installation is complete
    if (progress === 100) {
      setTimeout(() => {
        navigate("/printer/error"); // Replace with your target route
      }, 2000); // Wait for 2 seconds before redirecting
    }
  }, [progress, installStarted, navigate]);

  return (
    <div>
      <Navbar /> {/* Display Navbar at the top */}
      <div style={styles.container}>
        <h1>Driver Installation</h1>
        <div style={styles.statusMessage}>Installing...</div>
        <div style={{ ...styles.progressContainer, height: installStarted ? "100px" : "50px" }}>
          <div
            style={{
              ...styles.progressBar,
              width: `${progress}%`,
              backgroundColor: progress >= 98 ? "red" : "#4caf50", // Change color to red if progress is 98% or more
            }}
          />
        </div>
        {progress >= 99 ? (
          <div style={styles.errorMessage}>
            <p>Error occurred during installation!</p>
          </div>
        ) : null}
        <div style={styles.actionContainer}>
          <button style={styles.button} disabled>
            <FiDownload style={styles.icon} /> Installing...
          </button>
        </div>
        <div style={styles.terminal}>
          <div style={styles.terminalContent}>
            {messages.map((msg, index) => (
              <p key={index} style={styles.terminalText}>
                {msg}
              </p>
            ))}
            <p style={styles.terminalText}>Progress: {progress}%</p>
          </div>
        </div>
      </div>
      <Footer /> {/* Display Footer at the bottom */}
    </div>
  );
};

// Styling
const styles = {
  container: {
    width: "400px",
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  progressContainer: {
    width: "100%",
    height: "50px",
    backgroundColor: "#e0e0e0",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  progressBar: {
    height: "100%",
    transition: "width 1s", // Transition effect duration
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#009dde",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "not-allowed",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "5px",
  },
  statusMessage: {
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  errorMessage: {
    padding: "10px",
    color: "red",
    fontWeight: "bold",
  },
  terminal: {
    backgroundColor: "#ffffff", // Terminal background is white
    color: "#000000", // Text color is black for better visibility
    borderRadius: "8px",
    padding: "10px",
    marginTop: "20px",
    fontFamily: "Courier New, monospace",
    textAlign: "left",
    lineHeight: "1.5",
    border: "1px solid #ccc", // Add a border to the terminal
    maxHeight: "100px", // Set a smaller maximum height for the terminal
    overflowY: "auto", // Enable vertical scrolling
  },
  terminalContent: {
    transform: "translateY(0)", // Keeps content in place
    transition: "transform 0.3s ease-in-out",
  },
  terminalText: {
    margin: "0",
  },
};

export default Loading;
