import React from "react";
import { Navbar, SubNavBar, Footer } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUserShield,
  faDatabase,
  faInfoCircle,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const GDPRCompliance = () => {
  return (
    <>
      <Navbar />
      <SubNavBar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-center">GDPR Compliance</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold flex items-center mb-3">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            1. Introduction
          </h2>
          <p className="text-base text-gray-700">
            At Rapid Hub, we are committed to ensuring the privacy and
            protection of your personal data. This GDPR Compliance page explains
            how we collect, use, and protect your data in accordance with the
            General Data Protection Regulation (GDPR).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold flex items-center mb-3">
            <FontAwesomeIcon icon={faUserShield} className="mr-2" />
            2. Data Collection
          </h2>
          <p className="text-base text-gray-700">
            We collect personal data that you voluntarily provide to us, such as
            your name, email address, and contact details when you use our
            services or interact with our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold flex items-center mb-3">
            <FontAwesomeIcon icon={faDatabase} className="mr-2" />
            3. Data Usage
          </h2>
          <p className="text-base text-gray-700">
            The data we collect is used to provide and improve our services,
            communicate with you, and fulfill legal obligations. We ensure that
            your data is handled securely and only for the purposes stated.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold flex items-center mb-3">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            4. Your Rights
          </h2>
          <p className="text-base text-gray-700">
            Under GDPR, you have the right to access, correct, or delete your
            personal data. You also have the right to restrict or object to
            certain processing activities and to data portability.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold flex items-center mb-3">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            5. Contact Us
          </h2>
          <p className="text-base text-gray-700">
            If you have any questions or concerns regarding our GDPR compliance
            or your personal data, please contact us:
          </p>
          <address className="mt-4 text-base text-gray-700">
            <strong>Rapid Hub</strong>
            <br />
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

export default GDPRCompliance;
