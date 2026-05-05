import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search as SearchIcon, Calendar, Shield, Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import AllEvents from './pages/AllEvents';
import PrivatePage from './pages/PrivatePage';
import CityContributions from './pages/CityContributions';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-display font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-black" />
          </div>
          <span className="leading-tight text-lg">DIASPORA DE SELEA BAMBAO</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium hover:text-brand transition-colors ${location.pathname === '/' ? 'text-brand' : 'text-gray-400'}`}>Accueil</Link>
          <a href="/#events" className="text-sm font-medium text-gray-400 hover:text-brand transition-colors">Événements</a>
          <a href="/#aphan" className="text-sm font-medium text-gray-400 hover:text-brand transition-colors">Hafani</a>
          <a href="https://wa.me/33646689634" target="_blank" rel="noopener noreferrer" className="btn-primary py-2 text-sm px-6">Nous Rejoindre</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-navy border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">Accueil</Link>
            <a href="/#events" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-400">Événements</a>
            <a href="/#aphan" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-400">Hafani</a>
            <a href="https://wa.me/33646689634" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="btn-primary text-center">Nous Rejoindre</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-navy overflow-x-hidden selection:bg-brand selection:text-black">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<AllEvents />} />
            <Route path="/private" element={<PrivatePage />} />
            <Route path="/hafani/:cityId" element={<CityContributions />} />
          </Routes>
        </main>
        
        <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm px-6">
          <p>© 2026 DIASPORA DE SELEA BAMBAO. Tous droits réservés.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

