import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./components/Login";
import SignupPage from "./components/SignUp";
import Banner from "./components/Banner";
import FeaturedProducts from "./components/Featured Products";
import CategoriesProducts from "./components/Categories";
import MoreProducts from "./components/moreproducts";
import Footer from "./components/Footer";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <FeaturedProducts />
      <CategoriesProducts />
      <MoreProducts />
      <Footer />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
