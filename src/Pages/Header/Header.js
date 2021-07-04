// import React, { Component } from 'react'
import React from "react";
import menu from "../Header/Header_images/bars-solid.svg";
import cart from "../Header/Header_images/cart-plus-solid.svg";
import close from "../Header/Header_images/times-solid.svg";
import { Link, Switch } from "react-router-dom";
import "../Header/Header.css";
import "../Header/Header.style";
// import Login from "../Login";

const Header = () => {
  return (
    <div className="wrapper">
      <header>
        <div className="menu">
          <img src={menu} alt="" width="20" />
        </div>

        <div className="logo">
          <h2>
            <Link to="/">Flipkart</Link>
          </h2>
        </div>

        <div className="search">
          <input type="text" placeholder="Search.." />
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/contact">Contact-Us</Link>
            </li>
            <li>
              <Switch>
                <Link to="/login">Login/Register</Link>
              </Switch>
            </li>
            <li className="close">
              <img src={close} alt="" width="15" />
            </li>
          </ul>

          <div className="nav-cart">
            <span>0</span>
            <Link to="/cart">
              <img src={cart} alt="" width="20px" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
