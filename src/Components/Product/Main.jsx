import React, { useState } from 'react';
import "./Main.css";
import ProductList from './ProductList';
import Filters from './Filters';
import Cart from './Cart'; 

const products = [
    {
        id: 1,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5359029/portrait/1920x7706878a52b5c8244e893c12ad2c123508615fd44c570ae479ea58fe915ee002c8e.jpg',
        price: "Bandaa (2023)",
        category: 'Category A',
        rating: 4.5,
      },
      {
        id: 2,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5418670/portrait/1920x770e3d785a94a8f4055903a344d242b0515c4e946cdcbbf4746bf0aef9e05a9b0c0.jpg',
        price: 'Haddi (2023)',
        category: 'Category A',
        rating: 3.5,
      },
      {
        id: 3,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-gadarekpremkatha/portrait/1920x770f75817ed997947f48d18f8e121ab32df.jpg',
        price: 'Gadar (2001)',
        category: 'BollyWood',
        rating: 4,
      },
      {
        id: 4,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-96839/portrait/1920x7707c4220749d764d0fbbf4dc8b263d261b.jpg',
        price: 'Dream Girl (2019)',
        category: 'Bollywood',
        rating: 4.4,
      },
      {
        id: 5,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5379692/portrait/1920x77000b85924c80f49759211809725181017.jpg',
        price: 'Kisi Ka Bhai (2023)',
        category: 'Category A',
        rating: 4.5,
      },
      {
        id: 6,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5399186/portrait/1920x7708d6504e472c942088cf1e60f69c2c3da.jpg',
        price: 'Kashmir File (2022)',
        category: 'Category A',
        rating: 4.5,
      },
      {
        id: 7,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-33204/portrait/1920x7705aeb7ed5a533442fab008ab345b5a14202b286eed4844ed0ba3ce37efaefd242.jpg',
        price: 'Uri (2019)',
        category: 'Category A',
        rating: 4.5,
      },
      {
        id: 8,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5380500/portrait/1920x77091f58840529444b098f688a810a97cef.jpg',
        price: 'Lakadhbaggha (2023)',
        category: 'Bollywood',
        rating: 4.5,
      },
      {
        id: 9,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5343289/portrait/1920x770f86b129d5b1a414d862894aa463de86a.jpg',
        price: 'U-turn (2023)',
        category: 'Category A',
        rating: 3.9,
      },
      {
        id: 10,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5173774/portrait/1920x770ec6fc88bc7094b8b90e4db764331ec31.jpg',
        price: 'Rangbaaz (2023)',
        category: 'Category A',
        rating: 4.3,
      },
      {
        id: 11,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z562203/portrait/1920x770602c19148c3a4276a779e81c0470efe6.jpg',
        price: 'Antim (2023)',
        category: 'Category A',
        rating: 4.2,
      },
      {
        id: 12,
        name: 'Product 1',
        image: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-399328/portrait/1920x7706e39146f92044090bf4663ba25a59d51.jpg',
        price: 'Radhe (2021)',
        category: 'Category A',
        rating: 4,
      },

];

const Main = () => {
 
    const [sortedProducts, setSortedProducts] = useState(products);
    const [cart, setCart] = useState([]);


    const handleFilterChange = event => {
      sortProducts(event.target.value);
    };
    const handleAddToCart = productId => {
        const productToAdd = products.find(product => product.id === productId);
        setCart(prevCart => [...prevCart, productToAdd]);
      };
  
    const sortProducts = criteria => {
      let sorted = [...products]; // Create a copy of the products array
  
      if (criteria === 'category') {
        sorted.sort((a, b) => a.category.localeCompare(b.category));
      } else if (criteria === 'price') {
        sorted.sort((a, b) => b.price - a.price);
      } else if (criteria === 'rating') {
        sorted.sort((a, b) => b.rating - a.rating);
      }
  
      setSortedProducts(sorted);
    };

  return (
    <div className="app">
      <h1 style={{color:"white"}}>Movies List</h1>
      <Filters handleFilterChange={handleFilterChange} />
      <ProductList products={sortedProducts} handleAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default Main;
