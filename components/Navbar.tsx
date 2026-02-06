import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from './LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const visitUsText = {
    ca: 'Visita’ns',
    es: 'Visítanos',
    en: 'Visit Us'
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto max-w-site px-6 flex justify-between items-center">
        {/* Logo Section */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-3 group"
        >
          <Logo className={`h-10 w-10 transition-colors ${scrolled ? 'text-teal' : 'text-dark'}`} />
          <div className="flex flex-col">
            <span className={`font-bold font-sans text-lg leading-none tracking-tight ${scrolled ? 'text-dark' : 'text-dark'}`}>
              VILASSAR DE MAR
            </span>
            <span className={`text-[10px] font-sans uppercase tracking-widest ${scrolled ? 'text-gold' : 'text-teal'}`}>
              {language === 'ca' ? 'Església Evangèlica' : language === 'es' ? 'Iglesia Evangélica' : 'Evangelical Church'}
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-[13px] font-sans font-medium uppercase tracking-wide hover:text-teal transition-colors duration-200 ${scrolled ? 'text-dark/80' : 'text-dark/90'}`}
              >
                {item[language]}
              </a>
            ))}
          </div>

          <div className="h-4 w-px bg-dark/10"></div>

          {/* Language Switcher */}
          <div className="flex items-center gap-3 text-[11px] font-bold font-sans">
            {(['ca', 'es', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`transition-colors uppercase ${language === lang ? 'text-teal underline' : 'text-dark/40 hover:text-teal'}`}
              >
                {lang}
              </button>
            ))}
          </div>

          <a 
            href="#contacto"
            onClick={(e) => handleNavClick(e, '#contacto')}
            className={`px-5 py-2 rounded-full border text-xs font-sans font-semibold transition-all duration-300 ${
              scrolled 
                ? 'border-teal text-teal hover:bg-teal hover:text-cream' 
                : 'border-dark text-dark hover:bg-dark hover:text-cream'
            }`}
          >
            {visitUsText[language]}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${scrolled ? 'text-dark' : 'text-dark'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-cream border-t border-dark/5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-serif font-medium text-dark hover:text-teal"
            >
              {item[language]}
            </a>
          ))}
          
          <div className="h-px w-full bg-dark/5 my-2"></div>
          
          <div className="flex gap-6">
            {(['ca', 'es', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => { setLanguage(lang); setIsOpen(false); }}
                className={`text-sm font-bold uppercase ${language === lang ? 'text-teal underline' : 'text-dark/40'}`}
              >
                {lang === 'ca' ? 'Català' : lang === 'es' ? 'Español' : 'English'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;