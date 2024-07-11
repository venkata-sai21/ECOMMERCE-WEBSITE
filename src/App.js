// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="App">
            <Navbar cart={cart} />
            <ProductList addToCart={addToCart} />
            <Cart cart={cart} />
        </div>
    );
};

export default App;
