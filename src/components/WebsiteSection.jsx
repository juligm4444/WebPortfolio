import { ArrowBigRightDashIcon, CodeSquareIcon, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const WebsiteSection = () => {
  const { t } = useTranslation();

  // Get projects from translation - easily extendable by adding more projects to JSON
  const projectsData = t('projects.technology.projects', { returnObjects: true });

  const projects = projectsData.map((project, index) => ({
    id: index + 1,
    title: project.name,
    description: project.description,
    image: '/ProjectPreviews/web-portfolio.png', // You can add image field to JSON later
    tags: project.technologies || [],
    demoUrl: 'https://web-portfolio-wheat-nine.vercel.app/', // You can add this field to JSON
    sourceProjectUrl: 'https://github.com/juligm4444/WebPortfolio', // You can add this field to JSON
    category: project.category,
    status: project.status,
  }));

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 text-center">
          {t('projects.technology.title1')}
          <span className="text-4xl md:text-6xl text-primary">
            {' '}
            {t('projects.technology.title2')}
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8 mt-16 place-items-center">
          {projects.map((project, key) => (
            <div
              key={key}
              id={`website-${project.id}`}
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
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-primary hover:text-primary  transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.sourceProjectUrl}
                    target="_blank"
                    className="text-primary hover:text-primary  transition-colors duration-300"
                  >
                    <CodeSquareIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12"></div>
      </div>
    </section>
  );
};
