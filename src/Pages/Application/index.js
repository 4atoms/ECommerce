import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import FeatureProducts from './FeatureProducts';
//import Product from './Product';
import "./index.css";
import ProductPage from "./Components/displayproduct";
import Footer from "../Footer/Footer"; //as Router, Route, Switch
import Header from "../Header/Header";
import Login from "../Login";
import Signin from "../Signin";

const Main = () => (
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
      </Switch>
      <ProductPage />
      <Footer />
    </BrowserRouter>
  </>
);

export default Main;
