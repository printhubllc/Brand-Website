import React from "react";
import { Navbar, Footer } from "../components";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div
        className="privacy-policy"
        style={{ margin: "0 20px", padding: "20px" }}
      >
        <h1 style={{ fontSize: "1rem", fontWeight: "bold" }}>Privacy Policy</h1>

        <section style={{ marginTop: "20px" }}>
          <p>
            At <strong>Activto Printer</strong>, we are committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, and
            safeguard your personal information when you register our website. By using our website, you
            agree to the practices described in this policy.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            1. Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Such as your name, email
              address, and any information you provide when contacting us for
              troubleshooting.
            </li>
            <li>
              <strong>Technical Information:</strong> Includes details such as
              your IP address, browser type, and device used to access our
              website.
            </li>
          </ul>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            2. How We Use Your Information
          </h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>
              To provide troubleshooting tips and respond to your inquiries.
            </li>
            <li>To improve the functionality of our website and services.</li>
            <li>To comply with legal obligations or resolve disputes.</li>
          </ul>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            3. Sharing Your Information
          </h2>
          <p>
            We do not share your personal information with third parties, except
            in the following cases:
          </p>
          <ul>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information to comply with legal obligations or protect our
              rights.
            </li>
            <li>
              <strong>Service Providers:</strong> We may use third-party service
              providers to host our website or analyze its performance.
            </li>
          </ul>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            4. Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access, update, or correct your personal information.</li>
            <li>Request the deletion of your personal data.</li>
            <li>Opt-out of receiving promotional emails (if applicable).</li>
          </ul>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            5. Data Protection
          </h2>
          <p>
            We take appropriate security measures to protect your information.
            However, no method of transmission over the internet is entirely
            secure.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            6. Cookies and Tracking
          </h2>
          <p>
            We may use cookies to enhance your browsing experience and analyze
            site traffic. You can manage your cookie preferences through your
            browser settings.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            7. Policy Updates
          </h2>
          <p>
            This Privacy Policy may be updated periodically. We encourage you to
            review this page for any changes. Continued use of the website
            signifies your acceptance of the updated policy.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            8. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your personal information, please contact us at:
          </p>
          <address>
            <strong>Activto Printer</strong>
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
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
