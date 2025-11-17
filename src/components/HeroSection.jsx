import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-32"
    >
      {/* Time and Greeting Section - Centered on mobile, top left on larger screens */}
      <div className="absolute top-4 sm:top-8 left-1/2 sm:left-8 transform -translate-x-1/2 sm:translate-x-0 z-40 space-y-2 text-center sm:text-left">
        <div className="text-[20px] lg:text-[22px] font-thin text-muted-foreground">
          {getTimeGreeting()}
        </div>
        <div className="text-[20px] lg:text-[22px] font-thin text-muted-foreground">
          {formatDateTime()}
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12 lg:space-y-16 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Description Text - Main Quote (First, Bigger) */}
        {showParagraph && (
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="typewriter text-2xl sm:text-3xl md:text-4xl lg:text-h1 font-bold text-muted-foreground leading-relaxed">
              {t('hero.description')}
            </h1>
          </div>
        )}

        {/* Main Name/Title (Second, Smaller) */}
        {isTranslationReady && (
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-primary text-h2 font-light tracking-tight leading-tight">
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
