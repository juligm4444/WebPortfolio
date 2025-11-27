import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CSSImageSlider } from '../components/CSSImageSlider';

export const DrawingsPage = () => {
  const { t } = useTranslation();

  // Auto-generated list of drawing images based on filename prefix Draw*
  const drawingImages = useMemo(
    () => [
      {
        src: '/ProjectPreviews/Draw1.png',
        alt: t('projects.drawings.imageDescriptions.Draw1'),
        title: t('projects.drawings.imageTitles.Draw1'),
        description: t('projects.drawings.imageDescriptions.Draw1'),
      },
      {
        src: '/ProjectPreviews/Draw2.jpg',
        alt: t('projects.drawings.imageDescriptions.Draw2'),
        title: t('projects.drawings.imageTitles.Draw2'),
        description: t('projects.drawings.imageDescriptions.Draw2'),
      },
      {
        src: '/ProjectPreviews/Draw3.jpg',
        alt: t('projects.drawings.imageDescriptions.Draw3'),
        title: t('projects.drawings.imageTitles.Draw3'),
        description: t('projects.drawings.imageDescriptions.Draw3'),
      },
      {
        src: '/ProjectPreviews/Draw4.jpg',
        alt: t('projects.drawings.imageDescriptions.Draw4'),
        title: t('projects.drawings.imageTitles.Draw4'),
        description: t('projects.drawings.imageDescriptions.Draw4'),
      },
    ],
    [t]
  );

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
         <main className="lg:ml-52 xl:ml-64 flex-1 flex flex-col">
        <div className="pt-20 py-24 px-4 flex-1">
          <CSSImageSlider
            images={drawingImages}
            title={t('navbar.drawings')}
            description={t('projects.drawings.description')}
               orientation="landscape"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
