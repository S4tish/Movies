import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import Link from react-router-dom
import "./CartPage.css"; // Import your custom CSS file

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 10, quantity: 1 },
    { id: 2, name: "Product B", price: 20, quantity: 1 },
  ]);

  const increaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>Price: Rs{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
            <p className="item-total">Total: Rs{item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: Rs{calculateTotal()}</h3>

        <Link to="/place-order" className="place-order-btn">
          Place Order
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
