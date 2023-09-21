import React from 'react';
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Product/Main";
import CartPage from './Components/Header/CartPage';
import OrderForm from './Components/Header/OrderForm';
import Footer from "./Components/Footer/footer"
import Scroll from "./Components/ScrollButton/Scroll"

const App = () => {
  return (
    <Router>
      <Navbar />
   
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/place-order" element={<OrderForm/>}/>
        {/* Add other routes if needed */}
      </Routes>
      <Scroll/>
      <Footer/>
    </Router>
    
  );
};

export default App;
