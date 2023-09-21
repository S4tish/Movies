// ProductList.js
import React from 'react';
import Product from './Product';
import "./ProductList.css";

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
         <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
