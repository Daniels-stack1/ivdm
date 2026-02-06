import React from 'react';
import Logo from './Logo';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { UI_STRINGS } from '../constants';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="w-full bg-dark border-t border-white/5 py-12 text-center">
      <div className="container mx-auto max-w-site px-6 flex flex-col items-center gap-6">
        <Logo className="h-12 w-12 text-teal" />
        
        <p className="text-cream/40 text-sm font-sans max-w-md mx-auto">
          &copy; {new Date().getFullYear()} Iglesia Evangélica Vilassar de Mar. <br />
          {UI_STRINGS.footer[language]}
        </p>
        
        <div className="flex gap-8 mt-2">
          <a 
            href="#" 
            className="text-gold hover:text-cream hover:scale-110 transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook size={24} strokeWidth={1.5} />
          </a>
          <a 
            href="#" 
            className="text-gold hover:text-cream hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} strokeWidth={1.5} />
          </a>
          <a 
            href="#" 
            className="text-gold hover:text-cream hover:scale-110 transition-all duration-300"
            aria-label="YouTube"
          >
            <Youtube size={24} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;