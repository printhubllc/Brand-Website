import React from "react";
import { Navbar, Footer } from "../components";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-xl font-bold mb-4 text-center">WELCOME TO ACTIVTO PRINTER!</h1>
        <p className="text-sm text-gray-700 mb-4">
          By using our website, rapidhub.online, you agree to the following terms and conditions. Please review them carefully. Your continued use of our Site signifies your acceptance of these terms.
        </p>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Understanding Our Terms:</strong>
            <br />
            By accessing our Site, you confirm that you have read and agree to our Terms and our Privacy Policy. If you do not agree, please do not use our Site.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Modifications to Terms:</strong>
            <br />
            We may update these Terms periodically. Changes will be posted on our Site, and your continued use after such updates will constitute acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Services Provided:</strong>
            <br />
            Activto Printer focuses on offline sales of printers and does not offer online purchases or delivery services. Any troubleshooting tips provided on our Site are for general informational purposes only.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Information Accuracy:</strong>
            <br />
            We strive to ensure the accuracy of the information on our Site, but we cannot guarantee that all details are error-free. We reserve the right to modify or remove content without notice.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>User Responsibilities:</strong>
            <br />
            You agree not to engage in unlawful activities or misuse our Site. You are responsible for any content you submit and grant us a license to use it.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Liability Limitation:</strong>
            <br />
            Our Site and content are provided “as-is” without any warranties. We are not liable for any indirect or consequential damages arising from your use of our Site or services.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Indemnification:</strong>
            <br />
            You agree to indemnify Activto Printer and its affiliates against any claims or damages arising from your use of the Site or breach of these Terms.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Governing Law:</strong>
            <br />
            These Terms are governed by the laws of Florida. Any disputes will be resolved in the courts located in Miami-Dade County, Florida.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-sm text-gray-700">
            <strong>Contact Us:</strong>
            <br />
            For any questions or concerns about these Terms, please reach out to us at:
          </p>
          <address className="mt-4 text-sm text-gray-700">
            <strong>Activto Printer</strong>
            <br />
            5678 Innovation Lane, Suite 300
            <br />
            San Jose, CA 95134
            <br />
            United States
            <br />
            Email:{" "}
            <a href="mailto:info@activtoprinter.com" className="text-blue-500 hover:underline">
              info@activtoprinter.com
            </a>
          </address>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
