import React, { useState } from "react";
import "./OrderForm.css"; // Import your custom CSS file

const OrderForm = () => {
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "Satish Singh",
    address: "Tilak Nagar, Indore",
    phoneNumber: "7067724461",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement order submission logic here
  };

  return (
    <div className="order-form-container">
      <h2>Place Your Order</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={deliveryDetails.name}
            onChange={handleInputChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Address:</label>
          <textarea
            name="address"
            value={deliveryDetails.address}
            onChange={handleInputChange}
            className="textarea-field"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={deliveryDetails.phoneNumber}
            onChange={handleInputChange}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="submit-order-btn">
          Add Delivery Details & Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
