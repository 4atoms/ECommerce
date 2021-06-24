import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Components/Header'
import Section from './Components/Section'

class index extends React.Component{
    render(){
        return(
            <div className = "index">
                <Header/>
                <Section/>
               


            </div>
        )
    }
}

export default index

