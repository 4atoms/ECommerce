
// import React, { Component } from 'react'
import menu from "../Dashboard/Components/Header_images/bars-solid.svg";
import cart from "../Dashboard/Components/Header_images/cart-plus-solid.svg";
import close from "../Dashboard/Components/Header_images/times-solid.svg";
import {Link } from "react-router-dom";
import "../Header/Header.css";


const Header=()=>{
    const toInputUppercase = e => {
        e.target.value = ("" + e.target.value).toUpperCase();
      };
      
    return(
        <div className = "wrapper">
            <header>
            <div className ="menu">

                <img src ={menu} alt =""  width = "20"/>
            </div>
            
            <div className = "logo">
                <h2><Link to = "/">Flipkart</Link></h2>

            </div>


            <div className ="search">
                <input type="text" placeholder="Search.." onInput={toInputUppercase}/>
            </div>

            <nav>
                
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/product">Product</Link></li>
                    <li><Link to ="/conatct">Contact-Us</Link></li>
                    <li><Link to ="/login">Login/Register</Link></li>
                    <li className = "close">
                        <img src ={close} alt =""  width = "15"/>
                    </li>
                </ul>

                <div className ="nav-cart">
                    <span>0</span>
                    <Link to = "/cart">
                    <img src ={cart} alt =""  width = "20"/>
                    </Link>
                </div>
            </nav>
            
            </header>
        </div>
    )

    }

export default Header