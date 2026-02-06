import React from 'react';
import { MINISTRIES, UI_STRINGS } from '../constants';
import { Users, Music, BookOpen, Heart, Baby, Home } from 'lucide-react';
import FadeInView from './FadeInView';
import { useLanguage } from './LanguageContext';

const iconMap = {
  users: Users,
  music: Music,
  book: BookOpen,
  heart: Heart,
  baby: Baby,
  home: Home,
};

const MinistriesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_STRINGS.ministries[language];

  return (
    <section id="ministerios" className="w-full py-24 bg-cream">
      <div className="container mx-auto max-w-site px-6">
        <FadeInView className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-teal font-sans font-bold tracking-widest text-xs uppercase mb-3 block">
            {t.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-dark font-serif mb-6">
            {t.title}
          </h2>
          <p className="text-dark/70 font-sans text-lg">
            {t.desc}
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MINISTRIES.map((ministry, index) => {
            const Icon = iconMap[ministry.iconName];
            const content = ministry[language];
            return (
              <FadeInView key={index} delay={index * 100}>
                <div 
                  className="group p-10 rounded-xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-transparent hover:border-teal h-full"
                >
                  <div className="w-12 h-12 text-teal mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-dark mb-4 group-hover:text-teal transition-colors duration-300">
                    {content.title}
                  </h3>
                  <p className="text-dark/60 font-sans leading-relaxed">
                    {content.description}
                  </p>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;