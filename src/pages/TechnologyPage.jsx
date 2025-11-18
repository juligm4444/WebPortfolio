import { Link } from 'react-router-dom';
import { Code, ExternalLink, Github, ArrowBigRightDashIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

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
              <h2 className="text-3xl md:text-6xl font-bold mb-4 text-center">
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

              <div className="grid grid-cols-1 gap-8 mt-50 place-items-center">
                {technologyProjects.map((project, key) => (
                  <Link
                    key={key}
                    to={project.path}
                    id={`project-${project.id}`}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-4xl scroll-mt-24 cursor-pointer"
                  >
                    <div className="h-80 sm:h-96 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-8">
                      <div className="hidden sm:flex flex-wrap gap-3 mb-6 justify-center w-full">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl sm:text-3xl text-primary font-semibold mb-3 text-center sm:mt-0 mt-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-light text-base sm:text-lg mb-6 text-center max-w-3xl mx-auto">
                        {project.description}
                      </p>
                      <div className="flex justify-center items-center gap-8">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                        {project.sourceProjectUrl && (
                          <a
                            href={project.sourceProjectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};
