import React from "react";
import { Navbar, SubNavBar, Footer } from "../components";

const RefundPolicy = () => {
  return (
    <>
      <Navbar /> 
      {/* <SubNavBar />{" "} */}
      <div
        className="refund-policy"
        style={{ margin: "0 20px", padding: "20px" }}
      >
        <h1>Activto Printer's Refund Guidelines</h1>
        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Eligibility for Refunds:</strong>
            <br />
            To qualify for a refund, please ensure the following criteria are
            met:
          </p>
          <ul>
            <li>
              <strong>Time Limit:</strong> Refund requests must be submitted
              within 30 days from your purchase date.
            </li>
            <li>
              <strong>Item Condition:</strong> The product must be unused and in
              its original, unopened packaging.
            </li>
            <li>
              <strong>Purchase Proof:</strong> A valid receipt or proof of
              purchase is necessary for processing refunds.
            </li>
          </ul>
        </section>
        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Items Not Eligible for Refunds:</strong>
            <br />
            Please note the following items cannot be returned or refunded:
          </p>
          <ul>
            <li>Customized Products</li>
            <li>Consumables (e.g., ink cartridges, toner)</li>
            <li>Digital Goods (e.g., software, licenses)</li>
          </ul>
        </section>
        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Steps to Request a Refund:</strong>
            <br />
            To process a return, follow these instructions:
          </p>
          <ol>
            <li>
              <strong>Contact Us:</strong> Email{" "}
              <a href="mailto:info@activtoprinter.com">
                info@activtoprinter.com
              </a>{" "}
              with your order number and reason for the return.
            </li>
            <li>
              <strong>Return Authorization:</strong> We will issue a Return
              Authorization (RA) number and provide detailed return
              instructions.
            </li>
            <li>
              <strong>Return Shipment:</strong> Securely package the item with
              its original receipt and the RA number. You are responsible for
              the cost of return shipping.
            </li>
          </ol>
        </section>
        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Processing Refunds:</strong>
            <br />
            After receiving and inspecting the returned item, we will process
            your refund within 5-7 business days. Please allow additional time
            for your bank to complete the refund process.
          </p>
        </section>
        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Exchanges:</strong>
            <br />
            We do not facilitate direct exchanges. To exchange a product, please
            follow the return process and place a new order for the desired
            item.
          </p>
        </section>
        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Defective or Incorrect Items:</strong>
            <br />
            If you receive a defective or incorrect item, contact us immediately
            at{" "}
            <a href="mailto:info@activtoprinter.com">info@activtoprinter.com</a>
            . We will arrange for a replacement or issue a refund at no extra
            charge.
          </p>
        </section>
        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Contact Information:</strong>
            <br />
            For any questions or concerns regarding our refund policy, please
            reach out to us:
          </p>
          <address>
            <strong>Activto Printer</strong>
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
        </section>
        Email: info@activtoprinter.com
        <section style={{ marginTop: "20px" }}>
          <p>
            <strong>Policy Updates:</strong>
            <br />
            We may update this refund policy from time to time. Changes will be
            posted on our website and will be effective for all purchases made
            after the update date.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
