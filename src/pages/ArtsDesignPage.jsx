import { Link } from 'react-router-dom';
import { Palette, Brush, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ArtsDesignPage = () => {
  const { t } = useTranslation();

  // Get arts & design projects from JSON - matching TechnologyPage pattern
  const projects = t('projects.artsDesign.projects', { returnObjects: true }) || [];

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 xl:ml-64 flex-1">
        <div className="pt-20 py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-h1 font-bold mb-6 text-center text-primary">
              {t('projects.artsDesign.title1')}{' '}
              <span className="text-primary">{t('projects.artsDesign.title2')}</span>
            </h1>
            <p className="text-lg font-light text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              {t('projects.artsDesign.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={project.link}
                  className="group bg-card border border-border shadow-lg rounded-lg overflow-hidden card-hover transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/80">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground font-light text-sm">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
