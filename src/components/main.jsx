import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import main_img from "../assets/main.png";

const Home = () => {
  const [mouseMovements, setMouseMovements] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = () => {
      setMouseMovements((prev) => prev + 1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleImageClick = (e) => {
    e.preventDefault();

    if (mouseMovements > 5) {
      navigate("/setup-guide");
    } else {
      alert("Please move your mouse a bit before clicking.");
    }
  };

  return (
    <>
      <div className="hero border-1 pb-3">
        <div
          className="card bg-dark text-white border-0 mx-3"
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        >
          <img
            className="card-img img-fluid"
            src={main_img}
            alt="Card"
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
