
import React,{Component} from 'react'
import menu from './srv/bars-solid'
import close from './srv/cart-plus-solid'
import cart from './srv/times-solid'
import {Link } from 'react-router-dom'


export class Header extends Components{
    render(){
        return(
            <header>
                <div className ="menu">
                    <img src ={menu} alt =""  width = "20"/>
                </div>

                <div className = "logo">
                    <h2><Link>Nike</Link></h2>

                </div>
            </header>

        )
    }
}