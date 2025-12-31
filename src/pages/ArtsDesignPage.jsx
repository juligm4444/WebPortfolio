import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectSquareCard } from '../components/ProjectSquareCard';

export const ArtsDesignPage = () => {
  const { t } = useTranslation();

  // Get arts & design projects from JSON - matching TechnologyPage pattern
  const projects = t('projects.artsDesign.projects', { returnObjects: true }) || [];

  // Transform projects to match ProjectSquareCard expected format
  const artsProjects = projects.map((project) => ({
    title: project.name,
    image: project.image,
    path: project.link,
    tags: [project.category, project.status], // Use category and status as tags
  }));

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {artsProjects.map((project, index) => (
                <ProjectSquareCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
