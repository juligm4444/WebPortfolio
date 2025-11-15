import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ImageSlider } from '../components/ImageSlider';

export const DrawingsPage = () => {
  const { t } = useTranslation();

  const drawingImages = [
    {
      src: '/ProjectPreviews/Design1.png',
      alt: 'T-Shirt Design',
      title: 'Custom T-Shirt Design',
      description: 'Original apparel design featuring unique graphics and thoughtful composition',
    },
    {
      src: '/ProjectPreviews/Draw1.png',
      alt: 'T-Shirt Logo Design',
      title: 'Brand Logo Design',
      description:
        'Logo design created for the custom t-shirt collection, emphasizing brand identity',
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
            images={drawingImages}
            title="Design Portfolio"
            description="Apparel and graphic design work showcasing brand identity, visual composition, and creative direction"
          />
        </div>
        <Footer />
      </main>
    </div>
  );
};
