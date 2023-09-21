// Filters.js
import React from 'react';
import "./Filters.css";

const Filters = ({ handleFilterChange }) => {
  return (
    <div className="filters">
      <select onChange={handleFilterChange}>
        <option value="category">Sort by Category</option>
        <option value="price">Sort by Price</option>
        <option value="rating">Sort by Rating</option>
      </select>
    </div>
  );
};

export default Filters;
