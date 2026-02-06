import React, { useState, useEffect } from 'react';
import { getDailyVerse } from '../utils';
import { Verse } from '../types';
import { ChevronDown } from 'lucide-react';
import FadeInView from './FadeInView';
import { useLanguage } from './LanguageContext';
import { UI_STRINGS } from '../constants';

const HeroVerse: React.FC = () => {
  const [verse, setVerse] = useState<Verse | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    setVerse(getDailyVerse());
  }, []);

  if (!verse) return null;

  return (
    <section 
      id="inicio" 
      className="relative w-full min-h-[90vh] flex flex-col justify-center items-center bg-cream px-6 pt-20 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-teal/5 blur-3xl"></div>
      </div>

      <FadeInView className="relative z-10 w-full max-w-site text-center space-y-10 flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-teal font-sans font-bold uppercase tracking-widest text-[10px]">
            {UI_STRINGS.hero[language]}
          </span>
          <div className="w-12 h-0.5 bg-gold rounded-full"></div>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl text-dark leading-tight md:leading-snug font-medium max-w-4xl px-4">
          "{verse[language].text}"
        </h1>
        
        <div className="inline-block px-6 py-2 border-l-4 border-teal bg-white/50">
          <p className="text-lg md:text-xl text-olive font-sans font-bold tracking-wide uppercase">
            {verse[language].reference}
          </p>
        </div>
      </FadeInView>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#quienes-somos" className="text-teal/60 hover:text-teal transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroVerse;