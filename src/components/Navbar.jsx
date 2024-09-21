import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import blogo from "../assets/brand_logo.png";
import logo from "../assets/logo.png";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="50" className="me-2" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={{ fontWeight: "bold" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/product"
                style={{ fontWeight: "bold" }}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={{ fontWeight: "bold" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={{ fontWeight: "bold" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <form className="d-flex me-auto mb-2 mb-lg-0">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>

          <div className="d-flex">
            <NavLink to="/login" className="btn btn-outline-dark me-2">
              <i className="fa fa-sign-in-alt text-dark"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark me-2">
              <i className="fa fa-user-plus text-dark"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark">
              <i className="fa fa-cart-shopping text-dark"></i> Cart (
              {state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
