import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faWifi,
  faDownload,
  faCog,
  faPrint,
  faExclamationTriangle,
  faInfoCircle,
  faLaptop,
  faMobileAlt,
  faPaperPlane,
  faTint,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/IMG1.jpg";
import img2 from "../assets/IMG2.jpg";
import img3 from "../assets/IMG3.jpg";
import img4 from "../assets/IMG4.jpg";
import img5 from "../assets/IMG5.jpg";
import img6 from "../assets/IMG6.jpg";
import img7 from "../assets/IMG7.jpg";
import img8 from "../assets/IMG8.jpg";
import img9 from "../assets/IMG9.jpg";
import img10 from "../assets/IMG10.jpg";
import img11 from "../assets/IMG11.jpg";
import img12 from "../assets/IMG12.jpg";
import img13 from "../assets/IMG13.jpg";

const PrinterSetupGuide = () => {
  const [selectedError, setSelectedError] = useState("");

  const errorOptions = [
    { value: "", label: "Select an issue" },
    { value: "fatal", label: "Fatal Error" },
    { value: "wifi", label: "How to connect with Wi-Fi" },
    { value: "device", label: "How to connect with laptop or smartphone" },
    { value: "quality", label: "Print quality issues" },
    { value: "paper", label: "Paper jams" },
    { value: "ink", label: "Ink cartridge problems" },
    { value: "other", label: "Other issues" },
  ];

  const renderErrorContent = () => {
    switch (selectedError) {
      case "fatal":
        return (
          <div className="alert alert-danger">
            <h4 className="alert-heading">Fatal Error Troubleshooting</h4>
            <ol>
              <li>
                <strong>
                  Turn off the printer and unplug it for 60 seconds.
                </strong>
                <p>
                  This action resets the printer’s internal system. Wait a full
                  minute to ensure a complete reset.
                </p>
              </li>
              <li>
                <strong>Plug the printer back in and power it on.</strong>
                <p>
                  This restarts the firmware and may clear temporary errors.
                </p>
              </li>
              <li>
                <strong>
                  Check for any error messages on the printer display.
                </strong>
                <p>
                  If there are error codes or messages, refer to the printer's
                  manual for guidance.
                </p>
              </li>
              <li>
                <strong>Ensure all cables are securely connected.</strong>
                <p>
                  Check that both power and data cables are firmly plugged in to
                  prevent connection issues.
                </p>
              </li>
            </ol>
          </div>
        );

      case "wifi":
        return (
          <div className="alert alert-info">
            <h4 className="alert-heading">Connecting to Wi-Fi</h4>
            <ol>
              <li>
                <strong>
                  Navigate to the Network settings on the control panel.
                </strong>
                <p>Use the printer's menu to locate the network options.</p>
              </li>
              <li>
                <strong>
                  Select "Wireless" and then "Wireless Setup Wizard".
                </strong>
                <p>
                  This will guide you through the process of connecting your
                  printer to a Wi-Fi network.
                </p>
              </li>
              <li>
                <strong>
                  Select your Wi-Fi network from the available list.
                </strong>
                <p>
                  Make sure to choose the correct network, especially if there
                  are multiple networks available.
                </p>
              </li>
              <li>
                <strong>Enter your Wi-Fi password accurately.</strong>
                <p>
                  Passwords are case-sensitive, so input it carefully using the
                  on-screen keyboard.
                </p>
              </li>
            </ol>
          </div>
        );

      case "device":
        return (
          <div className="alert alert-info">
            <h4 className="alert-heading">
              Connecting to Laptop or Smartphone
            </h4>
            <ol>
              <li>
                <strong>
                  Ensure both devices are connected to the same Wi-Fi network.
                </strong>
                <p>
                  Double-check that your printer and device are on the same
                  network to allow communication.
                </p>
              </li>
              <li>
                <strong>
                  For laptops: Install the printer software from the official
                  website.
                </strong>
                <p>
                  The installation will help your laptop communicate with the
                  printer.
                </p>
              </li>
              <li>
                <strong>
                  For smartphones: Download the printer’s mobile app.
                </strong>
                <p>
                  Find the printer's app in your app store and follow the setup
                  instructions to add the printer.
                </p>
              </li>
              <li>
                <strong>Test the connection by printing a test page.</strong>
                <p>
                  Make sure everything is working by printing a test document.
                </p>
              </li>
            </ol>
          </div>
        );

      case "quality":
        return (
          <div className="alert alert-warning">
            <h4 className="alert-heading">Print Quality Issues</h4>
            <ol>
              <li>
                <strong>Run a printer head cleaning cycle.</strong>
                <p>
                  This can clear clogged ink nozzles and improve print quality.
                </p>
              </li>
              <li>
                <strong>
                  Align the print heads using the alignment function.
                </strong>
                <p>Correct alignment ensures sharper prints.</p>
              </li>
              <li>
                <strong>Check that you’re using the correct paper type.</strong>
                <p>
                  Adjust printer settings to match the paper being used for
                  better results.
                </p>
              </li>
            </ol>
          </div>
        );

      case "paper":
        return (
          <div className="alert alert-warning">
            <h4 className="alert-heading">Paper Jams</h4>
            <ol>
              <li>
                <strong>Turn off the printer and unplug it.</strong>
                <p>This prevents any issues while addressing the jam.</p>
              </li>
              <li>
                <strong>Carefully remove any jammed paper.</strong>
                <p>
                  Open access doors and gently remove the paper to avoid
                  tearing.
                </p>
              </li>
              <li>
                <strong>
                  Check for small pieces of paper inside the paper path.
                </strong>
                <p>Even small pieces can cause repeated jams.</p>
              </li>
            </ol>
          </div>
        );

      case "ink":
        return (
          <div className="alert alert-warning">
            <h4 className="alert-heading">Ink Cartridge Issues</h4>
            <ol>
              <li>
                <strong>Ensure cartridges are properly installed.</strong>
                <p>Check that each cartridge is securely in place.</p>
              </li>
              <li>
                <strong>Clean the cartridge contacts.</strong>
                <p>
                  Use a clean cloth to wipe the contacts and remove any dust or
                  ink buildup.
                </p>
              </li>
              <li>
                <strong>Replace empty or faulty cartridges.</strong>
                <p>
                  Install new cartridges if necessary for better performance.
                </p>
              </li>
            </ol>
          </div>
        );

      case "other":
        return (
          <div className="alert alert-warning">
            <h4 className="alert-heading">Other Issues</h4>
            <p>
              If you encounter other issues, refer to the printer's manual for
              further guidance.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container my-5">
      <h1 className="display-4 mb-4 text-center">Setup Guide</h1>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">Common Issues</h2>
              <select
                className="form-select mb-3"
                value={selectedError}
                onChange={(e) => setSelectedError(e.target.value)}
              >
                {errorOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {renderErrorContent()}
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="me-2 text-info"
                />
                Detailed Printer Setup Process
              </h2>
              <ol className="card-text">
                {[
                  {
                    title: "Unboxing:",
                    description: `Carefully remove your printer from its packaging. Look for any tabs and tape used to secure moving parts during shipping. Remove all tape, protective films, and packing materials. For larger models, you may need to remove additional cardboard inserts.`,
                    imgSrc: img1,
                    imgAlt: "Unboxing the printer",
                  },
                  {
                    title: "Power Connection:",
                    description: `Locate the power cord that came with your printer. Connect one end to the back of the printer and the other end to a power outlet. Most printers have a clearly marked power input on the rear panel. Press the power button to turn on the printer.`,
                    imgSrc: img2,
                    imgAlt: "Connecting power to the printer",
                  },
                  {
                    title: "Install Ink Cartridges:",
                    description: `Open the ink cartridge access door, usually located on the front of the printer. Remove each cartridge from its packaging and remove the protective tape. Install each cartridge in its corresponding slot, which are typically color-coded for easy identification. Push each cartridge in until it clicks into place. Close the access door when finished.`,
                    imgSrc: img3,
                    imgAlt: "Installing ink cartridges",
                  },
                  {
                    title: "Load Paper:",
                    description: `Locate the paper tray on your printer. For most models, this is at the bottom front of the printer. Pull out the tray and adjust the paper guides to fit your paper size. Load a stack of paper with the print side down. Slide the tray back into the printer until it clicks into place.`,
                    imgSrc: img4,
                    imgAlt: "Loading paper into the printer",
                  },
                  {
                    title: "Software Installation:",
                    description: `Visit the manufacturer's support website and enter your printer model. Download the latest full feature driver for your operating system. Run the installer and follow the on-screen instructions. The installer will typically guide you through connecting your printer to your computer and network.`,
                    imgSrc: img5,
                    imgAlt: "Installing printer software",
                  },
                  {
                    title: "Network Connection:",
                    description: `For Wi-Fi: On your printer's control panel, navigate to the Network or Wireless settings. Select "Wireless Setup Wizard" and follow the prompts to connect to your Wi-Fi network. For wired connection: Connect an Ethernet cable from your router to the Ethernet port on the back of your printer.`,
                    imgSrc: img6,
                    imgAlt: "Connecting printer to network",
                  },
                  {
                    title: "Alignment:",
                    description: `Printers typically prompt you to align the print heads after initial setup. If not, you can initiate this from the printer's control panel. Go to Setup > Tools > Align Printer. The printer will print an alignment page and use its scanner to read the page and align itself automatically.`,
                    imgSrc: img7,
                    imgAlt: "Aligning printer heads",
                  },
                  {
                    title: "Test Print:",
                    description: `From your computer, open a document and select 'Print'. Choose your newly installed printer from the list of available printers. Click 'Print' to send a test page to your printer. Alternatively, you can print a test page directly from the printer's control panel by navigating to Reports > Print Quality Report.`,
                    imgSrc: img8,
                    imgAlt: "Printing a test page",
                  },
                ].map(({ title, description, imgSrc, imgAlt }, index) => (
                  <li key={index}>
                    <strong>{title}</strong>
                    <p>{description}</p>
                    <img src={imgSrc} alt={imgAlt} className="img-fluid mb-3" />
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon icon={faWifi} className="me-2 text-primary" />
                Printer Wi-Fi Connection Guide
              </h2>
              <ol className="card-text">
                {[
                  "On your printer's control panel, locate and tap the Wireless icon or go to Setup > Network.",
                  "Select 'Wireless Setup Wizard' from the menu.",
                  "The printer will scan for available networks. Choose your Wi-Fi network from the list.",
                  "When prompted, enter your Wi-Fi password using the printer's touch screen or keypad. Be careful to enter it correctly, including any uppercase or lowercase letters.",
                  "The printer will attempt to connect to your network. This may take a few minutes.",
                  "Once connected, you can print a Wireless Network Test report to verify the connection. Go to Setup > Reports > Network Configuration Page.",
                ].map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <img
                src={img9}
                alt="Printer Wi-Fi setup process"
                className="img-fluid mb-3"
              />
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon
                  icon={faLaptop}
                  className="me-2 text-success"
                />
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  className="me-2 text-success"
                />
                Connecting Printer to Devices
              </h2>

              <h3 className="h5">Laptop Connection:</h3>
              <ol className="card-text">
                {[
                  "Ensure your laptop and printer are on the same Wi-Fi network.",
                  "Visit the manufacturer's support website and download the full feature driver for your specific printer model.",
                  "Run the installer and follow the prompts. It will guide you through adding your printer.",
                  "When prompted, select your printer from the list of discovered devices.",
                  "Complete the setup and print a test page to confirm the connection.",
                ].map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <img
                src={img10}
                alt="Connecting printer to laptop"
                className="img-fluid mb-3"
              />

              <h3 className="h5">Smartphone Connection:</h3>
              <ol className="card-text">
                {[
                  "Download the printer's official app from your device's app store.",
                  "Open the app and tap the plus sign to add a printer.",
                  "The app will search for available printers on your network. Select your printer when it appears.",
                  "If prompted, enter any required PIN displayed on the printer's control panel.",
                  "Once connected, try printing a photo or document from your phone to test the connection.",
                ].map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <img
                src={img11}
                alt="Connecting printer to smartphone"
                className="img-fluid mb-3"
              />
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon icon={faTint} className="me-2 text-danger" />
                Ink Management Tips
              </h2>
              <ul className="card-text">
                {[
                  "Always use ink cartridges designed for your printer model to ensure the best print quality and reliability.",
                  "Store spare ink cartridges in their original sealed packages in a cool, dry place. Avoid direct sunlight and extreme temperatures.",
                  "When installing a new cartridge, gently shake it horizontally for about 10 seconds to ensure even ink distribution.",
                  "If you don't print often, run a cleaning cycle every few weeks. This can usually be done through the printer's maintenance menu.",
                  "For everyday documents, use the draft or economy mode in your print settings to conserve ink. Reserve high-quality settings for important documents or photos.",
                ].map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
              <img
                src={img12}
                alt="Ink cartridge management"
                className="img-fluid mb-3"
              />
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="me-2 text-warning"
                />
                Optimizing Print Quality
              </h2>
              <ol className="card-text">
                {[
                  "In your print dialog, always select the correct paper type that matches what you've loaded in the printer. This ensures the right amount of ink is used.",
                  "Regularly align your print heads. This can usually be done through the printer's maintenance menu.",
                  "If you notice streaking or missing colors, clean the print heads using the printer's built-in cleaning function.",
                  "For photos or important documents, use high-quality photo paper or premium presentation paper for best results.",
                  "Adjust color settings in your printer properties for specific needs. Many printers offer preset options for different types of documents.",
                ].map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <img
                src={img13}
                alt="Optimizing print quality"
                className="img-fluid mb-3"
              />
            </div>
          </div>

          <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Disclaimer</h4>
            <p className="mb-0">
              This guide is intended for informational purposes only and does
              not constitute formal support. I am an independent seller and am
              not affiliated with any printer manufacturers. For assistance with
              your printer, please refer to the support resources provided by
              your printer manufacturer. I make no guarantees regarding the
              accuracy of the information presented and assume no liability for
              any damages arising from its use. Please retain your proof of
              purchase for any applicable warranty claims with the manufacturer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinterSetupGuide;
