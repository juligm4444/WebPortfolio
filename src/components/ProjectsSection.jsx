import { ArrowBigRightDashIcon, CodeSquareIcon, ExternalLink } from 'lucide-react';

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

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary"> Featured Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the projects I have worked on. Each one of them were created with a
          specific purpose in mind, showcasing my skills and expressing myself through them. Every
          aspect included in these projects is a reflection of my passion for technology and design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center w-full">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl text-primary font-semibold mb-1 text-center">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary  transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.sourceProjectUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary  transition-colors duration-300"
                  >
                    <CodeSquareIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="general-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/juligm4444"
          >
            View All My Projects <ArrowBigRightDashIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
