import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CSSImageSlider } from '../components/CSSImageSlider';

export const SketchesPage = () => {
  const { t } = useTranslation();

  // Auto-generated list of sketch images based on filename prefix Sketch*
  const sketchImages = useMemo(
    () => [
      {
        src: '/ProjectPreviews/Sketch1.jpg',
        alt: t('projects.sketches.imageDescriptions.Sketch1'),
        title: t('projects.sketches.imageTitles.Sketch1'),
        description: t('projects.sketches.imageDescriptions.Sketch1'),
      },
      {
        src: '/ProjectPreviews/Sketch2.png',
        alt: t('projects.sketches.imageDescriptions.Sketch2'),
        title: t('projects.sketches.imageTitles.Sketch2'),
        description: t('projects.sketches.imageDescriptions.Sketch2'),
      },
      {
        src: '/ProjectPreviews/Sketch3.png',
        alt: t('projects.sketches.imageDescriptions.Sketch3'),
        title: t('projects.sketches.imageTitles.Sketch3'),
        description: t('projects.sketches.imageDescriptions.Sketch3'),
      },
      {
        src: '/ProjectPreviews/Sketch4.jpg',
        alt: t('projects.sketches.imageDescriptions.Sketch4'),
        title: t('projects.sketches.imageTitles.Sketch4'),
        description: t('projects.sketches.imageDescriptions.Sketch4'),
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
            images={sketchImages}
            title={t('navbar.sketches')}
            description={t('projects.sketches.description')}
            orientation="landscape"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
