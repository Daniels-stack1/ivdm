import { Verse, Ministry, NavItem } from './types';

// CONFIGURACIÓN DEL SITIO
// Cambia estos valores para conectar con tus servicios reales
export const SITE_CONFIG = {
  contactEmail: "info@iglesiavilassar.com",
  contactFormEndpoint: "https://formspree.io/f/tu-id-aqui", // URL de Formspree o similar
  newsletterEndpoint: "https://tu-servicio.com/subscribe", // URL de Mailchimp/MailerLite
  phone: "+34 937 00 00 00",
  address: "Rúa do Mar 123, Vilassar de Mar"
};

export const VERSES: Verse[] = [
  {
    ca: { text: "Clama a mi, i jo et respondré, i t'ensenyaré coses grans i ocultes que tu no coneixes.", reference: "Jeremies 33:3" },
    es: { text: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.", reference: "Jeremías 33:3" },
    en: { text: "Call to me and I will answer you and tell you great and unsearchable things you do not know.", reference: "Jeremiah 33:3" }
  },
  {
    ca: { text: "Perquè tant va estimar Déu el món, que va donar el seu Fill unigènit, perquè tot aquell qui creu en ell no es perdi, sinó que tingui vida eterna.", reference: "Joan 3:16" },
    es: { text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.", reference: "Juan 3:16" },
    en: { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16" }
  },
  {
    ca: { text: "El Senyor és el meu pastor; no em mancarà res. En llocs de pastures delicades em farà descansar.", reference: "Salms 23:1-2" },
    es: { text: "El Señor es mi pastor; nada me faltará. En lugares de delicados pastos me hará descansar.", reference: "Salmos 23:1-2" },
    en: { text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures.", reference: "Psalm 23:1-2" }
  },
  {
    ca: { text: "Tot ho puc en Crist que em enforteix.", reference: "Filipencs 4:13" },
    es: { text: "Todo lo puedo en Cristo que me fortalece.", reference: "Filipenses 4:13" },
    en: { text: "I can do all this through him who gives me strength.", reference: "Philippians 4:13" }
  },
  {
    ca: { text: "Llàntia és als meus peus la teva paraula, i llum al meu camí.", reference: "Salms 119:105" },
    es: { text: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.", reference: "Salmos 119:105" },
    en: { text: "Your word is a lamp for my feet, a light on my path.", reference: "Psalm 119:105" }
  },
  {
    ca: { text: "No temis, perquè jo sóc amb tu; no desmais, perquè jo sóc el teu Déu.", reference: "Isaïes 41:10" },
    es: { text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.", reference: "Isaías 41:10" },
    en: { text: "So do not fear, for I am with you; do not be dismayed, for I am your God.", reference: "Isaiah 41:10" }
  }
];

export const MINISTRIES: Ministry[] = [
  {
    ca: { title: "Lloança", description: "Un equip dedicat a guiar la congregació en l'adoració a través de la música i l'art." },
    es: { title: "Alabanza", description: "Un equipo dedicado a guiar a la congregación en adoración a través de la música y el arte." },
    en: { title: "Worship", description: "A team dedicated to leading the congregation in worship through music and art." },
    iconName: "music"
  },
  {
    ca: { title: "Escola Dominical", description: "Ensenyament bíblic adaptat per a nens de totes les edats, formant el futur de l'església." },
    es: { title: "Escuela Dominical", description: "Enseñanza bíblica adaptada para niños de todas las edades, formando el futuro de la iglesia." },
    en: { title: "Sunday School", description: "Biblical teaching tailored for children of all ages, shaping the future of the church." },
    iconName: "baby"
  },
  {
    ca: { title: "Joves", description: "Un espai per connectar, créixer i afrontar els reptes de la joventut amb fe." },
    es: { title: "Jóvenes", description: "Un espacio para conectar, crecer y enfrentar los desafíos de la juventud con fe." },
    en: { title: "Youth", description: "A space to connect, grow and face the challenges of youth with faith." },
    iconName: "users"
  },
  {
    ca: { title: "Obra Social", description: "Estenent la mà d'ajuda a la nostra comunitat local a Vilassar de Mar." },
    es: { title: "Obra Social", description: "Extendiendo la mano de ayuda a nuestra comunidad local en Vilassar de Mar." },
    en: { title: "Social Work", description: "Extending a helping hand to our local community in Vilassar de Mar." },
    iconName: "heart"
  },
  {
    ca: { title: "Estudis Bíblics", description: "Aprofundint en les Escriptures cada setmana per créixer en coneixement i gràcia." },
    es: { title: "Estudis Bíblics", description: "Profundizando en las Escrituras cada semana para crecer en conocimiento y gracia." },
    en: { title: "Bible Studies", description: "Deepening our understanding of the Scriptures every week to grow in knowledge and grace." },
    iconName: "book"
  },
  {
    ca: { title: "Família", description: "Enfortint els lligams a la llar amb principis bíblics per a matrimonis i criança." },
    es: { title: "Familia", description: "Fortaleciendo los lazos en el hogar con principios bíblicos para matrimonios y crianza." },
    en: { title: "Family", description: "Strengthening ties at home with biblical principles for marriages and parenting." },
    iconName: "home"
  }
];

export const NAV_ITEMS: NavItem[] = [
  { ca: "Inici", es: "Inicio", en: "Home", href: "#inicio" },
  { ca: "Qui Som", es: "Quiénes Somos", en: "About Us", href: "#quienes-somos" },
  { ca: "Ministeris", es: "Ministerios", en: "Ministries", href: "#ministerios" },
  { ca: "Contacte", es: "Contacto", en: "Contact", href: "#contacto" },
];

export const UI_STRINGS = {
  hero: {
    ca: "Versicle del Dia",
    es: "Versículo del Día",
    en: "Verse of the Day"
  },
  about: {
    ca: {
      title: "Benvinguts a Casa",
      quote: "On l'amor de Déu es fa tangible en la nostra comunitat.",
      p1: "L'Església Evangèlica de Vilassar de Mar és més que un edifici; som una família unida per la fe. Creiem en compartir les bones noves, servir al nostre proïsme amb humilitat i créixer junts en gràcia.",
      p2: "No importa la teva història, els teus dubtes o d'on vinguis. Aquí trobaràs braços oberts i un lloc on pertànyer.",
      button: "Coneix-ne més"
    },
    es: {
      title: "Bienvenidos a Casa",
      quote: "Donde el amor de Dios se hace tangible en nuestra comunidad.",
      p1: "La Iglesia Evangélica de Vilassar de Mar es más que un edificio; somos una familia unida por la fe. Creemos en compartir las buenas nuevas, servir a nuestro prójimo con humildad y crecer juntos en gracia.",
      p2: "No importa tu historia, tus dudas o de dónde vengas. Aquí encontrarás brazos abiertos y un lugar al que pertenecer.",
      button: "Conoce más"
    },
    en: {
      title: "Welcome Home",
      quote: "Where God's love becomes tangible in our community.",
      p1: "The Evangelical Church of Vilassar de Mar is more than a building; we are a family united by faith. We believe in sharing the good news, serving our neighbor with humility, and growing together in grace.",
      p2: "No matter your story, your doubts, or where you come from. Here you will find open arms and a place to belong.",
      button: "Learn more"
    }
  },
  newsletter: {
    ca: {
      title: "Uneix-te al nostre butlletí",
      desc: "Rep versicles setmanals, notícies de l'església i dates d'esdeveniments importants.",
      placeholder: "El teu correu electrònic",
      success: "Gràcies per subscriure-t'hi!"
    },
    es: {
      title: "Únete a nuestro boletín",
      desc: "Recibe mensajes semanales, noticias de la iglesia y fechas de eventos importantes.",
      placeholder: "Tu correo electrónico",
      success: "¡Gracias por suscribirte!"
    },
    en: {
      title: "Join our newsletter",
      desc: "Receive weekly messages, church news, and important event dates.",
      placeholder: "Your email address",
      success: "Thanks for subscribing!"
    }
  },
  ministries: {
    ca: {
      label: "La nostra tasca",
      title: "Ministeris",
      desc: "Cada membre té un propòsit. Descobreix les diferents àrees on servim a Déu i als altres."
    },
    es: {
      label: "Nuestra Labor",
      title: "Ministerios",
      desc: "Cada miembro tiene un propósito. Descubre las diferentes áreas donde servimos a Dios y a los demás."
    },
    en: {
      label: "Our Work",
      title: "Ministries",
      desc: "Every member has a purpose. Discover the different areas where we serve God and others."
    }
  },
  contact: {
    ca: {
      title: "Contacta amb nosaltres",
      subtitle: "Som aquí per servir-te.",
      address: "Adreça",
      hours: "Horaris",
      phone: "Telèfon",
      email: "Email",
      nameLabel: "Nom",
      emailLabel: "Email",
      msgLabel: "Missatge",
      msgPlaceholder: "Escriu el teu missatge aquí...",
      required: "Requerit",
      invalid: "Invàlid",
      sending: "Enviant...",
      send: "Enviar",
      successTitle: "Missatge enviat!",
      successDesc: "Et respondrem aviat."
    },
    es: {
      title: "Contáctanos",
      subtitle: "Estamos aquí para servirte.",
      address: "Dirección",
      hours: "Horarios",
      phone: "Teléfono",
      email: "Email",
      nameLabel: "Nombre",
      emailLabel: "Email",
      msgLabel: "Mensaje",
      msgPlaceholder: "Escribe tu mensaje aquí...",
      required: "Requerido",
      invalid: "Inválido",
      sending: "Enviando...",
      send: "Enviar",
      successTitle: "¡Mensaje enviado!",
      successDesc: "Te responderemos pronto."
    },
    en: {
      title: "Contact Us",
      subtitle: "We are here to serve you.",
      address: "Address",
      hours: "Schedules",
      phone: "Phone",
      email: "Email",
      nameLabel: "Name",
      emailLabel: "Email",
      msgLabel: "Message",
      msgPlaceholder: "Write your message here...",
      required: "Required",
      invalid: "Invalid",
      sending: "Sending...",
      send: "Send",
      successTitle: "Message sent!",
      successDesc: "We will respond soon."
    }
  },
  footer: {
    ca: "Portant llum i esperança a la nostra comunitat.",
    es: "Llevando luz y esperanza a nuestra comunidad.",
    en: "Bringing light and hope to our community."
  }
};