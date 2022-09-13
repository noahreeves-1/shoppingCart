/* REACT */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* COMPONENTS */
import Home from "./components/Home";
import Nav from "./components/Nav";
import ProductDetail from "./components/ProductPage/ProductDetail";
import Shop from "./components/ShopPage/Shop";
import ShoppingCart from "./components/ShoppingCartPage/ShoppingCart";

/* CSS */
import "./css/index.css";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  // const [cartCount, setCartCount] = useState(0);
  // const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log(cart);
  };

  return (
    <Router>
      <div className="app-wrapper">
        <div className="app-container">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/shop/:category"
              element={<Shop setSelectedItem={selectItem} />}
            />
            <Route
              path="/shop/:category/:id"
              element={
                <ProductDetail
                  selectedItem={selectedItem}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="/shoppingCart"
              element={<ShoppingCart cartItems={cart} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
