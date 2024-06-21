import { LanguageWrapper } from './components/shared/LanguageWrapper/LanguageWrapper';
import { LanguageButton } from './components/shared/LanguageButton/LanguageButton';

const HomePage = () => {
  return (
    <section>
      <LanguageWrapper
        defaultComponent={<h1>Hola, mundo!</h1>}
        enComponent={<h1>Hello, World!</h1>}
        frComponent={<h1>Bonjour, le monde!</h1>}
      />

      <LanguageButton />
    </section>
  );
};

export default HomePage;
