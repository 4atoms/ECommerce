import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FeatureProducts from "./Dashboard/FeatureProducts";
import Product from "./pageDescription/Product";

const ProductPage=()=>{
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={FeatureProducts}/>
            <Route exact path='/product/:id' component={Product} />
          </Switch>
        </div>
      </Router>
     
    );
  }


export default ProductPage;