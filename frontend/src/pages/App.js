// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
// import pages
import Home from "./Home";
import Customers from "./Customers";
import Products from "./Products";
import Nopage from "./Nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="customers" element={<Customers />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="*" element={<Nopage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
