import React from "react";
import { Navbar, SubNavBar, Footer } from "../components";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      {/* <SubNavBar /> */}
      <div className="contact-us" style={{ margin: "0 20px", padding: "20px" }}>
        <h2 className="text-xl font-semibold">
          Get in Touch
        </h2>
        <p className="text-sm text-gray-700">
          We are an independent printer seller, offering a wide range of printers
          and occasional troubleshooting tips. While we are not an authorized
          partner of any specific brand, we take pride in providing reliable
          products and services through our offline markets.
        </p>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">Our Location</h3>
          <p className="text-sm text-gray-600">
            <strong>Address:</strong>
            <br />
            5678 Innovation Lane, Suite 300
            <br />
            San Jose, CA 95134
            <br />
            United States
            <br />
          </p>
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
          <h3 className="text-lg font-medium">Support and Assistance</h3>
          <p className="text-sm text-gray-600">
            For any questions or troubleshooting tips, feel free to reach out. 
            Though we don’t provide official technical support, we are happy to
            offer general guidance and recommendations to help you with your printers.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">
            Sales and Business Opportunities
          </h3>
          <p className="text-sm text-gray-600">
            Interested in bulk purchases or specific product inquiries? 
            Our team is ready to assist you with personalized solutions for 
            your printer needs.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">Share Your Thoughts</h3>
          <p className="text-sm text-gray-600">
            Your feedback is valuable to us! Let us know how we can improve 
            our services or provide better products to meet your needs.
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
          We appreciate your interest and look forward to assisting you!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
