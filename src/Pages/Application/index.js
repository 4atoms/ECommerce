import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from '../Header/Header';
import Section from '../Dashboard/Components/Section';
import Context from '../Dashboard/Components/sections/Context/Context';
import Footer from '../Footer/Footer';
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
 

