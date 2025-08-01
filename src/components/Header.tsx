import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    "Innovative IT Solutions",
    "Digital Transformation",
    "Cloud Excellence",
    "Secure Infrastructure"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-blue-100' : 'bg-gradient-to-r from-blue-900/30 to-slate-900/30 backdrop-blur-xl'
    }`}>
      {/* Data reflection overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-2 left-10 text-blue-400 font-mono text-xs animate-pulse">
            {Array.from({length: 20}, (_, i) => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
          <div className="absolute top-4 right-20 text-slate-400 font-mono text-xs animate-pulse delay-500">
            {Array.from({length: 15}, (_, i) => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
          <div className="absolute bottom-2 left-1/3 text-blue-300 font-mono text-xs animate-pulse delay-1000">
            {Array.from({length: 18}, (_, i) => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'bg-gradient-to-r from-blue-600 to-slate-600 shadow-lg' : 'bg-gradient-to-r from-blue-500 to-slate-500 shadow-blue-500/50'
              }`}>
                <Zap className="text-white" size={24} />
              </div>
              <div>
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600' : 'text-white'
                }`}>
                  Infrarise Technologies
                </h1>
                <div className="h-4 overflow-hidden">
                  <div 
                    className="transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateY(-${activeSlide * 16}px)` }}
                  >
                    {slides.map((slide, index) => (
                      <div 
                        key={index} 
                        className={`text-xs font-medium h-4 flex items-center ${
                          isScrolled ? 'text-blue-600' : 'text-blue-300'
                        }`}
                      >
                        {slide}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`group px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 flex items-center space-x-1 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 hover:shadow-md' 
                      : 'text-white hover:text-blue-300 hover:bg-white/15 hover:backdrop-blur-md'
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-blue-50' 
                  : 'text-white hover:bg-white/15'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-blue-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-5 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 rounded-xl transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;