import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
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

  // Update time every minute
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timeInterval);
  }, []);

  // Helper function to get greeting based on time
  const getTimeGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 0 && hour <= 12) {
      return t('hero.timeGreeting.morning');
    } else if (hour >= 12 && hour <= 18) {
      return t('hero.timeGreeting.afternoon');
    } else {
      return t('hero.timeGreeting.evening');
    }
  };

  // Helper function to format date and time
  const formatDateTime = () => {
    const days = t('hero.dateTime.days', { returnObjects: true });
    const months = t('hero.dateTime.months', { returnObjects: true });

    const dayName = days[currentTime.getDay()];
    const monthName = months[currentTime.getMonth()];
    const dayNumber = currentTime.getDate();
    const hour = currentTime.getHours().toString().padStart(2, '0');
    const minute = currentTime.getMinutes().toString().padStart(2, '0');

    return `${dayName}, ${monthName} ${dayNumber} - ${hour}:${minute}`;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-2 sm:px-4"
    >
      <div className="absolute top-13 left-13 z-40">
        <span className="text-xl font-bold text-muted-foreground">{getTimeGreeting()}</span>
      </div>
      <div className="absolute top-20 left-13 z-40">
        <span className="text-xl font-bold text-muted-foreground">{formatDateTime()}</span>
      </div>

      {isTranslationReady && (
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 max-w-10xl px-4 z-10">
          <h1 className="text-primary text-justify text-2xl sm:text-4xl md:text-5xl font-light tracking-tight break-words">
            {t('hero.greeting')}
          </h1>
        </div>
      )}
      <div className="container max-w-8xl mx-auto text-center z-10 mt-10">
        <div className="space-y-10">
          {showParagraph && (
            <div className="max-w-8xl mx-auto">
              <h1 className="typewriter text-lg sm:text-xl md:text-6xl font-bold text-muted-foreground">
                {t('hero.description')}
              </h1>
            </div>
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
