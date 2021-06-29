
// import React,{Component} from 'react'
import Products from './sections/Product/Products';
import Details from './sections/Details';
import { Route } from 'react-router-dom';


const Section=()=>{
    return(
        <section>
            <Route path = "/products" Component = {Products} exact/>
            <Route path = "/product/:id" Component = {Details} />
        </section>
    )

    }
export default Section