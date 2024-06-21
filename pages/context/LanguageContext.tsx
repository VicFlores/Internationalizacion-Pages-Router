import React, { createContext, useState, useContext } from 'react';

export interface LanguageContextProps {
  preferredLanguage: string;
  setPreferredLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [preferredLanguage, setPreferredLanguage] = useState('es');

  return (
    <LanguageContext.Provider
      value={{ preferredLanguage, setPreferredLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
