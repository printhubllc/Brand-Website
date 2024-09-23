import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaShieldAlt, FaCalendarCheck, FaCogs } from "react-icons/fa";
import { Navbar, Footer } from "../components";

const WarrantyInformation = () => {
  return (
    <>
      <Navbar />
      <Container className="my-5">
        <Row className="mb-4">
          <Col className="text-center">
            <h1 className="display-4 mb-4">Warranty Information</h1>
            <p className="lead mb-5">
              At Activto Printer, we stand behind the quality of our products.
              Our warranty covers defects in materials and workmanship for a
              specified period. Please review the details below to understand
              our warranty policy for printers purchased offline.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="mb-4 shadow-sm border-light">
              <Card.Body>
                <Card.Title className="d-flex align-items-center mb-3">
                  <FaShieldAlt className="me-2 text-primary" />
                  Warranty Coverage
                </Card.Title>
                <Card.Text>
                  Our warranty includes coverage for defects in material and
                  workmanship for a period of one year from the date of
                  purchase. This warranty does not cover damage caused by
                  misuse, accidents, or unauthorized modifications.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4 shadow-sm border-light">
              <Card.Body>
                <Card.Title className="d-flex align-items-center mb-3">
                  <FaCalendarCheck className="me-2 text-primary" />
                  Warranty Period
                </Card.Title>
                <Card.Text>
                  The warranty period begins on the date of purchase. Please
                  retain your purchase receipt, as it will be required for any
                  warranty claims.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4 shadow-sm border-light">
              <Card.Body>
                <Card.Title className="d-flex align-items-center mb-3">
                  <FaCogs className="me-2 text-primary" />
                  Claiming a Warranty
                </Card.Title>
                <Card.Text>
                  To make a warranty claim, please contact our customer support
                  team with your product details and proof of purchase. Our team
                  will guide you through the process of obtaining repair or
                  replacement based on the warranty terms for offline purchases.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <p>
              For further information or to initiate a warranty claim, please
              contact us at{" "}
              <a href="mailto:support@rapidhub.com" className="text-primary">
                support@rapidhub.com
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default WarrantyInformation;
