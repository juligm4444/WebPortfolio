import { ArrowBigRightDashIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectSquareCard } from '../components/ProjectSquareCard';

export const TechnologyPage = () => {
  const { t } = useTranslation();

  // Get all projects directly from JSON - completely data-driven
  const projects = t('projects.technology.projects', { returnObjects: true });

  const technologyProjects = projects.map((project, index) => ({
    id: index + 1,
    title: project.name,
    description: project.description,
    image: project.image,
    tags: project.technologies,
    path: project.link,
    demoUrl: project.demoUrl || '',
    sourceProjectUrl: project.sourceUrl || '',
    category: project.category,
    status: project.status,
  }));

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 xl:ml-64 flex-1 flex flex-col">
        <div className="pt-20">
          <section id="technology" className="py-24 px-4">
            <div className="container mx-auto max-w-8xl">
              <h2 className="text-h1 font-bold mb-4 text-center text-primary">
                {t('projects.technology.title1')}{' '}
                <span className="text-primary">{t('projects.technology.title2')}</span>
              </h2>

              <p className="text-primary text-justify text-2xl sm:text-4xl md:text-4xl font-light tracking-tight break-words mt-30">
                {t('projects.technology.description')}
              </p>

              <div className="text-center mt-12">
                <a
                  className="general-button w-fit flex items-center mx-auto gap-2"
                  target="_blank"
                  href="https://github.com/juligm4444"
                >
                  {t('projects.technology.button')} <ArrowBigRightDashIcon size={20} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto">
                {technologyProjects.map((project, key) => (
                  <ProjectSquareCard key={key} project={project} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
