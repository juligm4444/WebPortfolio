import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const CandelariaProjectPage = () => {
  const { t } = useTranslation();

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 flex-1 flex flex-col">
        <div className="pt-20 py-24 px-4 flex-1">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Candelaria</span> Solar Car Project
            </h1>
            <p className="text-lg font-light text-muted-foreground mb-16">
              Mobile application for the Candelaria Solar Car team - Coming soon!
            </p>
            <div className="bg-card rounded-lg p-12">
              <p className="text-muted-foreground font-light">
                This project involves developing a mobile application for monitoring and controlling
                the Candelaria Solar Car during competitions and testing phases.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
