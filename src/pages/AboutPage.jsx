import React from "react";
import { Navbar, Footer } from "../components";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about" style={{ margin: "0 20px", padding: "20px" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Welcome to Activto Printer</h2>
        <p>
          At Activto Printer, we specialize in providing high-quality printers and practical troubleshooting tips. We are an independent seller, not affiliated with any major brands, but we offer top-quality printers and accessories from trusted manufacturers, along with our knowledge in printer selection and basic troubleshooting.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>Our Expertise</h3>
        <p>
          With years of experience in the printer industry, we offer:
        </p>
        <ul>
          <li>A diverse selection of printers from various brands</li>
          <li>Advice on selecting the right printer for your needs</li>
          <li>Guides and resources for common troubleshooting</li>
          <li>Tips to enhance your printer's performance</li>
        </ul>

        <h3 style={{ fontSize: "1.25rem" }}>Why Choose Activto Printer</h3>
        <ul>
          <li>
            <strong>Independent Perspective:</strong> We provide impartial advice and a range of printer options tailored to your specific requirements.
          </li>
          <li>
            <strong>Customer-Centric Approach:</strong> Your satisfaction is our priority, ensuring you receive great value from your printing investment.
          </li>
          <li>
            <strong>Comprehensive Knowledge:</strong> Our experience in printer sales allows us to address various printing needs effectively.
          </li>
          <li>
            <strong>Helpful Resources:</strong> We offer resources to assist with common printer issues and improve your experience.
          </li>
        </ul>

        <h3 style={{ fontSize: "1.25rem" }}>Our Services</h3>
        <p>
          At Activto Printer, we focus on delivering quality printers and useful resources. Our services include:
        </p>
        <ul>
          <li>Printer sales and recommendations</li>
          <li>Guidance on printer selection and setup</li>
          <li>General troubleshooting resources</li>
          <li>Maintenance tips for optimal printer performance</li>
        </ul>

        <h3 style={{ fontSize: "1.25rem" }}>Important Note</h3>
        <p>
          As an independent seller, we provide general information and basic troubleshooting resources. We are not associated with any major printer brands. For complex issues or brand-specific inquiries, please consult the support resources of your printer manufacturer.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>Get in Touch</h3>
        <p>
          If you need assistance selecting a printer or have questions about your purchase, we're here to help. Feel free to contact us.
        </p>
        <address style={{ marginTop: "20px", fontStyle: "normal" }}>
          Activto Printer
          <br />
          Email: <a href="mailto:info@activtoprinter.com">info@activtoprinter.com</a>
        </address>

        <p style={{ marginTop: "20px" }}>
          Thank you for considering Activto Printer. We look forward to supporting your printer needs!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
