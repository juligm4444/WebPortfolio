import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { certifications } from '../data/certifications';

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
      className="w-full h-64 perspective-[1000px] cursor-pointer"
      onClick={handleInteraction}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-full transform-3d transition-transform duration-700 ease-in-out ${
          isFlipped ? 'transform-[rotateY(180deg)]' : ''
        }`}
      >
        {/* Front of card - Badge Image, Name, Company, and Date */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg border border-border bg-card shadow-lg flex flex-col items-center justify-center p-4 text-center space-y-3">
          <div className="h-28 w-full flex items-center justify-center">
            <img
              src={cert.badge}
              alt={`${cert.name} badge`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-primary font-semibold text-sm leading-tight">{cert.name}</h3>
            <p className="text-foreground font-medium text-xs">{cert.company}</p>
            <p className="text-muted-foreground text-xs">{cert.date}</p>
          </div>
        </div>

        {/* Back of card - Skills and Download */}
        <div className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] rounded-lg border border-border bg-card shadow-lg flex flex-col justify-between p-4 text-center">
          <div className="space-y-2 flex-1 flex flex-col justify-center">
            <h4 className="text-primary font-semibold text-sm">{t('certifications.skills')}</h4>
            <div className="flex flex-col gap-1 items-center">
              {cert.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20 inline-block"
                >
                  {t(`certifications.certSkills.${skill}`) || skill}
                </span>
              ))}
            </div>
          </div>
          <a
            href={cert.pdf}
            download
            className="general-button flex items-center gap-2 justify-center mx-auto text-xs px-4 py-1 mt-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Download size={12} />
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
    <section id="certifications" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-6xl font-bold mb-12 text-center">
          {t('certifications.title1')}{' '}
          <span className="text-primary">{t('certifications.title2')}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
