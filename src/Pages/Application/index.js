import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import FeatureProducts from './FeatureProducts';
//import Product from './Product';
import "./index.css";
import ProductPage from "./Components/displayproduct";
import Footer from "../Footer/Footer"; //as Router, Route, Switch
import Header from "../Header/Header";

const Main = () => (
  <>
    <BrowserRouter>
      <Header />
      <ProductPage />
      <Footer />
    </BrowserRouter>
  </>
);

export default Main;
