import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectSquareCard = ({ project }) => {
  const gradient = project.cardGradient || 'var(--project-card-overlay-gradient)';

  return (
    <Link
      to={project.path}
      className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
      style={{ background: gradient }}
    >
      {/* Resting layer — logo or fallback title, slides upward on hover */}
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        {project.logoSrc ? (
          <div className="w-2/5 h-2/5 flex items-center justify-center">
            <img
              src={project.logoSrc}
              alt={project.title}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        ) : (
          <p className="text-2xl font-bold text-center px-4 card-overlay-title no-subtitle-brackets">
            {project.title}
          </p>
        )}
      </div>

      {/* Info layer — slides up from below on hover (liquid / paint effect) */}
      <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-between p-6">
        {/* Title centered */}
        <div className="flex-1 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-center no-subtitle-brackets card-overlay-title">
            {project.title}
            {project.status === 'Private' && <span className="ml-2 inline-block">🔒</span>}
          </h3>
        </div>

        {/* Tags + action icons */}
        <div className="space-y-4">
          <div className="h-[2px] w-12" style={{ backgroundColor: 'var(--color6)' }} />

          <div className="flex flex-wrap gap-2">
            {project.tags &&
              project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm font-light uppercase tracking-wider"
                >
                  {tag}
                  {index < project.tags.length - 1 && (
                    <span className="ml-2">/</span>
                  )}
                </span>
              ))}
          </div>

          {(project.demoUrl || project.sourceProjectUrl) && (
            <div className="flex gap-4 pt-1">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity duration-200"
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
                  className="hover:opacity-60 transition-opacity duration-200"
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
