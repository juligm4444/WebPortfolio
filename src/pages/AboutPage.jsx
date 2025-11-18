import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 xl:ml-64 flex-1 flex flex-col">
        <div className="pt-20 flex-1">
          <AboutSection />

          {/* Future: Add Inspirations, Education, Photos sections here */}
        </div>
        <Footer />
      </main>
    </div>
  );
};
