import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const DesignPage = () => {
  const { t } = useTranslation();

  return (
    <div id="root" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="lg:ml-52">
        <div className="pt-20 py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Design</span> Projects
            </h1>
            <p className="text-lg font-light text-muted-foreground mb-16">
              Creative designs, sketches, and artistic work - Coming soon!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Sketches & Drawings</h3>
                <p className="text-muted-foreground font-light">
                  Collection of hand-drawn sketches and digital illustrations.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Masks & Concepts</h3>
                <p className="text-muted-foreground font-light">
                  Creative mask designs and conceptual artwork.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Moodboards</h3>
                <p className="text-muted-foreground font-light">
                  Visual inspiration boards and design concepts.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Videos</h3>
                <p className="text-muted-foreground font-light">Motion graphics and video content.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
