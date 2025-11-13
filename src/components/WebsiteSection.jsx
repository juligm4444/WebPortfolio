import { ArrowBigRightDashIcon, CodeSquareIcon, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my skills, projects and Certifications.',
    image: '/ProjectPreviews/web-portfolio.png',
    tags: ['CSS', 'JavaScript', 'React', 'Spline'],
    demoUrl: 'https://web-portfolio-wheat-nine.vercel.app/',
    sourceProjectUrl: 'https://github.com/juligm4444/WebPortfolio',
  },
];

export const WebsiteSection = () => {
  const { t } = useTranslation();

  return (
    <section id="websites" className="py-24 px-4">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 text-center">
          {t('websites.title1')}
          <span className="text-primary"> {t('websites.title2')}</span>
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
                  {t('websites.website1.name')}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg mb-6 text-center max-w-3xl mx-auto">
                  {t('websites.website1.description')}
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
