import React from "react";
import ReactDOM from "react-dom";
//import Main from './Pages/Application/index';
import Main from "./Pages/Application";
import Login from "../src/Pages/Login";
//import Footer from "./Pages/Footer";

ReactDOM.render(
    <div>
        <Main/>
        <Login />
    </div>,
    // <Login />,
    //<Application />, 
    document.getElementById("app-root")
);
