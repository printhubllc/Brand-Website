import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faWifi,
  faExclamationTriangle,
  faDownload,
  faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const heroStyle = {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "120px 0",
  };

  const bulletPointStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "1.2rem",
    marginBottom: "15px",
    textShadow: "none",
  };

  const iconStyle = {
    marginRight: "10px",
    color: "#009dde",
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={heroStyle}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 mb-4 font-weight-bold">
                Printer Setup & Assistance
              </h1>
              <div className="bg-white text-dark p-4 rounded shadow-sm">
                <ul className="list-unstyled text-left">
                  <li style={bulletPointStyle}>
                    <FontAwesomeIcon icon={faDesktop} style={iconStyle} />
                    Connect Your Printer to Your Computer Easily
                  </li>
                  <li style={bulletPointStyle}>
                    <FontAwesomeIcon icon={faWifi} style={iconStyle} />
                    Set Up Wireless Printing
                  </li>
                  <li style={bulletPointStyle}>
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      style={iconStyle}
                    />
                    Resolve Printer Offline Status
                  </li>
                  <li style={bulletPointStyle}>
                    <FontAwesomeIcon icon={faDownload} style={iconStyle} />
                    Install the Latest Printer Drivers
                  </li>
                  <li style={bulletPointStyle}>
                    <FontAwesomeIcon icon={faCompactDisc} style={iconStyle} />
                    Install Without a CD
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Link to="/printersearch">
                  <Button variant="primary" size="lg" className="mr-3">
                    START YOUR SETUP
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Main;
