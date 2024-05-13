import { useRouter } from 'next/router';
import React from 'react';

export const LanguageButton = () => {
  const router = useRouter();

  const changeLocale = (newLocale: string) => {
    router.push(router.pathname, router.pathname, { locale: newLocale });
  };
  return (
    <>
      <button onClick={() => changeLocale('en')}>English</button>
      <button onClick={() => changeLocale('fr')}>French</button>
      <button onClick={() => changeLocale('es')}>Spanish</button>
    </>
  );
};
