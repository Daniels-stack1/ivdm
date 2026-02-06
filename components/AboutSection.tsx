import React from 'react';
import FadeInView from './FadeInView';
import { useLanguage } from './LanguageContext';
import { UI_STRINGS } from '../constants';

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_STRINGS.about[language];

  return (
    <section id="quienes-somos" className="relative w-full bg-dark text-cream overflow-hidden">
      
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1544427928-c49cdfebf194?auto=format&fit=crop&q=80&w=1920&grayscale=1" 
          alt="Community gathering" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/60"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-site px-6 py-32 relative z-10">
        <FadeInView className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-5xl md:text-6xl font-medium text-cream font-serif">
              {t.title}
            </h2>
            <div className="h-1 w-24 bg-gold"></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-cream/90 font-serif italic font-light">
            "{t.quote}"
          </p>
          
          <div className="space-y-6 text-cream/80 font-sans leading-relaxed text-lg max-w-2xl mt-4">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>

          <div className="pt-8">
            <a 
              href="#ministerios" 
              className="inline-block px-8 py-3 border border-cream/30 hover:border-gold hover:text-gold text-cream font-sans uppercase tracking-widest text-sm transition-all duration-300 rounded-full"
            >
              {t.button}
            </a>
          </div>

        </FadeInView>
      </div>
    </section>
  );
};

export default AboutSection;