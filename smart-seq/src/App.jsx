import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Article from "./Components/Article";
import Subscribe from "./Components/Subscribe";
import AboutSection from "./Components/AboutSection";
import CreativeSolutions from "./Components/CreativeSolutions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <AboutSection />
      <CreativeSolutions />
      <Gallery />
      <Subscribe />
      <Article />
      <Footer />
    </>
  );
}

export default App;
