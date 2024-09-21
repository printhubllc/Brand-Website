import React, { useEffect, useState } from "react";
import AnotherComponent from "./Printer-Error";
import { Link } from "react-router-dom";

const Loading = () => {
  const [show, setShow] = useState(false);
  const [renderAnotherComponent, setRenderAnotherComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 3000);

    const renderTimeout = setTimeout(() => {
      setRenderAnotherComponent(true);
    }, 20000);

    // Trigger Google Ads Conversion on Component Mount
    const gtag = window.gtag || function () {};
    gtag('event', 'conversion', {
      'send_to': 'AW-16707576867/2LWyCNS469QZEKPI5Z4-',
      'value': 10.0,
      'currency': 'INR'
    });

    return () => {
      clearTimeout(timeout);
      clearTimeout(renderTimeout);
    };
  }, []);

  if (renderAnotherComponent) {
    return <AnotherComponent />;
  }

  return (
    <div>
      <html country="GB" lang="en" dir="ltr">
        <head>
          {/* CSS links */}
          <link
            media="screen"
            rel="stylesheet"
            href="https://123.hp.com/resources/assets/css/page/123fontstyles.css"
          />
          <link
            media="screen"
            rel="stylesheet"
            href="https://123.hp.com/resources/assets/dist/application.min.css"
          />
          <link
            rel="stylesheet"
            href="https://123.hp.com/resources/assets/css/vendor/jquery.typeahead.min.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://123.hp.com/resources/assets/css/page/flex-design.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://123.hp.com/resources/assets/css/page/desktop-app-store.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://123.hp.com/resources/assets/css/page/swls-delay.css"
            type="text/css"
          />
        </head>
        <body>
          <div className="header-123" id="header-123">
            <div className="header-container">
              <div className="hp-logo">
                <a href="/gb/en/">
                  <img src="https://123.hp.com/resources/assets/img/hp-logo.svg" />
                </a>
              </div>
              <ul className="header-menu">
                <li>
                  <Link to="/setup-guide">OfficeJet</Link>
                </li>
                <li>
                  <Link to="/setup-guide">DeskJet</Link>
                </li>
                <li>
                  <Link to="/setup-guide">ENVY</Link>
                </li>
                <li>
                  <Link to="/setup-guide">LaserJet</Link>
                </li>
              </ul>
            </div>
          </div>

          <main className="vertical">
            <center>
              <br />
              <br />
              <img
                src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
                width="200px"
              />
              <h3 className=" text-xl">Please Wait, Installation in Progress!</h3>
              <h2 className=" text-xl">Download Printer Setup/Drivers</h2>
              <br />
              {show && (
                <h3 className=" text-xl" id="show" style={{ color: "green" }}>
                  SERVER CONNECTED
                </h3>
              )}
            </center>
          </main>
          <footer className="footer" id="footer"></footer>
        </body>
      </html>
    </div>
  );
};

export default Loading;
