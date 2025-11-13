import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const OtherProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <div id="root" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="lg:ml-52">
        <div className="pt-20 py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Other</span> Projects
            </h1>
            <p className="text-lg text-muted-foreground mb-16">
              Additional projects and experimental work - Coming soon!
            </p>
            <div className="bg-card rounded-lg p-12">
              <p className="text-muted-foreground">
                This section will showcase additional projects that don't fit into the main
                categories, including experimental work and collaborative projects.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
