import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ImageShuffler from "./components/HeroSection";
import Footer from "./components/Footer";
import Review from "./components/Review";
import CardGrid from "./components/CardGrid";
import CardGrid1 from "./components/CardGrid1";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import ProductSection from "./ProductSection";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Cart from "./components/Cart";
import img1Card1 from "../src/assets/shoe1.jpg";
import img1Card2 from "../src/assets/shoe2.jpg";
import img1Card3 from "../src/assets/shoe3.jpg";
import img1Card4 from "../src/assets/shoe4.jpg";
import img1Card5 from "../src/assets/shoe5.jpg";
import img1Card6 from "../src/assets/shoe6.jpg";
import ProductDetails from "./components/ProductDetails";
import { CartProvider } from './CartContext';
const App = () => {
  const images = [img1Card1, img1Card3, img1Card4, img1Card5, img1Card6];

  return (
    <>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="border-t border-gray-300 mb-8"></div>
              <CardGrid title="COLECTION 2024" />
              <br />
              <br />
              <div className="border-t border-gray-300 mb-8"></div>
              <div className="app">
                <ImageShuffler
                  title="Collection last year 2023"
                  description="Introducing the 2023 Shoe Collection:

Our 2023 Shoe Collection blends style, comfort, and sustainability. From trendy sneakers to rugged outdoor shoes and classic dress shoes, there's something for every occasion. Crafted with cutting-edge technology and eco-friendly materials, these shoes are designed to elevate your look while minimizing your environmental footprint. Step into the future with our latest collection and experience the perfect fusion of fashion and function."
                  images={images}
                />
              </div>
              <div className="border-t border-gray-300 mb-8"></div>
              <Review />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <br />
              <br />
              <br />
              <ProductSection />
              <br />
              <br />
              <CardGrid title="New Arrivals" />
              <br />
              <br />
              <CardGrid1 title="Collection last year" />
              <br />
              <br />
              <Footer />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <br />
              <br />
              <ProductDetails />
              <br />
              <Footer />
              <br />
            </>
          }
        />
        <Route
          path="/locations"
          element={
            <>
              <Locations />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="SignUP"
          element={
            <>
              <br />
              <br />
              <SignUp />
              <Footer />
            </>
          }
        />
        <Route
          path="Cart"
          element={
            <>
              <br />
              <br />
              <Cart/>
              <Footer />
            </>
          }
        />
        <Route
          path="login"
          element={
            <>
              <br />
              <br />
              <br />
              <Login />
              <Footer />
            </>
          }
        />
      </Routes>
      </CartProvider>
    </>
  );
};

export default App;

