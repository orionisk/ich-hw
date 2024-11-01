export type Language = 'en' | 'ru';

export interface Translations {
  title: string;
  description: string;
  switchLanguage: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    title: 'Language Switcher',
    description: 'English language has been chosen',
    switchLanguage: 'Switch to Russian'
  },
  ru: {
    title: 'Переключатель языка',
    description: 'Был выбран русский язык',
    switchLanguage: 'Переключить на английский'
  }
};
