import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12 lg:space-y-16 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Description Text - Main Quote (First, Bigger on mobile) */}
        {showParagraph && (
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="typewriter text-3xl sm:text-3xl md:text-4xl lg:text-h1 font-bold text-muted-foreground leading-relaxed">
              {t('hero.description')}
            </h1>
          </div>
        )}

        {/* Main Name/Title (Second, Smaller on mobile) */}
        {isTranslationReady && (
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-primary text-lg sm:text-h2 font-light tracking-tight leading-tight">
              {t('hero.greeting')}
            </h2>
          </div>
        )}

        {/* CTA Button */}
        {showParagraph && (
          <div className="pt-4 opacity-0 animate-fade-in-delay-d">
            <Link to="/technology" className="general-button">
              {t('hero.button')}
            </Link>
          </div>
        )}
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
