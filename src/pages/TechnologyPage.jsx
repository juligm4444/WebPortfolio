import { Link } from 'react-router-dom';
import { Code, ExternalLink, Github, ArrowBigRightDashIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const TechnologyPage = () => {
  const { t } = useTranslation();

  const technologyProjects = [
    {
      id: 1,
      title: t('navbar.portfolio'),
      description: t('websites.website1.description'),
      image: '/ProjectPreviews/web-portfolio.png',
      tags: ['CSS', 'JavaScript', 'React', 'Spline'],
      path: '/projects/portfolio',
      demoUrl: 'https://web-portfolio-wheat-nine.vercel.app/',
      sourceProjectUrl: 'https://github.com/juligm4444/WebPortfolio',
    },
    {
      id: 2,
      title: t('navbar.candelaria'),
      description: 'Mobile application for the Candelaria Solar Car team monitoring and control.',
      image: '/ProjectPreviews/candelaria-preview.png',
      tags: ['Flutter', 'Mobile', 'IoT', 'Solar'],
      path: '/projects/candelaria',
      demoUrl: '',
      sourceProjectUrl: '',
    },
    {
      id: 3,
      title: t('navbar.licorimetro'),
      description: 'Mobile application for alcohol level measurement with precision and ease.',
      image: '/ProjectPreviews/licorimetro-preview.png',
      tags: ['Mobile', 'Sensors', 'Health', 'Flutter'],
      path: '/projects/licorimetro',
      demoUrl: '',
      sourceProjectUrl: '',
    },
  ];

  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 flex-1 flex flex-col">
        <div className="pt-20">
          <section id="technology" className="py-24 px-4">
            <div className="container mx-auto max-w-8xl">
              <h2 className="text-3xl md:text-6xl font-bold mb-4 text-center">
                <span className="text-primary">Technology</span> Projects
              </h2>

              <p className="text-primary text-justify text-2xl sm:text-4xl md:text-4xl font-light tracking-tight break-words mt-30">
                {t('websites.description')}
              </p>

              <div className="text-center mt-12">
                <a
                  className="general-button w-fit flex items-center mx-auto gap-2"
                  target="_blank"
                  href="https://github.com/juligm4444"
                >
                  {t('websites.button')} <ArrowBigRightDashIcon size={20} />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-50 place-items-center">
                {technologyProjects.map((project, key) => (
                  <div
                    key={key}
                    id={`project-${project.id}`}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-4xl scroll-mt-24"
                  >
                    <div className="h-80 sm:h-96 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex flex-wrap gap-3 mb-6 justify-center w-full">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl sm:text-3xl text-primary font-semibold mb-3 text-center">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-base sm:text-lg mb-6 text-center max-w-3xl mx-auto">
                        {project.description}
                      </p>
                      <div className="flex justify-center items-center gap-8">
                        <Link
                          to={project.path}
                          className="text-primary hover:text-primary/80 transition-colors duration-300 text-lg font-semibold underline"
                        >
                          View Project Details
                        </Link>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary transition-colors duration-300"
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
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
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
