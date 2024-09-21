import React from "react";
import { Navbar, SubNavBar, Footer } from "../components";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar /> 
      {/* <SubNavBar /> */}
      <div
        className="privacy-policy"
        style={{ margin: "0 20px", padding: "20px" }}
      >
        <h1 style={{ fontSize: "1rem", fontWeight: "bold" }}>
          Your Privacy Matters to Us
        </h1>

        <section style={{ marginTop: "20px" }}>
          <p>
            At Activto Printer, we prioritize the protection of your personal
            data. This Privacy Policy explains how we collect, use, and
            safeguard your information when you visit our website, make
            purchases, or use our services. By interacting with us, you consent
            to the practices described here.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            1. Information We Collect
          </h2>
          <p>
            We collect various types of information to improve your experience
            with us:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> When you create an account
              or make a purchase, we may collect details such as your name,
              email address, phone number, and shipping address.
            </li>
            <li>
              <strong>Payment Information:</strong> For processing transactions,
              we collect payment details, which are handled securely by our
              payment processors.
            </li>
            <li>
              <strong>Order Data:</strong> We track your orders to manage and
              fulfill them efficiently.
            </li>
            <li>
              <strong>Technical Information:</strong> Includes data like your IP
              address and browser type, collected automatically through our
              systems.
            </li>
          </ul>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            2. How We Use Your Information
          </h2>
          <p>We use your information for various purposes:</p>
          <ul>
            <li>
              <strong>Order Processing:</strong> To handle your orders,
              including payment and delivery.
            </li>
            <li>
              <strong>Account Management:</strong> To maintain and update your
              account details.
            </li>
            <li>
              <strong>Personalization:</strong> To customize your experience and
              recommend products based on your preferences.
            </li>
            <li>
              <strong>Communication:</strong> To provide order updates and send
              promotional offers if you have opted in.
            </li>
            <li>
              <strong>Security:</strong> To ensure the security of our site and
              prevent fraud.
            </li>
            <li>
              <strong>Analytics:</strong> To analyze site performance and
              improve user experience.
            </li>
          </ul>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            3. Sharing Your Information
          </h2>
          <p>
            We may share your information under the following circumstances:
          </p>
          <ul>
            <li>
              <strong>Third-Party Services:</strong> We may use third-party
              service providers to assist with certain functions, who are
              obligated to keep your information confidential.
            </li>
            <li>
              <strong>Legal Requirements:</strong> To comply with legal
              obligations or protect our legal rights.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of business
              transactions such as mergers or acquisitions.
            </li>
          </ul>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            4. Your Rights
          </h2>
          <p>You have several rights regarding your data:</p>
          <ul>
            <li>
              <strong>Access and Correction:</strong> You can access and update
              your information through your account or by contacting us.
            </li>
            <li>
              <strong>Opt-Out:</strong> You can opt-out of receiving promotional
              emails by following the instructions in those emails.
            </li>
            <li>
              <strong>Data Deletion:</strong> You can request the deletion of
              your data, subject to any legal requirements.
            </li>
          </ul>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            5. Data Protection
          </h2>
          <p>
            We employ various security measures to protect your data. However,
            no method of transmission over the internet is entirely secure.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            6. Cookies and Tracking
          </h2>
          <p>
            We use cookies to enhance your browsing experience and analyze site
            usage. You can manage your cookie preferences through your browser
            settings.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            7. Policy Updates
          </h2>
          <p>
            This Privacy Policy may be updated periodically. Any changes will be
            posted on our website, and continued use of the site signifies your
            acceptance of the revised policy.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
            8. Contact Us
          </h2>
          <p>
            If you have any questions about this policy or your personal data,
            please contact us at:
          </p>
          <address>
            <strong>Activto Printer</strong>
            <br />
            {/* 5678 Innovation Lane, Suite 300
            <br />
            San Jose, CA 95134
            <br />
            United States
            <br /> */}
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
