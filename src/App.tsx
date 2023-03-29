import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./shared_components/Header";
import Categories from "./shared_components/Categories";
import Blurb from "./shared_components/Blurb";
import Footer from "./shared_components/Footer";

import Category from "./Category";
import Product from "./product-components/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/:categoryParam/:itemParam" element={<Product />} />
          <Route path="/:categoryParam" element={<Category />} />
        </Routes>
        <Categories />
        <Blurb />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
