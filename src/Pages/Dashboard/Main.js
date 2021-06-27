import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header';
import Section from './Components/Section';
import DataContext from "./Components/Context";
import DataProvider from './Components/Context';
import Context from './Components/Context';
import Footer from './Components/Footer';
const Main=()=>{
    return(
        
            <div className = "Main">
                <Router>
                    <Header/>
                    <Context/>
                    <Section/>
                    <Footer/>
                </Router>
            </div>
        
    )
       

        
    }


export default Main; 
 

