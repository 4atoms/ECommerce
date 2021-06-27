import React, { Component } from 'react' 
import {Link } from 'react-router-dom'
import '../css/Product.css'

/*to pass data from one components to other*/
const Products=(props)=>{  
    console.log(props.value)
    console.log(typeof(props.value))
    return(
        <div id = "product">
            {
                props.value.map(item =>(
                    <div className ="card" key={item._id}>
                        <Link to ={`/product/${item._id}`}>
                            <img src = {item.src} alt=""/>
                        
                        </Link>
                        <div className ="content" key={item._id}>
                          <h3>
                          <Link to ={`/Product/${item._id}`}> {item.title}</Link>

                          </h3>
                          <span>${item.price}</span>
                          <p>{item.description}</p>
                          <button>View more </button>
                        </div>
                    </div>
                ))                        
                        
            }
            
        </div>



    )


}
export default Products

/*            <ul>
                {props.value.map((data, index) => {
                    return <li key={index}>{data._id}</li>
                })}
                
        
            </ul>*/
