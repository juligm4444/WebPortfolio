import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectPageLayout } from '../components/ProjectPageLayout';
import { useTranslation } from 'react-i18next';

export const PortfolioProjectPage = () => {
  const { t } = useTranslation();

  // Match skills with the project card data used in /projects
  const portfolioProject =
    t('projects.technology.projects', { returnObjects: true }).find((p) => p.id === 'portfolio') ||
    {};
  const technologies = portfolioProject.technologies || [];

  const sections = [
    { id: 'overview', label: t('projectDetails.sections.overview') },
    { id: 'context', label: t('projectDetails.sections.context') },
    { id: 'problem', label: t('projectDetails.sections.problem') },
    { id: 'solution-process', label: t('projectDetails.sections.solutionProcess') },
    { id: 'visual-design', label: t('projectDetails.sections.visualDesign') },
    { id: 'final-design', label: t('projectDetails.sections.finalDesign') },
    { id: 'retrospective', label: t('projectDetails.sections.retrospective') },
  ];

  return (
    <ProjectPageLayout sections={sections}>
      {/* Project Header */}
      <div className="pt-12 pb-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-left text-foreground mb-6">
            {t('projectDetails.portfolio.title')}{' '}
            <span className="text-primary">{t('projectDetails.portfolio.titleHighlight')}</span>
          </h1>
          <p className="text-2xl lg:text-3xl font-light text-foreground leading-relaxed text-left max-w-3xl mb-6">
            {t('projectDetails.portfolio.quote')}
          </p>
          <div className="h-1 w-12 mb-4" style={{ backgroundColor: '#60eba4' }} />
          {technologies.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span>{tech}</span>
                  {idx < technologies.length - 1 && (
                    <span className="text-muted-foreground">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="pt-12 pb-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          {/* Project Image */}
          <div className="mb-12 rounded-lg overflow-hidden border border-border">
            <img
              src="/ProjectPreviews/web-portfolio.png"
              alt={t('projectDetails.portfolio.title')}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Two Column Layout: Left Column (My Role, Timeline, Status, Tools) and Right Column (Overview) */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column */}
            <div className="space-y-8 text-left">
              {/* My Role Section */}
              <div>
                <h3 className="text-h3 font-semibold mb-4 text-left">
                  {t('projectDetails.portfolio.myRole.title')}
                </h3>
                <p className="text-body text-foreground font-light text-left">
                  {t('projectDetails.portfolio.myRole.description')}
                </p>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-h3 font-semibold mb-2 text-left">
                  {t('projectDetails.portfolio.timeline.title')}
                </h3>
                <p className="text-body text-foreground font-light text-left">
                  {t('projectDetails.portfolio.timeline.duration')}
                </p>
                <p className="text-body text-foreground font-light text-left">
                  {t('projectDetails.portfolio.status.description')}
                </p>
              </div>

              {/* Technology Icons - White circles without names */}
              <div className="flex flex-wrap gap-6 justify-start">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center p-3"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <img
                    src="/assets/icons/React.svg"
                    alt="React"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center p-3"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <img
                    src="/assets/icons/JavaScript.svg"
                    alt="JavaScript"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center p-3"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <img
                    src="/assets/icons/Tailwind CSS.svg"
                    alt="Tailwind CSS"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center p-3"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <img
                    src="/assets/icons/Figma.svg"
                    alt="Figma"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Overview */}
            <div className="text-left">
              <h3 className="text-h3 font-semibold mb-4 text-left">
                {t('projectDetails.sections.overview')}
              </h3>
              <div className="space-y-4">
                <p className="text-body text-foreground font-light leading-relaxed text-left">
                  {t('projectDetails.portfolio.description.paragraph1')}
                </p>
                <p className="text-body text-foreground font-light leading-relaxed text-left">
                  {t('projectDetails.portfolio.description.paragraph2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section id="context" className="py-24 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-h2 font-semibold mb-8 text-center">{`<${t(
            'projectDetails.sections.context'
          )}>`}</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image on the left */}
            <div className="w-full md:w-2/5 flex-shrink-0">
              <div className="rounded-lg overflow-hidden border border-border">
                <img
                  src="/ProjectPreviews/web-portfolio.png"
                  alt="Context"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Single paragraph on the right */}
            <div className="flex-1">
              <p className="text-body text-foreground font-light leading-relaxed text-left">
                {t('projectDetails.portfolio.context')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-h2 font-semibold mb-8 text-center">{`<${t(
            'projectDetails.sections.problem'
          )}>`}</h2>
          <p className="text-body text-foreground font-light leading-relaxed text-left">
            {t('projectDetails.portfolio.problem')}
          </p>
        </div>
      </section>

      {/* Solution Process Section */}
      <section id="solution-process" className="py-24 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-h2 font-semibold mb-8 text-center">{`<${t(
            'projectDetails.sections.solutionProcess'
          )}>`}</h2>
          <div className="space-y-10">
            {t('projectDetails.portfolio.solutionProcess.phases', { returnObjects: true }).map(
              (phase, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-left">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                      style={{ backgroundColor: '#60eba4', color: '#000' }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-h3 font-semibold">{phase.title}</h3>
                  </div>
                  <p className="text-body text-foreground font-light leading-relaxed text-justify md:text-left">
                    {phase.description}
                  </p>
                  <ul className="list-disc list-inside text-body text-foreground font-light space-y-2 text-left">
                    {phase.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Visual Design Section */}
      <section id="visual-design" className="py-24 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-h2 font-semibold mb-8 text-center">{`<${t(
            'projectDetails.sections.visualDesign'
          )}>`}</h2>
          <p className="text-body text-foreground font-light leading-relaxed mb-10 text-left">
            {t('projectDetails.portfolio.visualDesign.description')}
          </p>

          {/* Color System */}
          <div className="mb-10">
            <h3 className="text-h3 font-semibold mb-4 text-left">
              {t('projectDetails.portfolio.visualDesign.colorSystem.title')}
            </h3>
            <p className="text-body text-foreground font-light mb-6 text-left">
              {t('projectDetails.portfolio.visualDesign.colorSystem.description')}
            </p>

            {/* Dark Theme Colors */}
            <div className="mb-8">
              <h4 className="text-body font-semibold mb-4 text-left">
                {t('projectDetails.portfolio.visualDesign.colorSystem.darkTheme.title')}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {t('projectDetails.portfolio.visualDesign.colorSystem.darkTheme.colors', {
                  returnObjects: true,
                }).map((color, index) => (
                  <div key={index} className="space-y-2">
                    <div
                      className="h-24 rounded-lg border border-border"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <p className="font-semibold text-foreground">{color.name}</p>
                    <p className="text-sm text-muted-foreground">{color.hex}</p>
                    <p className="text-sm text-foreground">{color.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Light Theme Colors */}
            <div>
              <h4 className="text-body font-semibold mb-4 text-left">
                {t('projectDetails.portfolio.visualDesign.colorSystem.lightTheme.title')}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {t('projectDetails.portfolio.visualDesign.colorSystem.lightTheme.colors', {
                  returnObjects: true,
                }).map((color, index) => (
                  <div key={index} className="space-y-2">
                    <div
                      className="h-24 rounded-lg border border-border"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <p className="font-semibold text-foreground">{color.name}</p>
                    <p className="text-sm text-muted-foreground">{color.hex}</p>
                    <p className="text-sm text-foreground">{color.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design Section */}
      <section id="final-design" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-h2 font-semibold mb-8 text-center">{`<${t(
            'projectDetails.sections.finalDesign'
          )}>`}</h2>
          <p className="text-body text-foreground font-light leading-relaxed mb-10 text-left">
            {t('projectDetails.portfolio.finalDesign.description')}
          </p>

          {/* Screenshot/Feature Gallery */}
          <div className="space-y-10">
            {/* Homepage */}
            <div>
              <h3 className="text-h3 font-semibold mb-4 text-left">
                {t('projectDetails.portfolio.finalDesign.homepage.title')}
              </h3>
              <div className="bg-card rounded-lg overflow-hidden border border-border mb-4">
                <img
                  src="/ProjectPreviews/web-portfolio.png"
                  alt="Portfolio homepage"
                  className="w-full"
                />
              </div>
              <p className="text-body text-foreground font-light text-left">
                {t('projectDetails.portfolio.finalDesign.homepage.description')}
              </p>
            </div>

            {/* Project Pages */}
            <div>
              <h3 className="text-h3 font-semibold mb-4 text-left">
                {t('projectDetails.portfolio.finalDesign.projects.title')}
              </h3>
              <p className="text-body text-foreground font-light text-left">
                {t('projectDetails.portfolio.finalDesign.projects.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retrospective Section */}
      <section id="retrospective" className="py-24 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-h2 font-semibold mb-8 text-center">{`<${t(
            'projectDetails.sections.retrospective'
          )}>`}</h2>
          <p className="text-body text-foreground font-light leading-relaxed text-left mb-10">
            {t('projectDetails.portfolio.retrospective.description')}
          </p>

          {/* Impact Metrics */}
          <div>
            <h3 className="text-h3 font-semibold mb-6 text-left">
              {t('projectDetails.portfolio.retrospective.impact.title')}
            </h3>
            <p className="text-body text-foreground font-light mb-6 text-left">
              {t('projectDetails.portfolio.retrospective.impact.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {t('projectDetails.portfolio.retrospective.impact.metrics', {
                returnObjects: true,
              }).map((metric, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border text-center"
                >
                  <p className="text-4xl font-bold text-primary mb-2">{metric.value}</p>
                  <p className="text-sm text-foreground mb-1">{metric.label}</p>
                  <p className="text-xs text-foreground">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons - Bottom of page, centered */}
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://web-portfolio-wheat-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="general-button inline-flex items-center gap-2"
            >
              {t('projectDetails.portfolio.buttons.viewLive')} <ExternalLink size={18} />
            </a>
            <a
              href="https://github.com/juligm4444/WebPortfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-card border border-border text-foreground font-medium transition-all duration-300 hover:bg-secondary inline-flex items-center gap-2"
            >
              {t('projectDetails.portfolio.buttons.viewCode')} <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </ProjectPageLayout>
  );
};
