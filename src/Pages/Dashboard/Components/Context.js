import React, { useState } from 'react'

import Products from './sections/Products';


const DataProvider=()=>{
    const [products, setproducts] = useState([
        {
            "_id" : "1",
            "title": "Apple iPhone 11 Pro Max (256GB)",
            "src": "https://assets.wired.com/photos/w_600/wp-content/uploads/2017/12/Apple_iPhone-11-Pro-NEW-600x338.jpg",
            "price": 599,
            "colors":["Silver","black","Midnight"],
            "count": 6
        },

        {
            "_id" : "2",
            "title": "Nike Shoes",
            "src": "https://cdn.shopclues.com/images1/thumbnails/105192/640/1/149110017-105192149-1588784160.jpg",
            "price": 47,
            "colors":["red","black","grey","blue"],
            "count": 20
        },

        {
            "_id" : "3",
            "title": "Dribble T-shirts(Designed)",
            "src": "https://cdn.dribbble.com/users/61921/screenshots/9634673/media/985b2add2b952f24634b717c4d846bf2.png?compress=1&resize=400x300",
            "price": 5.5,
            "colors":["Blue","black","crimson","Yellow"],
            "count": 50
        },
        
        {
            "_id" : "4",
            "title": "Headphones",
            "src": "https://www.sony.co.in/image/8f499d4640b363762e66edd1a4916a10?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
            "price": 2340,
            "colors":["red","black","crimson","teal"],
            "count": 1
        },
        {
            "_id" : "5",
            "title": "LED TV - 43inch",
            "src": "https://www.businessinsider.in/thumb/msid-78228913,width-640,resizemode-4/Master.jpg",
            "price": 475,
            "inch":["32inch","36inch","50inch"],
            "count": 5
        },
        {
            "_id" : "6",
            "title": "Macbook Pro",
            "src": "https://dam.which.co.uk/54f1d917-eea0-461e-8003-471dee3d2fe3.jpg",
            "price": 1500,
            "colors":["black","silver"],
            "count": 250
        },
        {
            "_id" : "7",
            "title": "Bean Bag",
            "src": "https://www.chennaichairs.com/images/thumbs/w_1_0000456_blaster-bean-bag_600.jpeg",
            "price": 23,
            "colors":["red","black","brown"],
            "count": 15
        },
        {
            "_id" : "8",
            "title": "Mixer-Grinder",
            "src": "https://5.imimg.com/data5/YW/VZ/FT/SELLER-85407527/mixer-png-500x500.png",
            "price": 50,
            "colors":["white"],
            "count": 30
        },
        {
            "_id" : "9",
            "title": "Nikon D3500 ",
            "src": "https://images-na.ssl-images-amazon.com/images/I/61A4tg5IFhL._SY355_.jpg",
            "price": 900,
            "Body-Type":["Body + 18-55mm + 70-200mm lens"],
            "count": 20
        },

        



    ]);
    console.log(products)
    return(
        <Products value={products} >
            
        </Products>

    )


}

export default DataProvider

