import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './ui/Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <div className="flex items-center gap-3">
            <Logo size="md" />
            <span className={`text-xl font-bold gradient-text ${
              language === 'ar' ? 'font-ar' : 'font-en'
            }`}>REEL</span>
          </div>
          
          <div className={`hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2 ${
            language === 'ar' ? 'font-ar' : 'font-en'
          }`}>
            {['home', 'services', 'portfolio', 'about', 'contact'].map((item) => (
              <a key={item} href="#" className={`transition-colors ${
                scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-secondary-400'
              }`}>
                {t(item)}
              </a>
            ))}
            
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
                language === 'ar' ? 'font-ar' : 'font-en'
              } ${
                scrolled ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className={`px-4 py-4 space-y-3 ${
              language === 'ar' ? 'font-ar' : 'font-en'
            }`}>
              {['home', 'services', 'portfolio', 'about', 'contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}