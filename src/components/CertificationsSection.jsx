import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { certifications } from '../data/certifications';
import { useInView } from '../hooks/useInView';

const CertificationCard = ({ cert }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useTranslation();

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
          className={cn(
            'absolute inset-0 w-full h-full rounded-lg shadow-lg flex flex-col items-center justify-center p-4 text-center space-y-2 sm:space-y-4'
          )}
          style={{ backfaceVisibility: 'hidden', background: 'var(--cert-front-bg)' }}
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
            <p
              className={cn('font-semibold text-lg leading-tight', '!text-[var(--cert-name-text)]')}
            >
              {cert.name}
            </p>
            <p
              className="text-base md:text-sm font-medium"
              style={{ color: 'var(--cert-info-text)' }}
            >
              {cert.company}
            </p>
            <p
              className="text-base md:text-sm font-medium"
              style={{ color: 'var(--cert-info-text)' }}
            >
              {cert.date}
            </p>
          </div>
        </div>

        {/* Back of card - Skills and Download */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg bg-[var(--cert-back-bg)] shadow-lg flex flex-col justify-between p-4 text-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="space-y-2 flex-1 flex flex-col justify-center">
            <h4 className="cert-key-skills-label !text-[var(--color4)] font-semibold text-sm no-subtitle-brackets">
              {t('certifications.skills')}
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {cert.skills?.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className={cn(
                    'px-2 py-1 text-xs rounded inline-block font-medium transition-transform duration-200 hover:scale-110',
                    'bg-[var(--cert-skill-bg)] !text-[var(--cert-skill-text)]'
                  )}
                >
                  {t(`certifications.certSkills.${skill}`) || skill}
                </span>
              ))}
              {cert.skills?.length > 4 && (
                <span
                  className={cn(
                    'px-2 py-1 text-xs rounded inline-block font-medium transition-transform duration-200 hover:scale-110',
                    'bg-[var(--cert-skill-bg)] !text-[var(--cert-skill-text)]'
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
            className="general-button flex items-center gap-2 justify-center mx-auto text-sm px-4 py-2 mt-2"
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

export const CertificationsSection = ({ embedded = false }) => {
  const { t } = useTranslation();
  const titleRef = useInView('reveal--init');
  const gridRef = useInView();

  const inner = (
    <div className="container mx-auto max-w-6xl">
      {!embedded && (
        <h2 ref={titleRef} className="text-h1 font-bold mb-12 text-center text-primary">
          {t('certifications.title1')} {t('certifications.title2')}
        </h2>
      )}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 mb-8">
        {certifications
          .filter((cert) => cert.pdf)
          .map((cert, idx) => (
            <CertificationCard key={cert.id || idx} cert={cert} />
          ))}
      </div>
    </div>
  );

  if (embedded) return inner;

  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-24 px-4 bg-secondary/30 mb-8">
      {inner}
    </section>
  );
};
