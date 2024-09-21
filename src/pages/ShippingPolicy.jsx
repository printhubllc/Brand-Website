import React from "react";
import { Navbar, SubNavBar, Footer } from "../components";

const ShippingPolicy = () => {
  return (
    <>
      <Navbar /> <SubNavBar />
      <div
        className="shipping-policy"
        style={{ margin: "0 20px", padding: "20px" }}
      >
        <h1>Welcome to Activto Printer's Shipping Information</h1>
        <p>
          At Activto Printer, we aim to make your shopping experience smooth and
          straightforward. This guide explains our shipping practices for orders
          placed through rapidhub.online. By making a purchase, you agree to the
          following shipping terms.
        </p>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Shipping Options and Costs:</strong>
            <br />
            We provide various shipping choices to fit your needs. The selected
            method at checkout will influence the shipping cost and delivery
            timeframe.
          </p>
          <ul>
            <li>
              <strong>Standard Delivery:</strong> Typically takes 5-7 business
              days. Shipping fees are based on the delivery location and order
              size.
            </li>
            <li>
              <strong>Express Delivery:</strong> Generally delivers within 2-3
              business days. This option incurs higher charges compared to
              standard delivery.
            </li>
            <li>
              <strong>Next-Day Delivery:</strong> Available for orders placed
              before our cutoff time. Extra charges will apply for this
              expedited service.
            </li>
          </ul>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Order Processing Time:</strong>
            <br />
            We process orders within 1-2 business days. Orders made on weekends
            or holidays will be handled on the following business day.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Tracking Your Order:</strong>
            <br />
            After your order ships, you'll receive an email with a tracking
            number. Use this number to check the status of your shipment.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Handling Delivery Issues:</strong>
            <br />
            While we strive for prompt deliveries, we cannot control delays
            caused by shipping carriers or address errors. For any issues,
            please contact us immediately for assistance.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Shipping Restrictions:</strong>
            <br />
            We currently offer shipping only within the United States.
            International shipping is not available at this time.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Returns and Exchanges:</strong>
            <br />
            For details on returns and exchanges, please review our Return
            Policy available on our website.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Get in Touch:</strong>
            <br />
            If you have any questions about our shipping policy, don’t hesitate
            to contact us:
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

export default ShippingPolicy;
