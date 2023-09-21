// Product.js
import React from 'react';
import "./Product.css";

const Product = ({ product, handleAddToCart   }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p style={{color:"white"}}>Download : {product.price}</p>
      <p style={{color:"white"}}>Rating: {product.rating} </p>
      <button onClick={() => handleAddToCart(product.id)} style={{backgroundColor:"red"}}>Download</button>
    </div>
  );
};

export default Product;
