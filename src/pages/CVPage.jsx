import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const CV = () => {
  const { t, i18n } = useTranslation();

  const cvPath = i18n.language === 'es' ? '/files/CV-Español.pdf' : '/files/CV-English.pdf';

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 xl:ml-64 flex-1 flex flex-col">
        <div className="pt-20 py-24 px-4 flex-1">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('cv.title1')} <span className="text-primary">{t('cv.title2')}</span>
            </h1>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[8.5/11] w-full">
                <iframe
                  src={cvPath}
                  className="w-full h-full border-0"
                  title={t('cv.preview-title')}
                />
              </div>
            </div>
            <div className="text-center mt-8 mb-8">
              <a href={cvPath} download className="general-button inline-flex items-center gap-2">
                <Download size={20} />
                {t('about.button2')}
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
