import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { useInView } from '../hooks/useInView';

const FeaturedCard = ({ project, className, large = false }) => {
  const hasImage = Boolean(project.image);

  return (
    <Link
      to={project.link}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border border-border',
        'transition-all duration-400 hover:border-[var(--color4)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
        'bg-[var(--color2)]',
        large ? 'min-h-[420px] md:min-h-[520px]' : 'min-h-[200px] md:min-h-[248px]',
        className
      )}
    >
      {/* Image / Visual area */}
      <div
        className={cn(
          'relative overflow-hidden flex-1',
          large ? 'min-h-[260px] md:min-h-[320px]' : 'min-h-[110px] md:min-h-[140px]'
        )}
      >
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: 'var(--candelaria-card-gradient)' }}
          >
            <img
              src="/ProjectPreviews/CandelariaLogo.png"
              alt={project.title}
              loading="lazy"
              className="w-24 h-24 md:w-36 md:h-36 object-contain opacity-90 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color1)]/80 text-[var(--color4)] backdrop-blur-sm border border-[var(--color4)]/20">
          {project.category}
        </span>
      </div>

      {/* Text area */}
      <div className="p-4 md:p-5 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className={cn('font-semibold text-foreground leading-snug', large ? 'text-h3' : 'text-base')}>
            {project.title}
          </h3>
          <ArrowUpRight
            className="w-5 h-5 text-[var(--color4)] flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
        <p className={cn('text-muted-foreground leading-relaxed', large ? 'text-sm md:text-base' : 'text-xs md:text-sm')}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-[var(--color3)]/20 text-[var(--color4)] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export const FeaturedWorkSection = () => {
  const { t } = useTranslation();
  const titleRef = useInView('reveal--init');
  const gridRef = useInView();

  const projects = t('featuredWork.projects', { returnObjects: true });

  return (
    <section id="featured-work" className="py-12 sm:py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-12">
          <h2 ref={titleRef} className="text-h1 font-bold text-primary">
            {t('featuredWork.title1')}{' '}
            <span className="text-foreground">{t('featuredWork.title2')}</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs sm:text-right">
            {t('featuredWork.subtitle')}
          </p>
        </div>

        {/* Asymmetric grid: Portfolio (tall) left, Candelaria + Creative stacked right */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-4 md:gap-5">
          {/* Large card — first project (Portfolio) */}
          <FeaturedCard project={projects[0]} large className="md:row-span-2" />
          {/* Two smaller cards stacked in right column */}
          <FeaturedCard project={projects[1]} />
          <FeaturedCard project={projects[2]} />
        </div>

        {/* View all CTA */}
        <div className="mt-8 md:mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-base font-medium text-[var(--color4)] hover:text-foreground transition-colors duration-200 group"
          >
            {t('featuredWork.viewAll')}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
