import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar,SubNavBar } from "../components";
import placeholderImage from "../assets/images.jpg"; // Replace with your actual image path

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const dispatch = useDispatch();

  const allProducts = [
    {
      id: 1,
      title:
        "HP Deskjet 2331: Compact all-in-one printer. Easy setup via HP Smart App.",
      description:
        "All-in-One Printer: Handles printing, copying, and scanning. Ideal for home office.Fast Connectivity: Hi-Speed USB 2.0 for quick setup.Quality Prints: Uses HP 805 cartridges with high page yields.",
      price: 289.99,
      category: "Deskjet",
      image: placeholderImage,
    },
    {
      id: 2,
      title: "HP LaserJet M126A: Compact 3-in-1 monochrome laser printer.",
      description:
        "Multifunction Printer: Print, copy, and scan with ease using this LaserJet printer. Features a flatbed scanner for clear monochrome documents. Seamless Connectivity: Hi-Speed USB 2.0 for reliable, uninterrupted printing. Quality Prints: Includes HP 88A Black Toner Cartridge, delivering sharp prints with a 700-page yield.",
      price: 350.99,
      category: "LaserJet",
      image: placeholderImage,
    },
    {
      id: 3,
      title:
        "HP LaserJet Pro P1108 Plus: Black wired monochrome laser printer.",
      description:
        "This printer provides reliable, high-quality printing, with dimensions of 49.6 x 37.7 x 48.9 cm. It supports up to 8.5 x 14 inches media, includes toner cartridges, handles A4 paper, and features automatic duplexing and Ethernet connectivity..",
      price: 249,
      category: "LaserJet",
      image: placeholderImage,
    },
    {
      id: 4,
      title:
        "HP OfficeJet Pro 8020: All-in-one wireless printer with Smart Tasks for home office. Gray.",
      description:
        "This printer works only with cartridges containing a new or reused HP chip and uses dynamic security to block those with non-HP chips. Firmware updates will continue to enforce these measures.",
      price: 290.99,
      category: "LaserJet",
      image: placeholderImage,
    },
    {
      id: 5,
      title: "HP 915XL High Yield Black Ink Cartridge",
      description:
        "The HP 915XL Black Ink Cartridge yields 825 pages, is water-resistant, and fits HP OfficeJet Pro 8020, 8022, 8028, 8026, and OfficeJet 8010, 8012 models. It ensures high-quality prints and includes fraud protection.",
      price: 39.99,
      category: "Cartridge",
      image: placeholderImage,
    },
    {
      id: 6,
      title:
        "HP Smart Tank 589 AIO Printer: WiFi, print/scan/copy, up to 6000 black & 6000 color pages.",
      description:
        "HP Smart Tank 589 All-in-One Printer: Print, copy, and scan with Wi-Fi and USB connectivity. Delivers sharp, professional-quality prints.",
      price: 379.99,
      category: "Smart Tank",
      image: placeholderImage,
    },
    {
      id: 7,
      title:
        "HP Smart Tank 530: WiFi color printer with ADF. Includes ink for 18,000 black and 8,000 color pages.",
      description:
        "All-in-One Printer: Print, copy, and scan with this HP Smart Tank printer for vibrant color prints and reliable flatbed scanning. Seamless Connectivity: Enjoy swift dual-band Wi-Fi, Bluetooth LE, and Hi-Speed USB 2.0 for efficient and reliable printing.",
      price: 390.99,
      category: "Smart Tank",
      image: placeholderImage,
    },
    {
      id: 8,
      title:
        "HP Smart Tank 670*: All-in-one color inkjet with auto duplex and high-capacity ink tank",
      description:
        "All-in-One Printer: Print, scan, and copy with wireless functionality and a flatbed scanner. Seamless Connectivity: Wi-Fi, Hi-Speed USB 2.0, and Bluetooth for easy, uninterrupted use. Quality Prints: Clear, vibrant prints with HP GT53 and GT52 ink bottles.",
      price: 220.99,
      category: "Smart Tank",
      image: placeholderImage,
    },
    {
      id: 9,
      title:
        "HP Ink Advantage Ultra 4929*: Wired color inkjet with copy, scan, and self-reset WiFi. Includes 2 extra ink sets; 44 paise per page.",
      description:
        "HP Deskjet Ink Advantage Ultra 4826: Print, copy, scan with self-reset WiFi and 2 ink cartridge sets. B&W prints cost 0.44 paise/page, color prints 0.81 paise/page. Ideal for home. Quick Setup: Easily set up via the HP Smart app and dual-band Wi-Fi for reliable, worry-free connections.",
      price: 480.99,
      category: "mDeskJet",
      image: placeholderImage,
    },
  ];

  useEffect(() => {
    const getProduct = () => {
      setLoading(true);
      const selectedProduct = allProducts.find(
        (product) => product.id === parseInt(id)
      );
      if (selectedProduct) {
        setProduct(selectedProduct);
        const similar = allProducts.filter(
          (p) =>
            p.category === selectedProduct.category &&
            p.id !== selectedProduct.id
        );
        setSimilarProducts(similar);
      }
      setLoading(false);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const Loading = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 py-3">
          <Skeleton height={400} width={400} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline={true} />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            width="400px"
            height="400px"
          />
        </div>
        <div className="col-md-6 col-md-6 py-5">
          <h4 className="text-uppercase text-muted">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            Rating: <i className="fa fa-star"></i>
          </p>{" "}
          {/* Placeholder for rating */}
          <h3 className="display-6 my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark mx-3">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className="my-4 py-4">
      <div className="d-flex">
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
      </div>
    </div>
  );

  const ShowSimilarProduct = () => (
    <div className="py-4 my-4">
      <div className="d-flex">
        {similarProducts.length > 0 ? (
          similarProducts.map((item) => (
            <div key={item.id} className="card mx-4 text-center">
              <img
                className="card-img-top p-3"
                src={item.image}
                alt="Card"
                height={300}
                width={300}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title.substring(0, 15)}...</h5>
              </div>
              <div className="card-body">
                <Link to={`/product/${item.id}`} className="btn btn-dark m-1">
                  Buy Now
                </Link>
                <button
                  className="btn btn-dark m-1"
                  onClick={() => addProduct(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No similar products found.</p>
        )}
      </div>
    </div>
  );

  return (
    <>
     <Navbar /> <SubNavBar />
      <div className="container">
        <div className="row">
          {loading ? <Loading /> : product && <ShowProduct />}
        </div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2>You may also Like</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
};

export default Product;
