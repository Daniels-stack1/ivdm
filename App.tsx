import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroVerse from './components/HeroVerse';
import AboutSection from './components/AboutSection';
import NewsletterSection from './components/NewsletterSection';
import MinistriesSection from './components/MinistriesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';

const AppContent: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen w-full bg-cream selection:bg-teal selection:text-cream relative">
      <Navbar />
      <main className="w-full">
        <HeroVerse />
        <AboutSection />
        <NewsletterSection />
        <MinistriesSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-teal text-white shadow-lg transition-all duration-300 transform hover:bg-teal-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
        aria-label="Volver arriba"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;