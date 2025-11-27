import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CSSImageSlider } from '../components/CSSImageSlider';

export const CreativeWorkPage = () => {
  const { t } = useTranslation();

  // TCV* files for first (portrait) slider
  const creativeImages = useMemo(
    () => [
      {
        src: '/ProjectPreviews/TCV1.jpg',
        alt: t('projects.creative.imageDescriptions.TCV1'),
        title: t('projects.creative.imageTitles.TCV1'),
        description: t('projects.creative.imageDescriptions.TCV1'),
      },
      {
        src: '/ProjectPreviews/TCV2.jpg',
        alt: t('projects.creative.imageDescriptions.TCV2'),
        title: t('projects.creative.imageTitles.TCV2'),
        description: t('projects.creative.imageDescriptions.TCV2'),
      },
      {
        src: '/ProjectPreviews/TCV3.jpg',
        alt: t('projects.creative.imageDescriptions.TCV3'),
        title: t('projects.creative.imageTitles.TCV3'),
        description: t('projects.creative.imageDescriptions.TCV3'),
      },
    ],
    [t]
  );

  // TCH* files for second (horizontal) slider
  const creativeHorizontalImages = useMemo(
    () => [
      {
        src: '/ProjectPreviews/TCH1.png',
        alt: t('projects.creative.imageDescriptions.TCH1'),
        title: t('projects.creative.imageTitles.TCH1'),
        description: t('projects.creative.imageDescriptions.TCH1'),
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
      <main className="lg:ml-52 xl:ml-64 flex-1">
        <div className="pt-20 pb-16 px-4">
          <CSSImageSlider
            images={creativeImages}
            title={t('navbar.creative-work')}
            description={t('projects.creative.descriptionVertical')}
            orientation="portrait"
          />
        </div>
        <div className="pt-16 pb-24 px-4">
          <CSSImageSlider
            images={creativeHorizontalImages}
            title={t('navbar.creative-work')}
            description={t('projects.creative.descriptionHorizontal')}
            orientation="landscape"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
