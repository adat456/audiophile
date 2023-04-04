import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollAndSetLocation from "./shared_components/ScrollAndSetLocation";
import Header from "./shared_components/Header";
import Footer from "./shared_components/Footer";

import Home from "./Home";
import Category from "./category-components/Category";
import Product from "./product-components/Product";
import Checkout from "./checkout-components/Checkout";

import CartPreview from "./checkout-components/CartPreview";

function App() {
  const [ cartModal, setCartModal ] = useState(false);
  const [ curLocation, setCurLocation ] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollAndSetLocation setCurLocation={setCurLocation} />
        {cartModal ? 
          <>
            <div className="backdrop" onClick={() => setCartModal(false)}></div>
            <CartPreview setCartModal={setCartModal} />
          </> : <></>}
        <Header setCartModal={setCartModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout prevLocation={curLocation} />} />
          <Route path="/:categoryParam/:itemParam" element={<Product />} />
          <Route path="/:categoryParam" element={<Category />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
