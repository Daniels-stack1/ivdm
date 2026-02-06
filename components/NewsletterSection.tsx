import React, { useState, useEffect } from 'react';
import { Send, Check } from 'lucide-react';
import FadeInView from './FadeInView';
import { useLanguage } from './LanguageContext';
import { UI_STRINGS, SITE_CONFIG } from '../constants';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'submitting'>('idle');
  const { language } = useLanguage();
  const t = UI_STRINGS.newsletter[language];

  // EFECTO PARA CARGAR SCRIPTS EXTERNOS (Opcional)
  // Aquí podrías cargar el script de Mailchimp o MailerLite si fuera necesario
  /*
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tu-script-de-newsletter.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setStatus('submitting');

      // INTEGRACIÓN REAL:
      // Si usas una API, descomenta esto:
      /*
      try {
        await fetch(SITE_CONFIG.newsletterEndpoint, {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (err) { console.error(err); }
      */

      // Simulación de éxito
      setTimeout(() => {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 4000);
      }, 1000);
    }
  };

  return (
    <section className="w-full py-20 bg-teal text-cream relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-site px-6 relative z-10">
        <FadeInView className="max-w-5xl mx-auto bg-dark/30 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="text-center lg:text-left flex-1 space-y-4">
              <h3 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-cream">
                {t.title}
              </h3>
              <p className="text-cream/70 font-sans text-lg md:text-xl max-w-lg leading-relaxed">
                {t.desc}
              </p>
            </div>

            <div className="flex-1 w-full max-w-md">
              <form onSubmit={handleSubmit} className="relative group">
                <input
                  type="email"
                  placeholder={t.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'success' || status === 'submitting'}
                  className={`w-full bg-cream text-dark placeholder-dark/30 px-8 py-5 rounded-2xl font-sans text-lg focus:outline-none focus:ring-4 focus:ring-gold/30 shadow-2xl transition-all ${
                    status === 'success' ? 'border-green-500' : 'border-transparent'
                  }`}
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'success' || status === 'submitting'}
                  className={`absolute right-2 top-2 bottom-2 px-8 rounded-xl flex items-center justify-center transition-all duration-500 font-bold uppercase tracking-widest text-xs ${
                    status === 'success' 
                      ? 'bg-green-500 text-white' 
                      : status === 'submitting'
                        ? 'bg-dark/50 text-cream cursor-wait'
                        : 'bg-dark text-cream hover:bg-gold hover:text-dark'
                  }`}
                >
                  {status === 'success' ? (
                    <span className="flex items-center gap-2"><Check size={18} /> OK</span>
                  ) : status === 'submitting' ? (
                    <span className="animate-pulse">...</span>
                  ) : (
                    <span className="flex items-center gap-2"><Send size={18} /> {language === 'ca' ? 'Enviar' : language === 'es' ? 'Enviar' : 'Send'}</span>
                  )}
                </button>
              </form>
              
              <p className={`text-sm mt-4 pl-2 transition-all duration-500 font-sans ${
                status === 'success' ? 'opacity-100 text-green-300' : 'opacity-0'
              }`}>
                {t.success}
              </p>
              
              {/* NOTA PARA EL DESARROLLADOR: 
                  Si decides usar un "Embed Form" directo de Mailchimp, 
                  puedes reemplazar el <form> anterior por el código HTML que te proporcionan, 
                  asegurándote de aplicar las clases de Tailwind correspondientes. */}
            </div>

          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default NewsletterSection;