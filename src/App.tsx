import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DrawerAppBar from "./components/Header"; // Adjust path as needed
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

const App = () => {
  return (
    <Router>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
