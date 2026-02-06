export type Language = 'ca' | 'es' | 'en';

export interface Verse {
  ca: { text: string; reference: string };
  es: { text: string; reference: string };
  en: { text: string; reference: string };
}

export interface Ministry {
  ca: { title: string; description: string };
  es: { title: string; description: string };
  en: { title: string; description: string };
  iconName: 'users' | 'music' | 'book' | 'heart' | 'baby' | 'home';
}

export interface NavItem {
  ca: string;
  es: string;
  en: string;
  href: string;
}