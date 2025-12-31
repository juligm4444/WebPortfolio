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
      {/* Mobile Spline - shown first and smaller */}
      <div className="block md:hidden w-full flex justify-center pt-6">
        <spline-viewer
          url="https://prod.spline.design/8M4AUjTdmnH8plii/scene.splinecode"
          style={{ width: '75%', maxWidth: '320px', height: '220px', background: 'transparent' }}
          events-target="global"
        ></spline-viewer>
      </div>

      {/* Desktop Spline 3D model - hidden on mobile */}
      <div className="hidden md:block absolute right-[-10%] top-[45%] transform -translate-y-1/2 w-[50%] h-[80%] z-10">
        <spline-viewer
          url="https://prod.spline.design/8M4AUjTdmnH8plii/scene.splinecode"
          style={{ width: '100%', height: '100%', background: 'transparent' }}
          events-target="global"
        ></spline-viewer>
      </div>

      {/* Main Content - Left Aligned */}
      <div className="flex flex-col items-start justify-center text-left space-y-8 sm:space-y-12 lg:space-y-16 max-w-6xl ml-4 sm:ml-8 md:ml-12 lg:ml-16 px-6 sm:px-8 md:px-12">
        {/* Description Text - Main Quote (First, Bigger on mobile) */}
        {showParagraph && (
          <div className="w-full px-4 sm:px-6 md:px-8">
            <h1 className="typewriter text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-muted-foreground leading-tight text-left">
              {t('hero.description')}
            </h1>
          </div>
        )}

        {/* Main Name/Title (Second, Smaller on mobile) */}
        {isTranslationReady && (
          <div className="w-full px-4 sm:px-6 md:px-8">
            <h2 className="text-primary text-lg sm:text-h2 font-light tracking-tight leading-tight text-left">
              {t('hero.greeting')}
            </h2>
          </div>
        )}
      </div>

      {/* CTA Button - Above scroll down */}
      {showParagraph && (
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-d">
          <Link to="/projects" className="general-button">
            {t('hero.button')}
          </Link>
        </div>
      )}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          {t('hero.scroll', { defaultValue: 'Scroll Down' })}
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
