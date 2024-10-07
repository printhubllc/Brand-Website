import React from "react";
import { Navbar, Footer } from "../components";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact-us" style={{ margin: "0 20px", padding: "20px" }}>
        <h2 className="text-xl font-semibold">
          Get in Touch with Activto Printer
        </h2>
        <p className="text-sm text-gray-700">
          We are an independent printer seller, offering a wide selection of printers from various brands. As an independent seller, we are not affiliated with or an authorized partner of any specific brand. We take pride in providing reliable products and services through our offline markets and online presence, along with general troubleshooting tips.
        </p>

        <section style={{ marginTop: "20px" }}>
          <p className="text-sm text-gray-600">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@activtoprinter.com"
              className="text-blue-600 hover:underline"
            >
              info@activtoprinter.com
            </a>
            <br />
            <strong>Phone:</strong> (408) 555-1234
            <br />
            <strong>Fax:</strong> (408) 555-5678
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">Operating Hours</h3>
          <p className="text-sm text-gray-600">
            We are available to assist you during the following hours:
            <br />
            Monday – Friday: 9:00 AM – 6:00 PM PST
            <br />
            Saturday: 10:00 AM – 4:00 PM PST
            <br />
            Sunday: Closed
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">Independent Sales and Support</h3>
          <p className="text-sm text-gray-600">
            As an independent seller, we offer a variety of printers and provide general guidance to help you with your printer selection and basic troubleshooting. For more complex issues or brand-specific questions, we recommend reaching out to the support resources of your printer's manufacturer.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">Sales and Business Opportunities</h3>
          <p className="text-sm text-gray-600">
            Interested in bulk purchases or specific product inquiries? Our team is here to assist you with personalized solutions for your printing needs.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">Share Your Thoughts</h3>
          <p className="text-sm text-gray-600">
            Your feedback is valuable! Let us know how we can improve our services or offer better products to meet your needs.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">Follow Us Online</h3>
          <p className="text-sm text-gray-600">
            Stay connected for updates on our product offerings and promotions:
          </p>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li>
              <a
                href="https://facebook.com/activtoprinter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/activtoprinter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/activtoprinter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>

        <p className="text-sm text-gray-700" style={{ marginTop: "20px" }}>
          Thank you for your interest in Activto Printer! We look forward to assisting you with our independent expertise in printer sales and troubleshooting tips.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
