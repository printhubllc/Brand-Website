import React from "react";
import { Navbar, SubNavBar, Footer } from "../components";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <SubNavBar />
      <div className="contact-us" style={{ margin: "0 20px", padding: "20px" }}>
        <h2 className="text-xl font-semibold">Get in Touch with Rapid Hub</h2>
        <p className="text-sm text-gray-700">
          We are here to assist you with any inquiries, concerns, or feedback
          regarding our products and services. Our dedicated team is ready to
          offer support and ensure your satisfaction.
        </p>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">Our Location</h3>
          <p className="text-sm text-gray-600">
            <strong>Address:</strong>
            <br />
            Rapid Hub
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
              href="mailto:info@rapidhub.com"
              className="text-blue-600 hover:underline"
            >
              info@rapidhub.com
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
            For any general questions or help with orders, please contact us via
            email or phone. Our team is here to provide the support you need.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">
            Sales and Business Opportunities
          </h3>
          <p className="text-sm text-gray-600">
            If you are interested in bulk purchases or have specific product
            inquiries, our sales team is ready to assist you with tailored
            information and solutions.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">Share Your Thoughts</h3>
          <p className="text-sm text-gray-600">
            We value your feedback as it helps us improve our services. Please
            let us know your thoughts or suggestions to help us serve you
            better.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h3 className="text-lg font-medium">Follow Us Online</h3>
          <p className="text-sm text-gray-600">
            Stay updated with our latest news and promotions by connecting with
            us on social media:
          </p>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li>
              <a
                href="https://facebook.com/rapidhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/rapidhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/rapidhub"
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
          We appreciate your interest in Rapid Hub and look forward to assisting
          you!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
