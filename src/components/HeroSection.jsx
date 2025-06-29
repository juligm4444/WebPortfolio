import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setShowParagraph(true), 2500); // match typewriter duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-2 sm:px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="typewriter inline-block text-primary text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight break-words">
            {t('hero.greeting')}
          </h1>
          {showParagraph && (
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-d">
              {t('hero.description')}
            </p>
          )}
          {showParagraph && (
            <div className="pt-4 opacity-0 animate-fade-in-delay-d">
              <a href="#projects" className="general-button">
                {t('hero.button')}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          {t('hero.scroll', { defaultValue: 'Scroll Down' })}
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
