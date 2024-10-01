import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

import lstImg4 from "../assets/lstimg4.jpg";
import lstImg5 from "../assets/lstimg5.jpg";
import lstImg6 from "../assets/lstimg6.jpg";
import lstImg7 from "../assets/lstimg7.jpg";
import lstImg8 from "../assets/lstimg8.jpg";
import lstImg9 from "../assets/lstimg9.jpg";

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
      title: "All-in-One Compact Printer for Home Use",
      description:
        "This all-in-one printer supports printing, scanning, and copying functionalities, making it ideal for home or small office environments. Its compact design ensures easy setup, and it connects via USB for straightforward use.",
      price: 289.99,
      category: "Deskjet",
      image: lstImg9,
    },
    {
      id: 2,
      title: "Monochrome Laser Printer with Multi-Function Capabilities",
      description:
        "A high-performance monochrome laser printer with printing, copying, and scanning options. Designed for efficiency and reliability, this device is perfect for small offices needing sharp document prints.",
      price: 350.99,
      category: "LaserJet",
      image: lstImg8,
    },
    {
      id: 3,
      title: "Fast Monochrome Laser Printer for Efficient Printing",
      description:
        "This fast monochrome laser printer ensures sharp, high-quality prints with features such as automatic duplexing for efficient paper use. Ideal for both home and office environments requiring reliable printing performance.",
      price: 249,
      category: "LaserJet",
      image: lstImg7,
    },
    {
      id: 4,
      title: "Wireless All-in-One Printer for Small Offices",
      description:
        "A versatile all-in-one printer offering printing, scanning, and copying functionalities. Designed with wireless capabilities, it provides a seamless printing experience for small office setups.",
      price: 290.99,
      category: "LaserJet",
      image: lstImg6,
    },
    {
      id: 5,
      title: "High Yield Ink Cartridge for Long-Lasting Prints",
      description:
        "This high-yield ink cartridge supports up to 825 pages, providing reliable and sharp black ink output for large-volume printing needs. Ideal for offices with high print demand.",
      price: 39.99,
      category: "Cartridge",
      image: lstImg5,
    },
    {
      id: 6,
      title: "All-in-One Ink Tank Printer with Wi-Fi",
      description:
        "An all-in-one printer with a large ink tank for efficient, high-volume printing. Its Wi-Fi connectivity and USB options provide flexibility for small businesses and home offices.",
      price: 379.99,
      category: "Smart Tank",
      image: lstImg4,
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
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: "#3498db",
        color: "#fff",
      },
    });
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
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </p>
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
      </div>
    </div>
  );

  const ShowSimilarProducts = () => (
    <div className="container">
      <h2 className="my-5">Similar Products</h2>
      <div className="row">
        {similarProducts.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-12 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ maxHeight: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-dark">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />

      {loading ? <Loading /> : <ShowProduct />}
      {loading2 ? <Loading2 /> : <ShowSimilarProducts />}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Product;
