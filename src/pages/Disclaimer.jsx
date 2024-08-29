import React from "react";
import { Navbar, SubNavBar, Footer } from "../components";
import { Container, Row, Col } from "react-bootstrap";

const Disclaimer = () => {
  return (
    <>
      <Navbar />
      <SubNavBar />
      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <h1 className="display-4 mb-4 text-center">Website Disclaimer</h1>
            <p className="lead text-center">
              The information provided on this website (“the Site”) is intended
              for general informational purposes only. By accessing and using
              the Site, you agree to the following terms:
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <section className="mb-4">
              <h2>No Warranty</h2>
              <h3>1.1. Information Accuracy:</h3>
              <p>
                The content on the Site, including product descriptions,
                pricing, and availability, is presented “as is” and “as
                available.” While we make efforts to ensure accuracy, no
                guarantees are made regarding the completeness, reliability, or
                timeliness of the content provided.
              </p>
              <h3>1.2. Availability:</h3>
              <p>
                We cannot guarantee uninterrupted access to the Site. The Site
                may experience downtime or errors, and we do not ensure it will
                always be available without interruptions.
              </p>
            </section>

            <section className="mb-4">
              <h2>Limitation of Liability</h2>
              <h3>2.1. Damages:</h3>
              <p>
                To the maximum extent permitted by law, we, along with our
                affiliates, employees, and partners, are not responsible for any
                direct or indirect damages arising from the use of the Site.
                This includes, but is not limited to, loss of profits, data, or
                disruptions in service.
              </p>
              <h3>2.2. External Links:</h3>
              <p>
                The Site may contain links to third-party websites for
                convenience. We do not endorse these websites and are not
                responsible for any content, accuracy, or issues arising from
                your use of those sites.
              </p>
            </section>

            <section className="mb-4">
              <h2>User Responsibility</h2>
              <h3>3.1. Product Use:</h3>
              <p>
                You are responsible for ensuring that any products purchased
                from the Site meet your specific needs and are used in
                accordance with the manufacturer’s guidelines. We are not liable
                for any misuse of the products or failure to follow
                instructions.
              </p>
              <h3>3.2. Legal Compliance:</h3>
              <p>
                Users are required to comply with all applicable laws and
                regulations in connection with their use of the Site and any
                products purchased through it.
              </p>
            </section>

            <section className="mb-4">
              <h2>Changes to Information</h2>
              <p>
                We reserve the right to update and modify the content on the
                Site, including this Disclaimer, at any time. Any changes will
                become effective immediately upon posting on this page.
              </p>
            </section>

            <section className="mb-4">
              <h2>No Professional Advice</h2>
              <p>
                The content provided on the Site is not intended to constitute
                professional advice. If you need specific advice, please seek
                the assistance of a qualified professional.
              </p>
            </section>

            <section className="mb-4">
              <h2>Governing Law</h2>
              <p>
                This Disclaimer is governed by the laws of the relevant
                jurisdiction, and any disputes arising in connection with this
                Disclaimer or the use of the Site will be subject to the courts
                of that jurisdiction.
              </p>
            </section>

            <section className="mb-4">
              <h2>Contact Information</h2>
              <p>
                If you have any questions regarding this Disclaimer, please
                contact us:
              </p>
              <address>
                <strong>Rapid Hub</strong>
                <br />
            5678 Innovation Lane, Suite 300
            <br />
            San Jose, CA 95134
            <br />
            United States
            <br />
                Email: <a href="mailto:info@rapidhub.com">info@rapidhub.com</a>
              </address>
            </section>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Disclaimer;
