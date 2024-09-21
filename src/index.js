import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
  CookiesPolicyPage,
  DisclaimerPage,
  PrivacyPolicyPage,
  RefundPolicyPage,
  ShippingPolicyPage,
  TermsAndConditionsPage,
  SetupGuide,
  Downloading,
  Loading,
  Error,
  Careers,
  WarrantyInfo,
  Gdpr,
} from "../src/pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/warranty" element={<WarrantyInfo />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
<Route path="/gdpr" element={<Gdpr/>} />
        <Route path="/setup-guide" element={<SetupGuide />} />
        <Route path="/downloading" element={<Downloading />} />
        <Route path="/loadingss" element={<Loading />} />
        <Route path="/error" element={<Error />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
