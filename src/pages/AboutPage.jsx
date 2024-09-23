import React from "react";
import { Navbar, Footer } from "../components";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      {/* <SubNavBar /> */}
      <div className="about" style={{ margin: "0 20px", padding: "20px" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Welcome to Activto Printer</h2>
        <p>
          At Activto Printer, we specialize in offering reliable printers and
          providing practical troubleshooting tips to ensure smooth operations.
          While we’re an independent seller not affiliated with any major
          brands, we bring you top-quality printers and accessories from trusted
          manufacturers.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>Our Vision</h3>
        <p>
          Our vision is to deliver affordable and effective printing solutions
          that cater to both individual and business needs. Whether you need
          troubleshooting assistance or a dependable printer, we are dedicated
          to enhancing your printing experience.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>Why Activto Printer Stands Out</h3>
        <ul>
          <li>
            <strong>Independent Expertise:</strong> As an independent seller, we
            offer unbiased advice and a variety of printer options tailored to
            your needs.
          </li>
          <li>
            <strong>Personalized Support:</strong> Our team provides hands-on
            assistance with troubleshooting and selecting the right products for
            your setup.
          </li>
          <li>
            <strong>Market Experience:</strong> With years of experience in
            offline printer sales, we understand what works best for various
            environments, whether home or office.
          </li>
          <li>
            <strong>Commitment to Service:</strong> We prioritize customer
            satisfaction and ensure you get the best value from your printing
            investment.
          </li>
        </ul>

        <h3 style={{ fontSize: "1.25rem" }}>Our Journey</h3>
        <p>
          Starting from local offline markets, Activto Printer has grown through
          word-of-mouth and customer trust. Our dedication to providing
          excellent service has helped us build a strong reputation in the
          industry. We continue to offer quality products and tips to enhance
          your printer’s performance.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>Get in Touch</h3>
        <p>
          If you have any questions or need troubleshooting advice, don’t
          hesitate to reach out to us. We’re here to assist you with all your
          printing needs.
        </p>
        <address style={{ marginTop: "20px", fontStyle: "normal" }}>
          Activto Printer
          <br />
          5678 Innovation Lane, Suite 300
          <br />
          San Jose, CA 95134
          <br />
          United States
          <br />
          Email:{" "}
          <a href="mailto:info@activtoprinter.com">info@activtoprinter.com</a>
        </address>

        <p style={{ marginTop: "20px" }}>
          Thank you for choosing Activto Printer. We look forward to serving
          you!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
