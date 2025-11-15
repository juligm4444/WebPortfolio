import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ImageSlider } from '../components/ImageSlider';

export const SketchesPage = () => {
  const { t } = useTranslation();

  const sketchImages = [
    {
      src: '/ProjectPreviews/Sketch 3.png',
      alt: 'Everyday Bag Design',
      title: 'Everyday Bag Design',
      description:
        'Detailed sketch of my daily carry bag with ergonomic features and functional compartments',
    },
    {
      src: '/ProjectPreviews/Sketch1.jpg',
      alt: 'Class Sketches - Product Studies',
      title: 'Product Studies',
      description: 'Academic sketches exploring form, proportion, and design thinking',
    },
    {
      src: '/ProjectPreviews/Sketch2.png',
      alt: 'Class Sketches - Conceptual Work',
      title: 'Conceptual Sketches',
      description: 'Hand-drawn concepts focusing on ideation and creative exploration',
    },
  ];

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 flex-1 flex flex-col">
        <div className="pt-20 py-24 px-4 flex-1">
          <ImageSlider
            images={sketchImages}
            title="Sketches Collection"
            description="Hand-drawn sketches exploring product design, ergonomics, and conceptual artwork through various academic and personal projects"
          />
        </div>
        <Footer />
      </main>
    </div>
  );
};
