import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/certificates" element={<Certificates />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;