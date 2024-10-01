import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import lstImg4 from "../assets/lstimg4.jpg";
import lstImg5 from "../assets/lstimg5.jpg";
import lstImg6 from "../assets/lstimg6.jpg";
import lstImg7 from "../assets/lstimg7.jpg";
import lstImg8 from "../assets/lstimg8.jpg";
import lstImg9 from "../assets/lstimg9.jpg";

const Products = () => {
  const allProducts = [
    {
      id: 1,
      title: "Compact all-in-one printer with easy setup.",
      description:
        "This all-in-one printer handles printing, copying, and scanning, making it ideal for home office use. Fast connectivity through USB for quick setup, and uses cartridges with high page yields for quality prints.",
      price: 289.99,
      category: "Deskjet",
      image: lstImg9,
    },
    {
      id: 2,
      title: "Compact 3-in-1 monochrome laser printer.",
      description:
        "This multifunction printer allows you to print, copy, and scan with ease. Features include a flatbed scanner for clear monochrome documents and USB for reliable printing. Comes with a high-yield toner cartridge for sharp prints.",
      price: 350.99,
      category: "LaserJet",
      image: lstImg8,
    },
    {
      id: 3,
      title: "Reliable black wired monochrome laser printer.",
      description:
        "This printer provides high-quality, reliable monochrome printing. With automatic duplexing and Ethernet connectivity, it's designed for small office use. Supports a variety of media sizes for versatile printing options.",
      price: 249,
      category: "LaserJet",
      image: lstImg7,
    },
    {
      id: 4,
      title: "Wireless all-in-one printer with smart tasks.",
      description:
        "An all-in-one wireless printer designed for home offices. Includes smart task shortcuts and works with compatible cartridges, ensuring optimal security and performance.",
      price: 290.99,
      category: "LaserJet",
      image: lstImg6,
    },
    {
      id: 5,
      title: "High-yield black ink cartridge.",
      description:
        "This black ink cartridge provides a yield of up to 825 pages, ensuring high-quality prints. Compatible with various office printers and includes fraud protection.",
      price: 39.99,
      category: "Cartridge",
      image: lstImg5,
    },
    {
      id: 6,
      title: "WiFi-enabled all-in-one printer with large ink capacity.",
      description:
        "This all-in-one printer is ideal for high-volume printing, offering wireless and USB connectivity. It supports up to 6000 black and 6000 color pages per refill.",
      price: 379.99,
      category: "Smart Tank",
      image: lstImg4,
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
