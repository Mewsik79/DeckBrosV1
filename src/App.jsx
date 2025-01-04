import React from 'react'
    import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import About from './pages/About'
    import Services from './pages/Services'
    import Contact from './pages/Contact'
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'

    export default function App() {
      return (
        <BrowserRouter>
          <Navbar />
          <main className="min-h-[calc(100vh-128px)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      )
    }
