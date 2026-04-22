import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [isTranslationReady, setIsTranslationReady] = useState(false);
  const { t, ready } = useTranslation();

  // Wait for translation to be ready before starting animations
  useEffect(() => {
    if (ready) {
      setIsTranslationReady(true);
      const timer = setTimeout(() => setShowParagraph(true), 200); // start typewriter almost instantly
      return () => clearTimeout(timer);
    }
  }, [ready]);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 sm:px-8 md:px-12"
    >
      <div className="w-full max-w-5xl text-center">
        {isTranslationReady && (
          <p className="hero-fade-in mt-8 text-base sm:text-lg md:text-2xl font-light text-muted-foreground max-w-4xl mx-auto">
            {t('hero.greeting')}
          </p>
        )}

        {showParagraph && (
          <h1 className="hero-fade-in-d1 typewriter text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mt-6">
            <Trans
              i18nKey="hero.description"
              components={{
                1: <span />,
                2: <span />,
              }}
            />
          </h1>
        )}

        {showParagraph && (
          <div className="hero-fade-in-d2 mt-10">
            <Link to="/projects" className="general-button">
              {t('hero.button')}
            </Link>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-scroll-hint">
        <span className="text-sm text-muted-foreground mb-2">
          {t('hero.scroll', { defaultValue: 'Scroll Down' })}
        </span>
        <ArrowDown className="h-5 w-5 text-[var(--color4)]" />
      </div>
    </section>
  );
};
