import React from "react";
import { Navbar, SubNavBar, Footer } from "../components";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      {/* <SubNavBar /> */}
      <div className="about" style={{ margin: "0 20px", padding: "20px" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Welcome to Activto Printer</h2>
        <p>
          At Activto Printer, we excel in delivering exceptional printing
          solutions designed to cater to various needs. As an authorized partner
          of HP, we are dedicated to providing top-quality HP printers, ink, and
          accessories that guarantee outstanding print results.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>Our Vision</h3>
        <p>
          Our vision is to provide unparalleled printing solutions while
          ensuring customer satisfaction remains at the forefront. We not only
          offer the latest innovations from HP but also deliver expert guidance
          to help you choose the perfect product for your needs. Whether you’re
          looking for reliable office equipment or high-quality home printers,
          our mission is to ensure a seamless and satisfying experience.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>Why Activto Printer Stands Out</h3>
        <ul>
          <li>
            <strong>Certified Partner:</strong> As an authorized partner of HP,
            we provide genuine HP products supported by robust warranty options.
          </li>
          <li>
            <strong>Expert Support:</strong> Our skilled team is here to assist
            you in selecting the right HP products and offering continuous
            support.
          </li>
          <li>
            <strong>Top-Notch Service:</strong> We prioritize customer
            satisfaction from the initial consultation to ongoing support,
            striving to deliver an exceptional experience.
          </li>
          <li>
            <strong>Commitment to Quality:</strong> We adhere to high standards
            to ensure that we offer only the best HP products, meeting your
            printing needs with reliability.
          </li>
        </ul>

        <h3 style={{ fontSize: "1.25rem" }}>Our Journey</h3>
        <p>
          Established with the goal of simplifying the printing process for
          businesses and individuals alike, Activto Printer has become a trusted
          name in the industry. Our commitment to quality and customer service
          has set us apart as a leader in HP printing solutions. We are
          continually expanding our offerings and services to stay ahead of
          technological advancements and better serve our customers.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>Get in Touch</h3>
        <p>
          We invite you to explore our website to learn more about our HP
          products and services. If you have any inquiries or need assistance,
          don’t hesitate to reach out to our dedicated customer service team.
        </p>
        <address style={{ marginTop: "20px", fontStyle: "normal" }}>
          Activto Printer
          {/* <br />
          5678 Innovation Lane, Suite 300
          <br />
          San Jose, CA 95134
          <br />
          United States
          <br /> */}
          Email:{" "}
          <a href="mailto:info@activtoprinter.com">info@activtoprinter.com</a>
        </address>

        <p style={{ marginTop: "20px" }}>
          Thank you for choosing Activto Printer. We are excited to assist you!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
