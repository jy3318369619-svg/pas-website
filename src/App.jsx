import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Technology from './components/Technology'
import Dealers from './components/Dealers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PNS520Detail from './components/PNS520Detail'
import PNS600Detail from './components/PNS600Detail'
import PNS720Detail from './components/PNS720Detail'
import PNSS147Detail from './components/PNSS147Detail'
import PNS990Detail from './components/PNS990Detail'
import PNS760Detail from './components/PNS760Detail'
import PNS900Detail from './components/PNS900Detail'
import PNS988Detail from './components/PNS988Detail'
import PNSGlovesDetail from './components/PNSGlovesDetail'

function ScrollToHero() {
  const location = useLocation();

  useEffect(() => {
    // 页面加载后滚动到hero区域
    const timer = setTimeout(() => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // 短暂延迟确保DOM已渲染

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <ScrollToHero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/dealers" element={<Dealers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pns-520" element={<PNS520Detail />} />
          <Route path="/pns-600" element={<PNS600Detail />} />
          <Route path="/pns-720" element={<PNS720Detail />} />
          <Route path="/pns-s147" element={<PNSS147Detail />} />
          <Route path="/pns-990" element={<PNS990Detail />} />
          <Route path="/pns-760" element={<PNS760Detail />} />
          <Route path="/pns-900" element={<PNS900Detail />} />
          <Route path="/pns-988" element={<PNS988Detail />} />
          <Route path="/pns-gloves" element={<PNSGlovesDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
