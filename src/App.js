import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productdetails from "./product/productdetails";
import Productimage from "./product/productimage";
import NotFound from './notFound/notfound';

const App=()=>{
        return(
            /*<Router>
                <Route exect path="/product"  component={Productdetails}/ >
                  {Productimage.map((Productimage, index) => (<img src={Productimage.src} key={index}/>))}
                <Route exect path="*"  component={NotFound} />
            <Router/>
            
            */
   <div>
         <Productdetails/>
        {Productimage.map((Productimage, index) => (<img src={Productimage.src} key={index}/>))}
        <NotFound />
    </div>
    )};
   
export default App;