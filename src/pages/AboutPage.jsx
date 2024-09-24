import React from "react";
import { Navbar, Footer } from "../components";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about" style={{ margin: "0 20px", padding: "20px" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Welcome to Activto Printer</h2>
        <p>
          At Activto Printer, we are an independent printer seller specializing in offering reliable printers and
          providing practical troubleshooting tips. As an independent seller, we're not affiliated with any major brands, 
          but we bring you top-quality printers and accessories from trusted manufacturers, along with our expertise 
          in printer selection and basic troubleshooting.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>Our Expertise</h3>
        <p>
          With years of experience in the printer industry, we offer:
        </p>
        <ul>
          <li>A wide selection of printers from various brands</li>
          <li>Expert advice on choosing the right printer for your needs</li>
          <li>Basic troubleshooting guides and support</li>
          <li>Tips to optimize your printer's performance</li>
        </ul>

        <h3 style={{ fontSize: "1.25rem" }}>Why Choose Activto Printer</h3>
        <ul>
          <li>
            <strong>Independent Expertise:</strong> We offer unbiased advice and a variety of printer options tailored to
            your specific requirements.
          </li>
          <li>
            <strong>Customer-Focused Approach:</strong> We prioritize your satisfaction and ensure you get the best value
            from your printing investment.
          </li>
          <li>
            <strong>Extensive Knowledge:</strong> Our experience in printer sales allows us to
            understand and cater to diverse printing needs.
          </li>
          <li>
            <strong>Helpful Resources:</strong> We provide basic troubleshooting tips to assist with common printer issues.
          </li>
        </ul>

        <h3 style={{ fontSize: "1.25rem" }}>Our Services</h3>
        <p>
          At Activto Printer, we focus on providing quality printers and helpful resources. Our services include:
        </p>
        <ul>
          <li>Printer sales and recommendations</li>
          <li>Advice on printer selection and setup</li>
          <li>Basic troubleshooting guides</li>
          <li>Tips on printer maintenance and optimal use</li>
        </ul>

        <h3 style={{ fontSize: "1.25rem" }}>Important Note</h3>
        <p>
          As an independent seller, we provide general printer information and basic troubleshooting tips. We are not affiliated 
          with any major printer brands. For complex issues or brand-specific problems, please refer to the official support 
          website of your printer manufacturer.
        </p>

        <h3 style={{ fontSize: "1.25rem" }}>Get in Touch</h3>
        <p>
          Whether you need help choosing a printer or have a question about your purchase,
          we're here to help. Don't hesitate to reach out to us.
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
          Email: <a href="mailto:info@activtoprinter.com">info@activtoprinter.com</a>
        </address>

        <p style={{ marginTop: "20px" }}>
          Thank you for choosing Activto Printer. We look forward to assisting you with your printer needs!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
