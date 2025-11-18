import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const CVSection = () => {
  const { t, i18n } = useTranslation();

  const cvPath = i18n.language === 'es' ? '/files/CV-Español.pdf' : '/files/CV-English.pdf';

  return (
    <section id="cv" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-h1 font-bold mb-12 text-center">
          {t('cv.title1')} {t('cv.title2')}
        </h2>

        {/* CV Preview */}
        <div className="bg-card rounded-lg overflow-hidden shadow-lg mb-12">
          <div className="aspect-[8.5/11] w-full">
            <iframe src={cvPath} className="w-full h-full border-0" title={t('cv.preview-title')} />
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a href={cvPath} download className="general-button inline-flex items-center gap-2">
            <Download size={20} />
            {t('about.button2')}
          </a>
        </div>
      </div>
    </section>
  );
};
