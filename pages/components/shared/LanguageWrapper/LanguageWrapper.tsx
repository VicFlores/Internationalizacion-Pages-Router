import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

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

  const locale = router.locale;

  return (
    <>
      {locale === 'en' && enComponent ? (
        <enComponent.type {...enComponent.props} />
      ) : locale === 'fr' && frComponent ? (
        <frComponent.type {...frComponent.props} />
      ) : (
        <defaultComponent.type {...defaultComponent.props} />
      )}
    </>
  );
};
