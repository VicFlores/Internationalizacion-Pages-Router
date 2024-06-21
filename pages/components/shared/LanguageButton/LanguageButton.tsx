import { useLanguage } from 'app/pages/hooks/useLanguage';
import React from 'react';

export const LanguageButton = () => {
  const { setPreferredLanguage } = useLanguage();

  const changeLocale = (newLocale: string) => {
    setPreferredLanguage(newLocale);
  };
  return (
    <>
      <button onClick={() => changeLocale('en')}>English</button>
      <button onClick={() => changeLocale('fr')}>French</button>
      <button onClick={() => changeLocale('es')}>Spanish</button>
    </>
  );
};
