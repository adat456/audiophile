import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./shared_components/Header";
import Footer from "./shared_components/Footer";

import Home from "./Home";
import Category from "./category-components/Category";
import Product from "./product-components/Product";
import Checkout from "./checkout-components/Checkout";

import ScrollToTop from "./shared_components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/:categoryParam/:itemParam" element={<Product />} />
          <Route path="/:categoryParam" element={<Category />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
