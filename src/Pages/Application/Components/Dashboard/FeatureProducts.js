import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Title, Container, Card } from "./FeatureProducts.style";
import axios from "axios";

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://shoppingapiacme.herokuapp.com/shopping")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Title>Featured Products !</Title>

      <Container>
        {products.map((product) => (
          <Card key={product.id}>
            <img src={product.image} alt="" />
            <h3>{product.brand}</h3>
            <p>{product.item}</p>
            <Link to={`/product/${product.id}`}>View</Link>
          </Card>
        ))}
      </Container>
    </div>
  );
};
export default FeatureProducts;
