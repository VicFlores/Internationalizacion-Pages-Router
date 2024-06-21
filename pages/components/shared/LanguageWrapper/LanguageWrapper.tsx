/* eslint-disable react-hooks/exhaustive-deps */
import { useLanguage } from 'app/pages/hooks/useLanguage';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';

interface LanguageWrapperProps {
  frComponent?: ReactElement;
  enComponent?: ReactElement;
  defaultComponent: ReactElement;
}

export const LanguageWrapper = ({
  frComponent,
  enComponent,
  defaultComponent,
}: LanguageWrapperProps) => {
  const router = useRouter();
  const { preferredLanguage, setPreferredLanguage } = useLanguage();

  useEffect(() => {
    const preferredLanguage = navigator.language.split('-')[0];
    setPreferredLanguage(preferredLanguage);

    router.push(router.pathname, router.pathname, {
      locale: preferredLanguage,
    });
  }, [setPreferredLanguage]);

  return (
    <>
      {preferredLanguage === 'en' && enComponent ? (
        <enComponent.type {...enComponent.props} />
      ) : preferredLanguage === 'fr' && frComponent ? (
        <frComponent.type {...frComponent.props} />
      ) : (
        <defaultComponent.type {...defaultComponent.props} />
      )}
    </>
  );
};
