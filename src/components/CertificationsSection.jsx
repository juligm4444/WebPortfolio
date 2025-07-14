import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const certifications = [
  {
    name: 'Python Essentials 1',
    company: 'Cisco',
    date: '02/06/2025',
    badge: '/assets/badges/python-essentials-1.png',
    pdf: '/files/PythonEssentials1.pdf',
  },
  {
    name: 'Python Essentials 2',
    company: 'Cisco',
    date: '08/06/2025',
    badge: '/assets/badges/python-essentials-2.png',
    pdf: '/files/PythonEssentials2.pdf',
  },
  {
    name: 'JavaScript Essentials 1',
    company: 'Cisco',
    date: '13/07/2025',
    badge: '/assets/badges/javascript-essentials-1.png',
    pdf: '/files/JavaScriptEssentials1.pdf',
  },
  {
    name: 'JavaScript Essentials 2',
    company: 'Cisco',
    date: '14/07/2025',
    badge: '/assets/badges/javascript-essentials-2.png',
    pdf: '/files/JavaScriptEssentials2.pdf',
  },
  {
    name: 'Google UX Design Professional',
    company: 'Google',
    date: '',
    badge: '',
    pdf: '',
  },
  {
    name: 'Adobe Graphic Designer',
    company: 'Adobe',
    date: '',
    badge: '',
    pdf: '',
  },
  {
    name: 'Epic Games Game Design',
    company: 'Epic Games',
    date: '',
    badge: '',
    pdf: '',
  },
  {
    name: 'Professional Scrum Master',
    company: 'Scrum Network',
    date: '',
    badge: '',
    pdf: '',
  },
  {
    name: 'Game Design and Development with Unity',
    company: 'Michigan State University',
    date: '',
    badge: '',
    pdf: '',
  },
];

export const CertificationsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('certifications.title1')}{' '}
          <span className="text-primary">{t('certifications.title2')}</span>
        </h2>
        <div className="flex flex-col gap-6">
          {certifications
            .filter((cert) => cert.pdf)
            .map((cert, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg shadow-xs p-6 card-hover
                   grid grid-cols-1 sm:grid-cols-3 items-center gap-6 text-center"
              >
                <div className="flex flex-col items-center justify-center sm:items-start sm:text-left sm:pl-0 sm:ml-[0.7rem]">
                  <h3 className="text-primary font-semibold text-lg">{cert.name}</h3>
                  <p className="text-muted-foreground text-sm">{cert.company}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </div>
                <div className="flex items-center justify-center h-20">
                  {cert.badge ? (
                    <img
                      src={cert.badge}
                      alt={`${cert.company} badge`}
                      className="w-20 h-20 object-contain"
                    />
                  ) : (
                    <div className="w-20 h-20" />
                  )}
                </div>
                <div className="flex items-center justify-center h-20 sm:justify-end sm:pr-0 sm:mr-[0.7rem]">
                  <a
                    href={cert.pdf}
                    download
                    className="general-button flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={20} />
                    <span className="hidden sm:inline">{t('certifications.button')}</span>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
