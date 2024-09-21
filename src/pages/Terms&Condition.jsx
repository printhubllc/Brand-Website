import React from "react";
import { Navbar, SubNavBar, Footer } from "../components";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar /> <SubNavBar />
      <div
        className="terms-and-conditions"
        style={{ margin: "0 20px", padding: "20px" }}
      >
        <h1>Welcome to Activto Printer!</h1>
        <p>
          By using our website, rapidhub.online, and purchasing our products,
          you agree to the following terms and conditions. Please review them
          carefully. Your continued use of our Site signifies your acceptance of
          these terms.
        </p>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Understanding Our Terms:</strong>
            <br />
            By accessing our Site, you confirm that you have read and agree to
            our Terms and our Privacy Policy. If you do not agree, please do not
            use our Site.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Modifications to Terms:</strong>
            <br />
            We may update these Terms periodically. Changes will be posted on
            our Site, and your continued use after such updates will constitute
            acceptance of the new Terms.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Products and Services:</strong>
            <br />
            We strive for accuracy in our product listings, but we cannot
            guarantee that all information, including prices and descriptions,
            is always error-free. Availability of products and services is
            subject to change.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Orders and Payments:</strong>
            <br />
            Your order is confirmed only when we acknowledge it. We may cancel
            orders due to errors or issues with product availability. Payments
            are required at the time of purchase using the available methods,
            and you agree to provide accurate payment information.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Shipping and Delivery:</strong>
            <br />
            Shipping costs vary based on your selected method and location, and
            will be shown at checkout. Delivery times are estimates, and we are
            not responsible for delays beyond our control. Risk of loss
            transfers to you once the product is delivered.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Returns and Refunds:</strong>
            <br />
            For details on returns and refunds, please refer to our Refund
            Policy. Follow the provided instructions for returning items.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Intellectual Property:</strong>
            <br />
            All content on our Site is owned or licensed by Activto Printer and
            protected by intellectual property laws. You are granted a limited,
            non-exclusive, non-transferable license for personal use only.
            Commercial use requires prior written consent.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>User Responsibilities:</strong>
            <br />
            You agree not to engage in unlawful activities or misuse our Site.
            You are responsible for any content you submit and grant us a
            license to use it.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Liability Limitation:</strong>
            <br />
            Our Site and content are provided “as-is” without any warranties. We
            are not liable for any indirect or consequential damages arising
            from your use of our Site or products.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Indemnification:</strong>
            <br />
            You agree to indemnify Activto Printer and its affiliates against
            any claims or damages arising from your use of the Site or breach of
            these Terms.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Governing Law:</strong>
            <br />
            These Terms are governed by the laws of Florida. Any disputes will
            be resolved in the courts located in Miami-Dade County, Florida.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Contact Us:</strong>
            <br />
            For any questions or concerns about these Terms, please reach out to
            us at:
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

export default TermsAndConditions;
