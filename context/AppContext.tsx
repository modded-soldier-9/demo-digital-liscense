import React, { createContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { User, License, Fine, Language } from '../types';
import { mockUser, mockLicense, mockFines } from '../data/mockData';
import { translations } from '../data/translations';

type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  user: User;
  license: License;
  fines: Fine[];
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('app-language');
    return (savedLang as Language) || Language.English;
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('app-language', language);
  }, [language]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };
  
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  }

  const t = useMemo(() => {
    return (key: string): string => {
      const langTranslations = translations[language];
      if (langTranslations && key in langTranslations) {
        return langTranslations[key];
      }
      // Fallback to English
      const englishTranslations = translations[Language.English];
      if (englishTranslations && key in englishTranslations) {
        return englishTranslations[key];
      }
      // Last resort: return the key itself
      return key;
    };
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
    user: mockUser,
    license: mockLicense,
    fines: mockFines,
    theme,
    setTheme,
  }), [language, theme, t]);


  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};