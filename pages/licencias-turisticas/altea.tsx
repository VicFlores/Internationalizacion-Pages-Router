import React from 'react';
import { LanguageWrapper } from '../components/shared/LanguageWrapper/LanguageWrapper';
import { LanguageButton } from '../components/shared/LanguageButton/LanguageButton';
import { EnAlteaLicense } from '../components/AlteaLicense/EnAlteaLicense';
import { FrAlteaLicense } from '../components/AlteaLicense/FrAlteaLicense';
import { AlteaLicense } from '../components/AlteaLicense/AlteaLicense';

const AlteaPage = () => {
  return (
    <section>
      <LanguageWrapper
        defaultComponent={<AlteaLicense />}
        enComponent={<EnAlteaLicense />}
        frComponent={<FrAlteaLicense />}
      />

      <LanguageButton />
    </section>
  );
};

export default AlteaPage;
