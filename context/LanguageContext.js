import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  en: { welcome: 'Welcome', favorites: 'Favorites', gallery: 'Gallery', settings: 'Settings', cart: 'Cart' },
  es: { welcome: 'Bienvenido', favorites: 'Favoritos', gallery: 'Galería', settings: 'Ajustes', cart: 'Carrito' }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
