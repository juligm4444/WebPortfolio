import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const LicorimetroProjectPage = () => {
  const { t } = useTranslation();

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 xl:ml-64 flex-1 flex flex-col">
        <div className="pt-20 py-24 px-4 flex-1">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-h1 font-bold mb-6 text-primary">
              {t('projects.licorimetro.title')}
            </h1>
            <p className="text-lg font-light text-muted-foreground mb-16">
              {t('projects.licorimetro.subtitle')}
            </p>
            <div className="bg-card rounded-lg p-12">
              <p className="text-muted-foreground font-light">
                {t('projects.licorimetro.description')}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
