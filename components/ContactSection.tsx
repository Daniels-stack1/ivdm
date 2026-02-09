import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import FadeInView from './FadeInView';
import { useLanguage } from './LanguageContext';
import { UI_STRINGS, SITE_CONFIG } from '../constants';

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_STRINGS.contact[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{name?: string, email?: string}>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'submitting'>('idle');

  const validate = () => {
    let tempErrors: {name?: string, email?: string} = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = t.required;
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = t.required;
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = t.invalid;
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      
      // SI TIENES UN ENDPOINT DE FORMSPREE, DESCOMENTA ESTA PARTE:
      /*
      try {
        const response = await fetch(SITE_CONFIG.contactFormEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        }
      } catch (err) {
        console.error("Error enviando formulario", err);
        setStatus('idle');
      }
      */

      // Simulación por defecto (mientras no conectes Formspree)
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contacto" className="w-full py-24 bg-olive text-cream relative">
      <div className="container mx-auto max-w-site px-6 relative z-10">
        <FadeInView className="mb-16 text-center md:text-left">
           <h2 className="text-4xl md:text-6xl font-serif font-medium mb-4">{t.title}</h2>
           <p className="text-cream/80 text-xl font-sans max-w-xl">{t.subtitle}</p>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <FadeInView className="grid grid-cols-1 gap-6 order-2 lg:order-1">
            <div className="flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-gold mt-1 p-3 bg-white/10 rounded-lg"><MapPin size={24} /></div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-2 font-sans text-gold">{t.address}</h4>
                <p className="text-cream/90 text-lg font-serif italic">{SITE_CONFIG.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-gold mt-1 p-3 bg-white/10 rounded-lg"><Clock size={24} /></div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-2 font-sans text-gold">{t.hours}</h4>
                <p className="text-cream/90 text-lg font-serif italic">
                  {language === 'en' 
                    ? 'Sun: 11:00 AM | Thu: 6:30 PM' 
                    : language === 'ca'
                      ? 'Dg: 11:00 AM | Dj: 18:30 PM' 
                      : 'Dom: 11:00 AM | Jue: 18:30 PM'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-gold mt-1 p-3 bg-white/10 rounded-lg"><Phone size={24} /></div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-2 font-sans text-gold">{t.phone}</h4>
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-cream/90 text-lg font-serif italic hover:text-gold transition-colors">{SITE_CONFIG.phone}</a>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-gold mt-1 p-3 bg-white/10 rounded-lg"><Mail size={24} /></div>
              <div className="flex-1">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-2 font-sans text-gold">{t.email}</h4>
                <div className="flex items-center justify-between gap-4">
                  <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-cream/90 text-lg font-serif italic hover:text-gold transition-colors break-all">
                    {SITE_CONFIG.contactEmail}
                  </a>
                  <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-gold/50 hover:text-gold">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={200} className="order-1 lg:order-2">
            <div className="bg-cream text-dark p-8 md:p-10 rounded-2xl shadow-2xl w-full border border-dark/5">
              {status === 'success' ? (
                <div className="bg-teal/5 border border-teal/20 text-teal p-12 rounded-xl text-center animate-fade-in flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-20 h-20 bg-teal text-cream rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="font-medium text-3xl font-serif mb-4 text-dark">{t.successTitle}</h3>
                  <p className="text-lg font-sans opacity-70">{t.successDesc}</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[11px] font-bold text-dark/40 uppercase tracking-[0.2em] font-sans block">
                        {t.nameLabel} {errors.name && <span className="text-red-500 normal-case ml-1">- {errors.name}</span>}
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full bg-dark/5 border-b-2 px-4 py-3 text-base focus:outline-none transition-all text-dark font-serif rounded-t-lg ${errors.name ? 'border-red-400 bg-red-50' : 'border-dark/10 focus:border-teal focus:bg-white'}`}
                        placeholder={t.nameLabel}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[11px] font-bold text-dark/40 uppercase tracking-[0.2em] font-sans block">
                        {t.emailLabel} {errors.email && <span className="text-red-500 normal-case ml-1">- {errors.email}</span>}
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full bg-dark/5 border-b-2 px-4 py-3 text-base focus:outline-none transition-all text-dark font-serif rounded-t-lg ${errors.email ? 'border-red-400 bg-red-50' : 'border-dark/10 focus:border-teal focus:bg-white'}`}
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[11px] font-bold text-dark/40 uppercase tracking-[0.2em] font-sans block">{t.msgLabel}</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-dark/5 border-b-2 border-dark/10 px-4 py-3 text-base focus:outline-none focus:border-teal focus:bg-white transition-all text-dark font-serif resize-none rounded-t-lg"
                      placeholder={t.msgPlaceholder}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full text-white font-sans font-bold uppercase tracking-[0.2em] py-4 text-sm rounded-lg shadow-xl transition-all duration-300 transform active:scale-95 ${status === 'submitting' ? 'bg-teal/70 cursor-wait' : 'bg-teal hover:bg-teal-dark hover:-translate-y-1'}`}
                  >
                    {status === 'submitting' ? t.sending : t.send}
                  </button>
                </form>
              )}
            </div>
          </FadeInView>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;