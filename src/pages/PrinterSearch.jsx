import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import { Footer, Navbar } from "../components";

const PrinterSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDownloadSection, setShowDownloadSection] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setShowDownloadSection(true);
    }
  };

  const handleDownloadClick = () => {
    setShowModal(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setShowModal(false);
    navigate("/printer/loading");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Container className="flex-grow-1 py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow">
              <Card.Body className="p-4">
                <h2 className="text-center mb-4 text-primary">Printer Driver Search</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4 position-relative">
                    <Form.Control
                      type="text"
                      placeholder="Enter your printer model"
                      value={searchTerm}
                      onChange={handleSearch}
                      className="form-control-lg pe-5"
                    />
                    <i className="fas fa-search position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
                  </Form.Group>
                  <Button type="submit" variant="primary" size="lg" className="w-100 mb-4">
                    Search for Driver
                  </Button>
                </Form>

                {showDownloadSection && (
                  <Card className="mt-4 border-primary">
                    <Card.Header className="bg-primary text-white">
                      <h5 className="mb-0">Driver Found</h5>
                    </Card.Header>
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col>
                          <p className="mb-0"><strong>Model:</strong> {searchTerm}</p>
                        </Col>
                        <Col xs="auto">
                          <Button
                            variant="outline-primary"
                            onClick={handleDownloadClick}
                            className="d-flex align-items-center"
                          >
                            <i className="fas fa-download me-2"></i>
                            Download Driver
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">Download Driver for {searchTerm}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitForm}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" placeholder="Enter your printer Model" value={searchTerm} readOnly />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit and Download
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
};

export default PrinterSearch;