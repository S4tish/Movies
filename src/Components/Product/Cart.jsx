import React from 'react';

const Cart = ({cart}) => {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.name} - Rs{item.price}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default Cart;
  