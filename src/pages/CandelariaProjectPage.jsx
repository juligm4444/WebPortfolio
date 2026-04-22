import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectPageLayout } from '../components/ProjectPageLayout';
import { useTranslation } from 'react-i18next';

export const CandelariaProjectPage = () => {
  const { t } = useTranslation();

  const candelariaProject =
    t('projects.technology.projects', { returnObjects: true }).find((p) => p.id === 'candelaria') ||
    {};
  const technologies = candelariaProject.technologies || [];

  const sections = [
    { id: 'overview', label: t('projectDetails.sections.overview') },
    { id: 'problem', label: t('projectDetails.sections.problem') },
    { id: 'development', label: t('projectDetails.sections.developmentProcess') },
    { id: 'visual-design', label: t('projectDetails.sections.visualDesign') },
    { id: 'key-features', label: t('projectDetails.sections.keyFeatures') },
    { id: 'performance', label: t('projectDetails.sections.performance') },
    { id: 'reflections', label: t('projectDetails.sections.reflections') },
  ];

  return (
    <ProjectPageLayout sections={sections}>
      {/* Project Header */}
      <div className="pt-12 pb-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-left text-foreground mb-6">
            {t('projectDetails.candelaria.title')}{' '}
            <span className="text-primary">{t('projectDetails.candelaria.titleHighlight')}</span>
          </h1>
          <p className="text-2xl lg:text-3xl font-light text-foreground leading-relaxed text-left max-w-3xl mb-6">
            {t('projectDetails.candelaria.quote')}
          </p>
          <div className="h-1 w-12 mb-4" style={{ backgroundColor: 'var(--color3)' }} />
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
      <section id="overview" className="pt-16 pb-32 px-4 scroll-mt-32">
        <div className="container mx-auto max-w-5xl">
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column */}
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-h3 font-semibold mb-4 text-left">
                  {t('projectDetails.candelaria.myRole.title')}
                </h3>
                <p className="text-body text-foreground font-light text-left">
                  {t('projectDetails.candelaria.myRole.description')}
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-semibold mb-2 text-left">
                  {t('projectDetails.candelaria.timeline.title')}
                </h3>
                <p className="text-body text-foreground font-light text-left">
                  {t('projectDetails.candelaria.timeline.duration')}
                </p>
                <p className="text-body text-foreground font-light text-left">
                  {t('projectDetails.candelaria.status.description')}
                </p>
              </div>

              {/* Technology Icons */}
              <div className="flex flex-wrap gap-6 justify-start">
                {[
                  { src: '/assets/icons/React.svg', alt: 'React' },
                  { src: '/assets/icons/Django.svg', alt: 'Django' },
                  { src: '/assets/icons/Tailwind CSS.svg', alt: 'Tailwind CSS' },
                  { src: '/assets/icons/Figma.svg', alt: 'Figma' },
                  { src: '/assets/icons/Python.svg', alt: 'Python' },
                ].map((icon) => (
                  <div
                    key={icon.alt}
                    className="rounded-full p-[3px] flex-shrink-0"
                    style={{
                      background: 'linear-gradient(180deg, var(--color3) 0%, var(--color4) 100%)',
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center p-3"
                      style={{ backgroundColor: 'var(--color5)' }}
                    >
                      <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Overview */}
            <div className="text-left">
              <h3 className="text-h3 font-semibold mb-4 text-left">
                {t('projectDetails.sections.overview')}
              </h3>
              <div className="space-y-4">
                <p className="text-body text-foreground font-light leading-relaxed text-left">
                  {t('projectDetails.candelaria.description.paragraph1')}
                </p>
                <p className="text-body text-foreground font-light leading-relaxed text-left">
                  {t('projectDetails.candelaria.description.paragraph2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-32 px-4 bg-secondary/20 scroll-mt-32">
        <div className="container mx-auto max-w-5xl">
          <div className="border-t border-[var(--color3)] mb-12" />
          <h2 className="text-h2 font-semibold mb-8 text-center">
            {t('projectDetails.sections.problem')}
          </h2>
          <p className="text-body text-foreground font-light leading-relaxed text-left mb-6">
            {t('projectDetails.candelaria.problem.intro')}
          </p>
          <ul className="list-disc list-inside text-body text-foreground font-light space-y-3 text-left">
            {t('projectDetails.candelaria.problem.bullets', { returnObjects: true }).map(
              (bullet, idx) => (
                <li key={idx}>{bullet}</li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Development Process Section */}
      <section id="development" className="py-32 px-4 scroll-mt-32">
        <div className="container mx-auto max-w-5xl">
          <div className="border-t border-[var(--color3)] mb-12" />
          <h2 className="text-h2 font-semibold mb-8 text-center">
            {t('projectDetails.sections.developmentProcess')}
          </h2>
          <div className="space-y-10">
            {t('projectDetails.candelaria.developmentProcess.phases', {
              returnObjects: true,
            }).map((phase, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-left">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                    style={{
                      background: 'var(--portfolio-step-gradient)',
                      color: 'var(--color2)',
                    }}
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
            ))}
          </div>
        </div>
      </section>

      {/* Visual Design Section */}
      <section id="visual-design" className="py-32 px-4 bg-secondary/20 scroll-mt-32">
        <div className="container mx-auto max-w-5xl">
          <div className="border-t border-[var(--color3)] mb-12" />
          <h2 className="text-h2 font-semibold mb-4 text-center">
            {t('projectDetails.sections.visualDesign')}
          </h2>
          <p className="text-body font-semibold text-center mb-4" style={{ color: 'var(--color3)' }}>
            &ldquo;{t('projectDetails.candelaria.visualDesign.systemName')}&rdquo;
          </p>
          <p className="text-body text-foreground font-light leading-relaxed mb-10 text-left">
            {t('projectDetails.candelaria.visualDesign.description')}
          </p>

          {/* Color Palette */}
          <div className="mb-10">
            <h3 className="text-h3 font-semibold mb-6 text-left">
              {t('projectDetails.candelaria.visualDesign.colorPalette.title')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t('projectDetails.candelaria.visualDesign.colorPalette.colors', {
                returnObjects: true,
              }).map((color, index) => (
                <div key={index} className="space-y-2">
                  <div
                    className="h-20 rounded-lg border border-border"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="font-semibold text-foreground text-sm">{color.name}</p>
                  <p className="text-xs text-muted-foreground">{color.hex}</p>
                  <p className="text-xs text-foreground">{color.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="mb-10">
            <h3 className="text-h3 font-semibold mb-4 text-left">
              {t('projectDetails.candelaria.visualDesign.typography.title')}
            </h3>
            <p className="text-body text-foreground font-light mb-6 text-left">
              <span className="font-semibold">
                {t('projectDetails.candelaria.visualDesign.typography.font')}
              </span>
              {' \u2014 '}
              {t('projectDetails.candelaria.visualDesign.typography.description')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t('projectDetails.candelaria.visualDesign.typography.levels', {
                returnObjects: true,
              }).map((level, index) => (
                <div key={index} className="bg-card p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground mb-1">{level.name}</p>
                  <p className="text-sm text-muted-foreground">{level.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Component Patterns */}
          <div>
            <h3 className="text-h3 font-semibold mb-4 text-left">
              {t('projectDetails.candelaria.visualDesign.components.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t('projectDetails.candelaria.visualDesign.components.patterns', {
                returnObjects: true,
              }).map((pattern, index) => (
                <div key={index} className="bg-card p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground mb-1">{pattern.name}</p>
                  <p className="text-sm text-foreground font-light">{pattern.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="py-32 px-4 scroll-mt-32">
        <div className="container mx-auto max-w-5xl">
          <div className="border-t border-[var(--color3)] mb-12" />
          <h2 className="text-h2 font-semibold mb-8 text-center">
            {t('projectDetails.sections.keyFeatures')}
          </h2>

          <div className="space-y-10">
            {/* Auth */}
            <div>
              <h3 className="text-h3 font-semibold mb-3 text-left">
                {t('projectDetails.candelaria.keyFeatures.auth.title')}
              </h3>
              <p className="text-body text-foreground font-light leading-relaxed text-left">
                {t('projectDetails.candelaria.keyFeatures.auth.description')}
              </p>
            </div>

            {/* E-Commerce */}
            <div>
              <h3 className="text-h3 font-semibold mb-3 text-left">
                {t('projectDetails.candelaria.keyFeatures.ecommerce.title')}
              </h3>
              <p className="text-body text-foreground font-light leading-relaxed text-left">
                {t('projectDetails.candelaria.keyFeatures.ecommerce.description')}
              </p>
            </div>

            {/* Gamification */}
            <div>
              <h3 className="text-h3 font-semibold mb-3 text-left">
                {t('projectDetails.candelaria.keyFeatures.gamification.title')}
              </h3>
              <p className="text-body text-foreground font-light leading-relaxed mb-6 text-left">
                {t('projectDetails.candelaria.keyFeatures.gamification.description')}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-3 border border-border bg-card text-foreground font-semibold">
                        {t('projectDetails.candelaria.keyFeatures.gamification.tierLabel')}
                      </th>
                      <th className="text-left p-3 border border-border bg-card text-foreground font-semibold">
                        {t('projectDetails.candelaria.keyFeatures.gamification.scoreLabel')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {t('projectDetails.candelaria.keyFeatures.gamification.tiers', {
                      returnObjects: true,
                    }).map((tier, index) => (
                      <tr key={index} className="hover:bg-secondary/30 transition-colors">
                        <td className="p-3 border border-border font-medium text-foreground">
                          {tier.tier}
                        </td>
                        <td className="p-3 border border-border text-muted-foreground">
                          {tier.score}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dashboard */}
            <div>
              <h3 className="text-h3 font-semibold mb-3 text-left">
                {t('projectDetails.candelaria.keyFeatures.dashboard.title')}
              </h3>
              <p className="text-body text-foreground font-light leading-relaxed text-left">
                {t('projectDetails.candelaria.keyFeatures.dashboard.description')}
              </p>
            </div>

            {/* Multilingual */}
            <div>
              <h3 className="text-h3 font-semibold mb-3 text-left">
                {t('projectDetails.candelaria.keyFeatures.multilingual.title')}
              </h3>
              <p className="text-body text-foreground font-light leading-relaxed text-left">
                {t('projectDetails.candelaria.keyFeatures.multilingual.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance & Security Section */}
      <section id="performance" className="py-32 px-4 bg-secondary/20 scroll-mt-32">
        <div className="container mx-auto max-w-5xl">
          <div className="border-t border-[var(--color3)] mb-12" />
          <h2 className="text-h2 font-semibold mb-8 text-center">
            {t('projectDetails.sections.performance')}
          </h2>

          <h3 className="text-h3 font-semibold mb-6 text-left">
            {t('projectDetails.candelaria.performance.title')}
          </h3>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 border border-border bg-card text-foreground font-semibold">
                    {t('projectDetails.candelaria.performance.tableHeaders.metric')}
                  </th>
                  <th className="text-left p-3 border border-border bg-card text-foreground font-semibold">
                    {t('projectDetails.candelaria.performance.tableHeaders.before')}
                  </th>
                  <th className="text-left p-3 border border-border bg-card text-foreground font-semibold">
                    {t('projectDetails.candelaria.performance.tableHeaders.after')}
                  </th>
                  <th className="text-left p-3 border border-border bg-card text-foreground font-semibold">
                    {t('projectDetails.candelaria.performance.tableHeaders.improvement')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t('projectDetails.candelaria.performance.metrics', {
                  returnObjects: true,
                }).map((metric, index) => (
                  <tr key={index} className="hover:bg-secondary/30 transition-colors">
                    <td className="p-3 border border-border text-foreground">{metric.label}</td>
                    <td className="p-3 border border-border text-muted-foreground">{metric.before}</td>
                    <td className="p-3 border border-border text-muted-foreground">{metric.after}</td>
                    <td
                      className="p-3 border border-border font-semibold"
                      style={{ color: 'var(--color3)' }}
                    >
                      {metric.improvement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-h3 font-semibold mb-6 text-left">
            {t('projectDetails.candelaria.performance.security.title')}
          </h3>
          <ul className="list-disc list-inside text-body text-foreground font-light space-y-3 text-left">
            {t('projectDetails.candelaria.performance.security.items', {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reflections Section */}
      <section id="reflections" className="py-32 px-4 scroll-mt-32">
        <div className="container mx-auto max-w-5xl">
          <div className="border-t border-[var(--color3)] mb-12" />
          <h2 className="text-h2 font-semibold mb-8 text-center">
            {t('projectDetails.sections.reflections')}
          </h2>
          <p className="text-body text-foreground font-light leading-relaxed text-left mb-6">
            {t('projectDetails.candelaria.reflections.description')}
          </p>
          <p className="text-body text-foreground font-light leading-relaxed text-left">
            {t('projectDetails.candelaria.reflections.keyLearning')}
          </p>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.candelaria.website/"
              target="_blank"
              rel="noopener noreferrer"
              className="general-button inline-flex items-center gap-2"
            >
              {t('projectDetails.candelaria.buttons.viewLive')} <ExternalLink size={18} />
            </a>
            <a
              href="https://github.com/juligm4444/CandelariaWebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="general-button inline-flex items-center gap-2"
            >
              {t('projectDetails.candelaria.buttons.viewCode')} <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </ProjectPageLayout>
  );
};
