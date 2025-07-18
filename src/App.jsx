import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import SocialMedia from "./components/socialMedia";

import Home from "./components/home";
import About from "./components/about";
import ServicesPage from "./components/service";
import OurValues from "./components/OurValues";
import Products from "./components/products";

import "./App.css";
import DynamicServicePage from "./components/DynamicServicePage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <Header></Header>
        <div className="mt-15">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/services/:serviceName"
              element={<DynamicServicePage />}
            />
            <Route path="/values" element={<OurValues />} />
          </Routes>
        </div>
        <SocialMedia></SocialMedia>
        <Footer></Footer>
      </>
    </BrowserRouter>
  );
}

export default App;
