import React from "react";
import { useNavigate } from "react-router-dom";
import main_img from "../assets/main.png";

const Home = () => {
  const navigate = useNavigate();

  const handleImageClick = (e) => {
    e.preventDefault();
    navigate("/setup-guide");
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
