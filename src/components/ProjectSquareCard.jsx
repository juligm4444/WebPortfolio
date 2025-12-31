import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectSquareCard = ({ project, onClickStop }) => {
  return (
    <Link
      to={project.path}
      className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-background/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
        {/* Project Title */}
        <div className="flex-1 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-foreground text-center">
            {project.title}
            {project.status === 'Private' && <span className="ml-2 inline-block">🔒</span>}
          </h3>
        </div>

        {/* Categories/Tags with accent line */}
        <div className="space-y-3">
          <div className="h-1 w-12" style={{ backgroundColor: '#60eba4' }}></div>
          <div className="flex flex-wrap gap-2">
            {project.tags &&
              project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm font-light text-muted-foreground uppercase tracking-wider"
                >
                  {tag}
                  {index < project.tags.length - 1 && <span className="ml-2">/</span>}
                </span>
              ))}
          </div>

          {/* Action Icons (if available) */}
          {(project.demoUrl || project.sourceProjectUrl) && (
            <div className="flex gap-4 pt-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:opacity-80 hover:drop-shadow-[0_0_8px_rgba(96,235,164,0.5)] transition-all duration-300"
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
                  className="text-foreground hover:opacity-80 hover:drop-shadow-[0_0_8px_rgba(96,235,164,0.5)] transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={20} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
