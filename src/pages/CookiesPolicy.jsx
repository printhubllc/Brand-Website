import React from "react";
import { Navbar, SubNavBar, Footer } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookieBite,
  faLock,
  faChartLine,
  faCog,
  faBullseye,
  faExternalLinkAlt,
  faSyncAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const CookiesPolicy = () => {
  return (
    <>
      <Navbar />
      <SubNavBar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Cookies Policy</h1>

        <section className="mb-6">
          <h2 className="text-base font-bold flex items-center mb-3">
            <FontAwesomeIcon icon={faCookieBite} className="mr-2" />
            1. What Are Cookies?
          </h2>
          <p className="text-base text-gray-700">
            Cookies are small text files placed on your device (computer,
            smartphone, tablet) by websites you visit. They are used to make
            websites function more efficiently and provide reporting
            information. Cookies can be categorized based on their function and
            duration.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold flex items-center mb-3">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            2. Types of Cookies We Use
          </h2>

          <h3 className="text-base font-bold flex items-center mb-2">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            2.1. Essential Cookies
          </h3>
          <p className="text-base text-gray-700 mb-4">
            These cookies are necessary for the operation of our Site. They
            enable core functionalities such as secure logins and shopping cart
            functionality.
          </p>

          <h3 className="text-base font-bold flex items-center mb-2">
            <FontAwesomeIcon icon={faChartLine} className="mr-2" />
            2.2. Performance Cookies
          </h3>
          <p className="text-base text-gray-700 mb-4">
            Performance cookies collect information about how visitors use our
            Site, helping us improve its performance and usability.
          </p>

          <h3 className="text-base font-bold flex items-center mb-2">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            2.3. Functional Cookies
          </h3>
          <p className="text-base text-gray-700 mb-4">
            Functional cookies allow the Site to remember your preferences and
            provide personalized content tailored to your needs.
          </p>

          <h3 className="text-base font-bold flex items-center mb-2">
            <FontAwesomeIcon icon={faBullseye} className="mr-2" />
            2.4. Targeting/Advertising Cookies
          </h3>
          <p className="text-base text-gray-700">
            These cookies deliver advertisements relevant to your interests and
            help measure the effectiveness of advertising campaigns.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold flex items-center mb-3">
            <FontAwesomeIcon icon={faSyncAlt} className="mr-2" />
            3. How We Use Cookies
          </h2>
          <p className="text-base text-gray-700">
            We use cookies to enhance user experience, analyze site usage, and
            deliver targeted advertising.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold flex items-center mb-3">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
            4. Third-Party Cookies
          </h2>
          <p className="text-base text-gray-700">
            In addition to our own cookies, we may use cookies from third-party
            service providers for analytics, advertising, and other purposes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold flex items-center mb-3">
            <FontAwesomeIcon icon={faSyncAlt} className="mr-2" />
            5. Managing Cookies
          </h2>
          <p className="text-base text-gray-700">
            You can manage and control cookies through your browser settings.
            Most browsers allow you to block or delete cookies, or set
            preferences for handling them. Note that disabling cookies may
            impact the functionality of the Site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold flex items-center mb-3">
            <FontAwesomeIcon icon={faSyncAlt} className="mr-2" />
            6. Changes to This Policy
          </h2>
          <p className="text-base text-gray-700">
            We may update this Cookies Policy to reflect changes in technology,
            regulations, or practices. Revised policies will be posted with an
            updated effective date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold flex items-center mb-3">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            7. Contact Us
          </h2>
          <p className="text-base text-gray-700">
            For any questions regarding our use of cookies or this policy,
            please reach out to us:
          </p>
          <address className="mt-4 text-base text-gray-700">
            <strong>Rapid Hub</strong>
            <br />
            5678 Innovation Lane, Suite 300
            <br />
            San Jose, CA 95134
            <br />
            United States
            <br />
            Email:{" "}
            <a
              href="mailto:info@rapidhub.com"
              className="text-blue-500 hover:underline"
            >
              info@rapidhub.com
            </a>
          </address>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CookiesPolicy;
