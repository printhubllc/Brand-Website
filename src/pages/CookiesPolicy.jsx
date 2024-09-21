import React from "react";
import { Navbar, SubNavBar, Footer } from "../components";

const CookiesPolicy = () => {
  return (
    <>
      <Navbar />
      {/* <SubNavBar /> */}
      <div
        className="container mx-auto px-4 py-6"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <h1
          className="text-xl font-bold mb-6 text-center"
          style={{ fontWeight: 700 }}
        >
          Cookies Policy
        </h1>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              1. What Are Cookies?{" "}
            </span>
            Cookies are small text files placed on your device (computer,
            smartphone, tablet) by websites you visit. They are used to make
            websites function more efficiently and provide reporting
            information. Cookies can be categorized based on their function and
            duration.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              2. Types of Cookies We Use{" "}
            </span>
          </p>

          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              2.1. Essential Cookies:{" "}
            </span>
            These cookies are necessary for the operation of our Site. They
            enable core functionalities such as secure logins and shopping cart
            functionality.
          </p>

          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              2.2. Performance Cookies:{" "}
            </span>
            Performance cookies collect information about how visitors use our
            Site, helping us improve its performance and usability.
          </p>

          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              2.3. Functional Cookies:{" "}
            </span>
            Functional cookies allow the Site to remember your preferences and
            provide personalized content tailored to your needs.
          </p>

          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              2.4. Targeting/Advertising Cookies:{" "}
            </span>
            These cookies deliver advertisements relevant to your interests and
            help measure the effectiveness of advertising campaigns.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              3. How We Use Cookies:{" "}
            </span>
            We use cookies to enhance user experience, analyze site usage, and
            deliver targeted advertising.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              4. Third-Party Cookies:{" "}
            </span>
            In addition to our own cookies, we may use cookies from third-party
            service providers for analytics, advertising, and other purposes.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              5. Managing Cookies:{" "}
            </span>
            You can manage and control cookies through your browser settings.
            Most browsers allow you to block or delete cookies, or set
            preferences for handling them. Note that disabling cookies may
            impact the functionality of the Site.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              6. Changes to This Policy:{" "}
            </span>
            We may update this Cookies Policy to reflect changes in technology,
            regulations, or practices. Revised policies will be posted with an
            updated effective date.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-base text-gray-700" style={{ lineHeight: "1.8" }}>
            <span className="font-bold" style={{ fontWeight: 700 }}>
              7. Contact Us:{" "}
            </span>
            For any questions regarding our use of cookies or this policy,
            please reach out to us:
          </p>
          <address className="mt-4 text-base text-gray-700">
            <strong>Activto Printer</strong>
            {/* <br />
            5678 Innovation Lane, Suite 300
            <br />
            San Jose, CA 95134
            <br />
            United States
            <br /> */}
            Email:{" "}
            <a
              href="mailto:info@activtoprinter.com"
              className="text-blue-500 hover:underline"
            >
              info@activtoprinter.com
            </a>
          </address>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CookiesPolicy;
