import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import React from 'react';
import { cn } from '@/lib/utils';
import { certifications } from '../data/certifications';

const CertificationCard = ({ cert }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useTranslation();
  const [isLight, setIsLight] = useState(false);

  // Check theme on mount and when it changes
  React.useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const handleInteraction = () => {
    // For mobile, toggle on click
    if (window.innerWidth < 768) {
      setIsFlipped((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    // For desktop, show on hover
    if (window.innerWidth >= 768) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    // For desktop, hide when not hovering
    if (window.innerWidth >= 768) {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className="w-full h-64 sm:h-72 cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={handleInteraction}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card - Badge Image, Name, Company, and Date */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg border border-border bg-card shadow-lg flex flex-col items-center justify-center p-3 sm:p-4 text-center space-y-2 sm:space-y-3"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="h-20 sm:h-28 w-full flex items-center justify-center">
            <img
              src={cert.badge}
              alt={`${cert.name} badge`}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-primary font-semibold text-lg leading-tight">{cert.name}</h3>
            <p
              className={cn(
                'text-base md:text-sm',
                isLight ? 'font-medium text-gray-700' : 'font-medium text-gray-300'
              )}
            >
              {cert.company}
            </p>
            <p
              className={cn(
                'text-base md:text-sm',
                isLight ? 'font-medium text-gray-700' : 'font-medium text-gray-300'
              )}
            >
              {cert.date}
            </p>
          </div>
        </div>

        {/* Back of card - Skills and Download */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg border border-border bg-card shadow-lg flex flex-col justify-between p-3 sm:p-4 text-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="space-y-2 flex-1 flex flex-col justify-center">
            <h4 className="text-primary font-semibold text-sm">{t('certifications.skills')}</h4>
            <div className="flex flex-wrap gap-1 justify-center">
              {cert.skills?.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className={cn(
                    'px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs rounded inline-block font-medium',
                    isLight
                      ? 'bg-gray-200 text-gray-800 border border-gray-300'
                      : 'bg-teal-900/50 text-teal-200 border border-teal-700/50'
                  )}
                >
                  {t(`certifications.certSkills.${skill}`) || skill}
                </span>
              ))}
              {cert.skills?.length > 4 && (
                <span
                  className={cn(
                    'px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs rounded inline-block font-medium',
                    isLight
                      ? 'bg-gray-300 text-gray-800 border border-gray-400'
                      : 'bg-orange-900/50 text-orange-200 border border-orange-700/50'
                  )}
                >
                  +{cert.skills.length - 4}
                </span>
              )}
            </div>
          </div>
          <a
            href={cert.pdf}
            download
            className="general-button flex items-center gap-1 sm:gap-2 justify-center mx-auto text-sm px-3 sm:px-4 py-1 mt-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Download size={10} className="sm:w-3 sm:h-3" />
            {t('certifications.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export const CertificationsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-h1 font-bold mb-12 text-center">
          {t('certifications.title1')} {t('certifications.title2')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
          {certifications
            .filter((cert) => cert.pdf)
            .map((cert, idx) => (
              <CertificationCard key={cert.id || idx} cert={cert} />
            ))}
        </div>
      </div>
    </section>
  );
};
