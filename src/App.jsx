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
import PyramidKadilun300Detail from './components/PyramidKadilun300Detail'
import PyramidKadilun500Detail from './components/PyramidKadilun500Detail'
import PyramidPNS760Detail from './components/PyramidPNS760Detail'
import PyramidPNS900Detail from './components/PyramidPNS900Detail'
import PNSGlovesDetail from './components/PNSGlovesDetail'

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 0);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

const productDetailPaths = new Set([
  '/pns-520',
  '/pns-600',
  '/pns-720',
  '/pns-s147',
  '/pns-990',
  '/pns-760',
  '/pns-900',
  '/pns-988',
  '/pyramid-kadilun-300',
  '/pyramid-kadilun-500',
  '/pyramid-pns-760',
  '/pyramid-pns-900',
  '/pns-gloves'
]);

function ProductDetailDisclaimer() {
  const location = useLocation();

  if (!productDetailPaths.has(location.pathname)) {
    return null;
  }

  return (
    <section
      style={{
        background: '#ffffff',
        padding: '0 40px 64px'
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '18px 24px',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '12px',
          background: '#f8f9fa',
          color: '#6e6e73',
          fontSize: '0.9rem',
          lineHeight: 1.6,
          textAlign: 'center'
        }}
      >
        <p style={{ margin: '0 0 6px' }}>
          All product details are provided for reference only. Actual specifications may vary slightly.
        </p>
        <p style={{ margin: 0 }}>
          Changzhou Perez Textile Co., Ltd. reserves the final right of interpretation and may adjust production technology or product details based on market feedback.
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <ScrollToTop />
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
          <Route path="/pyramid-kadilun-300" element={<PyramidKadilun300Detail />} />
          <Route path="/pyramid-kadilun-500" element={<PyramidKadilun500Detail />} />
          <Route path="/pyramid-pns-760" element={<PyramidPNS760Detail />} />
          <Route path="/pyramid-pns-900" element={<PyramidPNS900Detail />} />
          <Route path="/pns-gloves" element={<PNSGlovesDetail />} />
        </Routes>
        <ProductDetailDisclaimer />
        <Footer />
      </div>
    </Router>
  )
}

export default App
