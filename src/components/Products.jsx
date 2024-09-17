import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import lstImg from "../assets/LastImage.jpg";
import lstImg2 from "../assets/1_Last.jpg";
import lstImg3 from "../assets/2_last.jpg";
import lstImg4 from "../assets/3_last.jpg";
import lstImg5 from "../assets/4_last.jpg";
import lstImg6 from "../assets/5_last.jpg";
import lstImg7 from "../assets/6_last.jpg";
import lstImg8 from "../assets/7_last.jpg";
import lstImg9 from "../assets/8_last.jpg";

const Products = () => {
  const allProducts = [
    {
      id: 1,
      title:
        "HP Deskjet 2331: Compact all-in-one printer. Easy setup via HP Smart App.",
      description:
        "All-in-One Printer: Handles printing, copying, and scanning. Ideal for home office.Fast Connectivity: Hi-Speed USB 2.0 for quick setup.Quality Prints: Uses HP 805 cartridges with high page yields.",
      price: 289.99,
      category: "Deskjet",
      image: lstImg9,
    },
    {
      id: 2,
      title: "HP LaserJet M126A: Compact 3-in-1 monochrome laser printer.",
      description:
        "Multifunction Printer: Print, copy, and scan with ease using this LaserJet printer. Features a flatbed scanner for clear monochrome documents. Seamless Connectivity: Hi-Speed USB 2.0 for reliable, uninterrupted printing. Quality Prints: Includes HP 88A Black Toner Cartridge, delivering sharp prints with a 700-page yield.",
      price: 350.99,
      category: "LaserJet",
      image: lstImg8,
    },
    {
      id: 3,
      title:
        "HP LaserJet Pro P1108 Plus: Black wired monochrome laser printer.",
      description:
        "This printer provides reliable, high-quality printing, with dimensions of 49.6 x 37.7 x 48.9 cm. It supports up to 8.5 x 14 inches media, includes toner cartridges, handles A4 paper, and features automatic duplexing and Ethernet connectivity..",
      price: 249,
      category: "LaserJet",
      image: lstImg7,
    },
    {
      id: 4,
      title:
        "HP OfficeJet Pro 8020: All-in-one wireless printer with Smart Tasks for home office. Gray.",
      description:
        "This printer works only with cartridges containing a new or reused HP chip and uses dynamic security to block those with non-HP chips. Firmware updates will continue to enforce these measures.",
      price: 290.99,
      category: "LaserJet",
      image: lstImg6,
    },
    {
      id: 5,
      title: "HP 915XL High Yield Black Ink Cartridge",
      description:
        "The HP 915XL Black Ink Cartridge yields 825 pages, is water-resistant, and fits HP OfficeJet Pro 8020, 8022, 8028, 8026, and OfficeJet 8010, 8012 models. It ensures high-quality prints and includes fraud protection.",
      price: 39.99,
      category: "Cartridge",
      image: lstImg5,
    },
    {
      id: 6,
      title:
        "HP Smart Tank 589 AIO Printer: WiFi, print/scan/copy, up to 6000 black & 6000 color pages.",
      description:
        "HP Smart Tank 589 All-in-One Printer: Print, copy, and scan with Wi-Fi and USB connectivity. Delivers sharp, professional-quality prints.",
      price: 379.99,
      category: "Smart Tank",
      image: lstImg4,
    },
    {
      id: 7,
      title:
        "HP Smart Tank 530: WiFi color printer with ADF. Includes ink for 18,000 black and 8,000 color pages.",
      description:
        "All-in-One Printer: Print, copy, and scan with this HP Smart Tank printer for vibrant color prints and reliable flatbed scanning. Seamless Connectivity: Enjoy swift dual-band Wi-Fi, Bluetooth LE, and Hi-Speed USB 2.0 for efficient and reliable printing.",
      price: 390.99,
      category: "Smart Tank",
      image: lstImg3,
    },
    {
      id: 8,
      title:
        "HP Smart Tank 670: All-in-one color inkjet with auto duplex and high-capacity ink tank",
      description:
        "All-in-One Printer: Print, scan, and copy with wireless functionality and a flatbed scanner. Seamless Connectivity: Wi-Fi, Hi-Speed USB 2.0, and Bluetooth for easy, uninterrupted use. Quality Prints: Clear, vibrant prints with HP GT53 and GT52 ink bottles.",
      price: 220.99,
      category: "Smart Tank",
      image: lstImg2,
    },
    {
      id: 9,
      title:
        "HP Ink Advantage Ultra 4929: Wired color inkjet with copy, scan, and self-reset WiFi. Includes 2 extra ink sets; 44 paise per page.",
      description:
        "HP Deskjet Ink Advantage Ultra 4826: Print, copy, scan with self-reset WiFi and 2 ink cartridge sets. B&W prints cost 0.44 paise/page, color prints 0.81 paise/page. Ideal for home. Quick Setup: Easily set up via the HP Smart app and dual-band Wi-Fi for reliable, worry-free connections.",
      price: 480.99,
      category: "mDeskJet",
      image: lstImg,
    },
  ];

  const [data, setData] = useState(allProducts);
  const [filter, setFilter] = useState(allProducts);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const filterProduct = (cat) => {
    if (cat === "all") {
      setFilter(data);
    } else {
      const updatedList = data.filter((item) => item.category === cat);
      setFilter(updatedList);
    }
  };

  const ShowProducts = () => (
    <>
      {filter.map((product) => (
        <div
          key={product.id}
          className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
        >
          <div className="card text-center h-100">
            <img
              className="card-img-top p-3"
              src={product.image}
              alt="Card"
              height={300}
            />
            <div className="card-body">
              <h5 className="card-title">
                {product.title.substring(0, 12)}...
              </h5>
              <p className="card-text">
                {product.description.substring(0, 90)}...
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item lead">
                ${product.price.toFixed(2)}
              </li>
            </ul>
            <div className="card-body">
              <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
                Buy Now
              </Link>
              <button
                className="btn btn-dark m-1"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        <ShowProducts />
      </div>
    </div>
  );
};

export default Products;
