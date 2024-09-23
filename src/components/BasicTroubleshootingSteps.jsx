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
                <strong>Turn off the printer and unplug it for 60 seconds.</strong>
                <p>This helps reset the printer's internal system. Make sure to wait a full minute to allow all capacitors to discharge.</p>
              </li>
              <li>
                <strong>Plug the printer back in and turn it on.</strong>
                <p>Reconnecting power allows the printer to restart its firmware, which may resolve temporary glitches.</p>
              </li>
              <li>
                <strong>Check for any error messages on the printer display.</strong>
                <p>Take note of any specific error codes or messages. Refer to the printer's manual for troubleshooting steps related to those codes.</p>
              </li>
              <li>
                <strong>Ensure all cables are securely connected.</strong>
                <p>Inspect both the power and data cables. Loose connections can cause communication failures.</p>
              </li>
              <li>
                <strong>If the error persists, contact our support team.</strong>
                <p>Have your printer model and error code ready for quicker assistance.</p>
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
                  <strong>Download the HP Smart app.</strong>
                  <p>Visit your device's app store and download the HP Smart app, which simplifies the setup and management of your printer.</p>
                </li>
                <li>
                  <strong>On the printer control panel, go to the Network settings.</strong>
                  <p>Use the arrow keys to navigate through the settings menu until you find the Network option.</p>
                </li>
                <li>
                  <strong>Select "Wireless" and then "Wireless Setup Wizard".</strong>
                  <p>This will guide you through connecting your printer to Wi-Fi.</p>
                </li>
                <li>
                  <strong>Choose your Wi-Fi network from the list.</strong>
                  <p>Ensure you select the correct network, especially if you have multiple networks in your home or office.</p>
                </li>
                <li>
                  <strong>Enter your Wi-Fi password when prompted.</strong>
                  <p>Use the on-screen keyboard to enter the password accurately. Remember that passwords are case-sensitive.</p>
                </li>
                <li>
                  <strong>Wait for the printer to connect to the network.</strong>
                  <p>This may take a few moments. A successful connection will typically be indicated by a confirmation message on the screen.</p>
                </li>
              </ol>
            </div>
          );
        
  
      case "device":
        return (
          <div className="alert alert-info">
            <h4 className="alert-heading">Connecting to Laptop or Smartphone</h4>
            <ol>
              <li>
                <strong>Ensure your device and printer are on the same Wi-Fi network.</strong>
                <p>Verify that both devices are connected to the same network to facilitate communication.</p>
              </li>
              <li>
                <strong>For laptops: Install the printer software from our website.</strong>
                <p>This software enables your laptop to recognize and communicate with the printer. Follow the installation instructions carefully.</p>
              </li>
              <li>
                <strong>For smartphones: Download the printer app from your app store.</strong>
                <p>Search for the official app associated with your printer brand, and ensure you download the correct version for your device.</p>
              </li>
              <li>
                <strong>Follow the on-screen instructions to add the printer.</strong>
                <p>The app will guide you through the process, which may include selecting the printer and confirming the connection.</p>
              </li>
              <li>
                <strong>Test the connection by printing a test page.</strong>
                <p>This ensures that the setup was successful and that the printer is functioning correctly.</p>
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
                <strong>Run a printer head cleaning cycle from the maintenance menu.</strong>
                <p>This can help clear any blockages in the ink nozzles, which may improve print quality.</p>
              </li>
              <li>
                <strong>Align the print heads using the printer's alignment function.</strong>
                <p>This ensures that the print heads are positioned correctly for optimal printing.</p>
              </li>
              <li>
                <strong>Check if you're using the correct paper type in the settings.</strong>
                <p>Using the correct paper type can greatly affect print quality. Ensure the printer settings match the paper you are using.</p>
              </li>
              <li>
                <strong>Ensure you're using genuine ink cartridges.</strong>
                <p>Compatible or refilled cartridges may not perform as well. Always opt for manufacturer-recommended cartridges.</p>
              </li>
              <li>
                <strong>If issues persist, consider replacing the ink cartridges.</strong>
                <p>Old or empty cartridges can lead to faded or incomplete prints. Installing new cartridges may resolve the problem.</p>
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
                <p>This prevents any potential damage or further issues while you address the jam.</p>
              </li>
              <li>
                <strong>Open all doors and carefully remove any visible jammed paper.</strong>
                <p>Be gentle to avoid tearing the paper, which can leave behind pieces that might cause more jams.</p>
              </li>
              <li>
                <strong>Check the paper path for any torn pieces of paper.</strong>
                <p>Even small bits of paper can lead to recurring jams, so make sure to clear everything out.</p>
              </li>
              <li>
                <strong>Ensure the paper tray is not overfilled and paper is aligned correctly.</strong>
                <p>Overfilling can cause jams. Always follow the manufacturer's recommendations for loading paper.</p>
              </li>
              <li>
                <strong>Plug in the printer, turn it on, and try printing again.</strong>
                <p>After resolving the jam, it's a good idea to print a test page to confirm everything is working properly.</p>
              </li>
            </ol>
          </div>
        );
  
      case "ink":
        return (
          <div className="alert alert-warning">
            <h4 className="alert-heading">Ink Cartridge Problems</h4>
            <ol>
              <li>
                <strong>Check if the ink cartridges are properly installed.</strong>
                <p>Open the cartridge access door and ensure each cartridge is securely clicked into place.</p>
              </li>
              <li>
                <strong>Clean the cartridge contacts with a lint-free cloth.</strong>
                <p>Dust or ink buildup on the contacts can hinder communication between the cartridge and printer.</p>
              </li>
              <li>
                <strong>Run a nozzle check to see if any colors are missing.</strong>
                <p>This test prints a pattern to identify any clogged nozzles that may require cleaning.</p>
              </li>
              <li>
                <strong>Replace empty or faulty cartridges with new ones.</strong>
                <p>Always use genuine cartridges recommended for your printer model to avoid compatibility issues.</p>
              </li>
              <li>
                <strong>Ensure you're using compatible cartridges for your printer model.</strong>
                <p>Using non-compatible cartridges can lead to various printing issues, so always check the specifications.</p>
              </li>
            </ol>
          </div>
        );
  
      case "other":
        return (
          <div className="alert alert-warning">
            <h4 className="alert-heading">Other Issues</h4>
            <p>
              For other issues not listed here, please consult the printer's manual or contact our support team for personalized assistance. Be sure to provide details about your problem, including model number and any error codes.
            </p>
          </div>
        );
  
      default:
        return null;
    }
  };
  

  return (
    <div className="container my-5">
      <h1 className="display-4 mb-4 text-center">
        Comprehensive HP Printer Setup and Troubleshooting Guide
      </h1>

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
                {errorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
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
                Detailed HP Printer Setup Process
              </h2>
              <ol className="card-text">
                <li>
                  <strong>Unboxing:</strong>
                  <p>
                    Carefully remove your HP printer from its packaging. Look
                    for the orange tabs and tape, which are typically used to
                    secure moving parts during shipping. Remove all tape,
                    protective films, and packing materials. For larger HP
                    OfficeJet Pro models, you may need to remove additional
                    cardboard inserts.
                  </p>
                  <img
                    src={img1}
                    alt="Unboxing the HP printer"
                    className="img-fluid mb-3"
                  />
                </li>
                <li>
                  <strong>Power Connection:</strong>
                  <p>
                    Locate the power cord that came with your HP printer.
                    Connect one end to the back of the printer and the other end
                    to a power outlet. Most HP printers have a clearly marked
                    power input on the rear panel. Press the power button,
                    usually marked with the standard power symbol, to turn on
                    the printer.
                  </p>
                  <img
                    src={img2}
                    alt="Connecting power to the HP printer"
                    className="img-fluid mb-3"
                  />
                </li>
                <li>
                  <strong>Install Ink Cartridges:</strong>
                  <p>
                    For HP printers, open the ink cartridge access door. This is
                    usually located on the front of the printer and may have a
                    small indent for easy opening. Remove each ink cartridge
                    from its packaging and remove the protective tape. Install
                    each cartridge in its corresponding slot - they are usually
                    color-coded for easy identification. Push each cartridge in
                    until it clicks into place. Close the access door when
                    finished.
                  </p>
                  <img
                    src={img3}
                    alt="Installing ink cartridges in HP printer"
                    className="img-fluid mb-3"
                  />
                </li>
                <li>
                  <strong>Load Paper:</strong>
                  <p>
                    Locate the paper tray on your HP printer. For most models,
                    this is at the bottom front of the printer. Pull out the
                    tray and adjust the paper guides to fit your paper size.
                    Load a stack of paper (usually up to 250 sheets for standard
                    HP printers) with the print side down. Slide the tray back
                    into the printer until it clicks into place.
                  </p>
                  <img
                    src={img4}
                    alt="Loading paper into the HP printer"
                    className="img-fluid mb-3"
                  />
                </li>
                <li>
                  <strong>Software Installation:</strong>
                  <p>
                    Visit the HP Support website
                    (https://support.hp.com/us-en/drivers) and enter your
                    printer model. Download the latest full feature driver for
                    your operating system. Run the installer and follow the
                    on-screen instructions. The HP installer will typically
                    guide you through connecting your printer to your computer
                    and network.
                  </p>
                  <img
                    src={img5}
                    alt="Installing HP printer software"
                    className="img-fluid mb-3"
                  />
                </li>
                <li>
                  <strong>Network Connection:</strong>
                  <p>
                    For Wi-Fi: On your HP printer's control panel, navigate to
                    the Network or Wireless settings. Select "Wireless Setup
                    Wizard" and follow the prompts to connect to your Wi-Fi
                    network. For wired connection: Connect an Ethernet cable
                    from your router to the Ethernet port on the back of your HP
                    printer.
                  </p>
                  <img
                    src={img6}
                    alt="Connecting HP printer to network"
                    className="img-fluid mb-3"
                  />
                </li>
                <li>
                  <strong>Alignment:</strong>
                  <p>
                    HP printers typically prompt you to align the print heads
                    after initial setup. If not, you can initiate this from the
                    printer's control panel. Go to Setup {">"} Tools {">"} Align
                    Printer. The printer will print an alignment page and use
                    its scanner to read the page and align itself automatically.
                  </p>
                  <img
                    src={img7}
                    alt="Aligning HP printer heads"
                    className="img-fluid mb-3"
                  />
                </li>
                <li>
                  <strong>Test Print:</strong>
                  <p>
                    From your computer, open a document and select 'Print'.
                    Choose your newly installed HP printer from the list of
                    available printers. Click 'Print' to send a test page to
                    your printer. Alternatively, you can print a test page
                    directly from the printer's control panel by navigating to
                    Reports {">"} Print Quality Report.
                  </p>
                  <img
                    src={img8}
                    alt="Printing a test page on HP printer"
                    className="img-fluid mb-3"
                  />
                </li>
              </ol>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon icon={faWifi} className="me-2 text-primary" />
                HP Printer Wi-Fi Connection Guide
              </h2>
              <ol className="card-text">
                <li>
                  On your HP printer's control panel, locate and tap the
                  Wireless icon or go to Setup {">"} Network.
                </li>
                <li>Select "Wireless Setup Wizard" from the menu.</li>
                <li>
                  The printer will scan for available networks. Choose your
                  Wi-Fi network from the list.
                </li>
                <li>
                  When prompted, enter your Wi-Fi password using the printer's
                  touch screen or keypad. Be careful to enter it correctly,
                  including any uppercase or lowercase letters.
                </li>
                <li>
                  The printer will attempt to connect to your network. This may
                  take a few minutes.
                </li>
                <li>
                  Once connected, you can print a Wireless Network Test report
                  to verify the connection. Go to Setup {">"} Reports {">"}{" "}
                  Network Configuration Page.
                </li>
              </ol>
              <img
                src={img9}
                alt="HP printer Wi-Fi setup process"
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
                Connecting HP Printer to Devices
              </h2>
              <h3 className="h5">Laptop Connection:</h3>
              <ol className="card-text">
                <li>
                  Ensure your laptop and HP printer are on the same Wi-Fi
                  network.
                </li>
                <li>
                  Go to hp.com/support and download the full feature driver for
                  your specific HP printer model.
                </li>
                <li>
                  Run the installer and follow the prompts. It will guide you
                  through adding your printer.
                </li>
                <li>
                  When prompted, select your HP printer from the list of
                  discovered devices.
                </li>
                <li>
                  Complete the setup and print a test page to confirm the
                  connection.
                </li>
              </ol>
              <img
                src={img10}
                alt="Connecting HP printer to laptop"
                className="img-fluid mb-3"
              />

              <h3 className="h5">Smartphone Connection:</h3>
              <ol className="card-text">
                <li>
                  Download the HP Smart app from your device's app store (iOS or
                  Android).
                </li>
                <li>
                  Open the HP Smart app and tap the plus sign to add a printer.
                </li>
                <li>
                  The app will search for available HP printers on your network.
                  Select your printer when it appears.
                </li>
                <li>
                  If prompted, enter any required PIN displayed on the printer's
                  control panel.
                </li>
                <li>
                  Once connected, try printing a photo or document from your
                  phone to test the connection.
                </li>
              </ol>
              <img
                src={img11}
                alt="Connecting HP printer to smartphone"
                className="img-fluid mb-3"
              />
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon icon={faTint} className="me-2 text-danger" />
                HP Ink Management Tips
              </h2>
              <ul className="card-text">
                <li>
                  Always use genuine HP ink cartridges. They are designed
                  specifically for your printer and provide the best print
                  quality and reliability.
                </li>
                <li>
                  Store spare HP ink cartridges in their original sealed
                  packages in a cool, dry place. Avoid direct sunlight and
                  extreme temperatures.
                </li>
                <li>
                  When installing a new HP cartridge, gently shake it
                  horizontally for about 10 seconds to ensure even ink
                  distribution.
                </li>
                <li>
                  If you don't print often, run a cleaning cycle every few
                  weeks. On most HP printers, you can do this by going to Setup
                  {">"} Tools {">"} Clean Printhead.
                </li>
                <li>
                  For everyday documents, use the draft or economy mode in your
                  print settings to conserve ink. Reserve high-quality settings
                  for important documents or photos.
                </li>
              </ul>
              <img
                src={img12}
                alt="HP ink cartridge management"
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
                Optimizing HP Print Quality
              </h2>
              <ol className="card-text">
                <li>
                  In your print dialog, always select the correct paper type
                  that matches what you've loaded in the printer. This ensures
                  the right amount of ink is used.
                </li>
                <li>
                  Regularly align your print heads. On most HP printers, go to
                  Setup {">"} Tools {">"} Align Printhead.
                </li>
                <li>
                  If you notice streaking or missing colors, clean the print
                  heads. Go to Setup {">"} Tools {">"} Clean Printhead.
                </li>
                <li>
                  For photos or important documents, use HP Advanced Photo Paper
                  or HP Premium Presentation Paper for best results.
                </li>
                <li>
                  Adjust color settings in your HP printer properties for
                  specific needs. For photos, try using HP's "Photo fix" option
                  if available.
                </li>
              </ol>
              <img
                src={img13}
                alt="Optimizing HP print quality"
                className="img-fluid mb-3"
              />
            </div>
          </div>

          <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Disclaimer</h4>
            <p className="mb-0">
              I am an independent printer reseller and not an official
              representative of HP or any other printer brand. The
              troubleshooting steps and advice provided here are based on
              personal experience and general knowledge. For official support or
              inquiries, please contact HP directly. Always refer to your HP
              printer's user manual for the most accurate and up-to-date
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinterSetupGuide;
