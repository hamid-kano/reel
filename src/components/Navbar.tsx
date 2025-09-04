import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Home, Briefcase, User, Mail, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './ui/Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage, t, dir } = useLanguage();

  const menuItems = [
    { key: 'home', icon: Home, href: '#hero' },
    { key: 'about', icon: User, href: '#about' },
    { key: 'services', icon: Settings, href: '#services' },
    { key: 'portfolio', icon: Briefcase, href: '#portfolio' },
    { key: 'contact', icon: Mail, href: '#contact' }
  ];

  const scrollToSection = (href: string, sectionKey: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionKey);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = menuItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current === 'hero' ? 'home' : current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
        : 'bg-gradient-to-r from-black/20 via-transparent to-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          <div className="flex items-center gap-3 group">
            <Logo 
              size="md" 
              variant={scrolled ? 'dark' : 'light'}
              className="transition-opacity duration-300" 
            />
            <span className={`text-xl sm:text-2xl font-bold ${scrolled ? 'text-primary-600' : 'text-white'} transition-colors duration-300 ${
              language === 'ar' ? 'font-ar' : 'font-en'
            }`}>REEL</span>
          </div>
          
          <div className={`hidden md:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2 ${
            language === 'ar' ? 'font-ar' : 'font-en'
          }`}>
            <div className={`flex items-center gap-1 p-1 rounded-full transition-colors duration-300 ${
              scrolled ? 'bg-gray-100/80' : 'bg-white/10'
            }`}>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.href, item.key)}
                    className={`relative flex items-center gap-2 px-3 py-2 rounded-full transition-colors duration-300 ${
                      isActive
                        ? scrolled
                          ? 'bg-primary-500 text-white shadow-lg'
                          : 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                        : scrolled
                          ? 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{t(item.key)}</span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-secondary-400 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`group relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 overflow-hidden ${
                language === 'ar' ? 'font-ar' : 'font-en'
              } ${
                scrolled 
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:shadow-xl' 
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Globe className="w-4 h-4 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-sm font-bold relative z-10">{language.toUpperCase()}</span>
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden relative p-2 rounded-full transition-colors duration-300 ${
                scrolled ? 'bg-primary-500 text-white' : 'bg-white/10 text-white'
              }`}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'top-2.5'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-3' : 'top-4'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl shadow-xl">
            <div className={`p-4 ${
              language === 'ar' ? 'font-ar' : 'font-en'
            }`}>
              <div className="grid grid-cols-2 gap-3">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.key;
                  return (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.href, item.key)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-colors duration-300 ${
                        isActive 
                          ? 'bg-primary-500 text-white shadow-lg' 
                          : 'bg-gray-50 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="text-sm font-medium">{t(item.key)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
        <div className={`grid grid-cols-5 ${
          language === 'ar' ? 'font-ar' : 'font-en'
        }`}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.key;
            return (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href, item.key)}
                className={`flex flex-col items-center gap-1 py-3 px-2 transition-colors duration-300 ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-500 hover:text-primary-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{t(item.key)}</span>
                {isActive && (
                  <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      {/* Mobile Bottom Padding */}
      <div className="md:hidden h-20"></div>
    </nav>
  );
}