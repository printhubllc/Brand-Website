import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

const BelowMain = () => {
  const [isUserValid, setIsUserValid] = useState(false);

  useEffect(() => {
    const validateUser = async () => {
      setIsUserValid(true);
    };
    validateUser();
  }, []);

  const getSafeLink = (url) => {
    return isUserValid ? url : "#";
  };

  const devices = [
    {
      name: "Windows",
      icon: FaWindows,
      link: "/setup-guide",
      color: "bg-primary",
    },
    {
      name: "Mac",
      icon: FaApple,
      link: "/setup-guide",
      color: "bg-secondary",
    },
    {
      name: "Linux",
      icon: FaLinux,
      link: "/setup-guide",
      color: "bg-warning",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Choose Your Device</h2>
      <div className="row justify-content-center">
        {devices.map((device) => (
          <div key={device.name} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link
              to={getSafeLink(device.link)}
              className={`card ${device.color} text-white h-100 text-decoration-none`}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <device.icon className="display-4 mb-3" />
                <h5 className="card-title">{device.name}</h5>
                <p className="card-text small">Click to setup</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BelowMain;
