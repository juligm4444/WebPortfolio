import { ExternalLink, Github } from 'lucide-react';
import { ProjectPageLayout } from '../components/ProjectPageLayout';
import { useTranslation } from 'react-i18next';

export const PortfolioProjectPage = () => {
  const { t } = useTranslation();

  const sections = [
    { id: 'overview', label: t('projectDetails.sections.overview') },
    { id: 'context', label: t('projectDetails.sections.context') },
    { id: 'problem', label: t('projectDetails.sections.problem') },
    { id: 'solution-process', label: t('projectDetails.sections.solutionProcess') },
    { id: 'development-flow', label: t('projectDetails.sections.developmentFlow') },
    { id: 'visual-design', label: t('projectDetails.sections.visualDesign') },
    { id: 'final-design', label: t('projectDetails.sections.finalDesign') },
    { id: 'retrospective', label: t('projectDetails.sections.retrospective') },
  ];

  return (
    <ProjectPageLayout sections={sections}>
      {/* Project Title */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            {t('projectDetails.portfolio.title')}{' '}
            <span className="text-primary">{t('projectDetails.portfolio.titleHighlight')}</span>
          </h1>
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="py-24 px-4 scroll-mt-24">
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
                <h3 className="text-xl font-semibold mb-4 text-left">
                  {t('projectDetails.portfolio.myRole.title')}
                </h3>
                <p className="text-[25px] text-black font-light text-left">
                  {t('projectDetails.portfolio.myRole.description')}
                </p>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-left">
                  {t('projectDetails.portfolio.timeline.title')}
                </h3>
                <p className="text-[25px] text-black font-light text-left">
                  {t('projectDetails.portfolio.timeline.duration')}
                </p>
                <p className="text-[25px] text-black font-light text-left">
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
              <h3 className="text-xl font-semibold mb-4 text-left">
                {t('projectDetails.sections.overview')}
              </h3>
              <div className="space-y-4">
                <p className="text-[25px] text-black font-light leading-relaxed text-left">
                  {t('projectDetails.portfolio.description.paragraph1')}
                </p>
                <p className="text-[25px] text-black font-light leading-relaxed text-left">
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
            {/* Paragraphs on the right */}
            <div className="flex-1 space-y-6">
              <p className="text-[25px] text-black font-light leading-relaxed text-left">
                {t('projectDetails.portfolio.context.paragraph1')}
              </p>
              <p className="text-[25px] text-black font-light leading-relaxed text-left">
                {t('projectDetails.portfolio.context.paragraph2')}
              </p>
              <p className="text-[25px] text-black font-light leading-relaxed text-left">
                {t('projectDetails.portfolio.context.paragraph3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6 text-left">
            <p className="text-[25px] text-black font-light leading-relaxed text-left">
              {t('projectDetails.portfolio.problem.challenge1.title')}{' '}
              {t('projectDetails.portfolio.problem.challenge1.description')}
            </p>
            <p className="text-[25px] text-black font-light leading-relaxed text-left">
              {t('projectDetails.portfolio.problem.challenge2.title')}{' '}
              {t('projectDetails.portfolio.problem.challenge2.description')}
            </p>
            <p className="text-[25px] text-black font-light leading-relaxed text-left">
              {t('projectDetails.portfolio.problem.challenge3.title')}{' '}
              {t('projectDetails.portfolio.problem.challenge3.description')}
            </p>
            <p className="text-[25px] text-black font-light leading-relaxed text-left">
              {t('projectDetails.portfolio.problem.challenge4.title')}{' '}
              {t('projectDetails.portfolio.problem.challenge4.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Process Section */}
      <section id="solution-process" className="py-24 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-10">
            {/* Phase 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Research & Discovery</h3>
                <p className="text-[25px] text-black font-light mb-4 leading-relaxed text-left">
                  I began by analyzing 30+ developer and designer portfolios, identifying common
                  patterns, standout features, and areas where most portfolios fell short. This
                  research phase helped me understand what makes a portfolio memorable and
                  effective.
                </p>
                <ul className="list-disc list-inside text-black font-light space-y-2">
                  <li>Analyzed successful portfolio structures and navigation patterns</li>
                  <li>
                    Created user personas representing recruiters, hiring managers, and clients
                  </li>
                  <li>Defined core features: project showcases, skills display, certifications</li>
                  <li>Established design principles: clarity, accessibility, personality</li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Information Architecture</h3>
                <p className="text-[25px] text-black font-light mb-4 leading-relaxed text-left">
                  Mapped out the site structure, organizing content into logical categories that
                  would make sense to different types of visitors based on their goals and
                  interests.
                </p>
                <ul className="list-disc list-inside text-black font-light space-y-2">
                  <li>Created site map with clear hierarchies and relationships</li>
                  <li>Designed navigation system with categorized project types</li>
                  <li>Planned content flow from hero to projects to contact</li>
                  <li>Structured data for easy internationalization</li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Design & Prototyping</h3>
                <p className="text-[25px] text-black font-light mb-4 leading-relaxed text-left">
                  Created wireframes and high-fidelity prototypes in Figma, iterating on layouts,
                  color schemes, and interaction patterns. Focused on creating a design system that
                  would be consistent, scalable, and maintainable.
                </p>
                <ul className="list-disc list-inside text-black font-light space-y-2">
                  <li>Designed modular component system with reusable patterns</li>
                  <li>Established color palette supporting both dark and light themes</li>
                  <li>Created responsive layouts for mobile, tablet, and desktop breakpoints</li>
                  <li>Prototyped key interactions and animation sequences</li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Development</h3>
                <p className="text-[25px] text-black font-light mb-4 leading-relaxed text-left">
                  Built the site using React, Vite, and Tailwind CSS, prioritizing clean code,
                  component reusability, and optimal performance from the start.
                </p>
                <ul className="list-disc list-inside text-black font-light space-y-2">
                  <li>Implemented component-based architecture with React 19</li>
                  <li>Integrated i18next for seamless bilingual support</li>
                  <li>Created custom animations using Tailwind and CSS</li>
                  <li>Optimized images and assets for fast loading times</li>
                  <li>Implemented lazy loading for improved performance</li>
                </ul>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Testing & Refinement</h3>
                <p className="text-[25px] text-black font-light mb-4 leading-relaxed text-left">
                  Conducted comprehensive testing across devices, browsers, and network conditions.
                  Gathered feedback from peers, mentors, and potential users to refine the
                  experience.
                </p>
                <ul className="list-disc list-inside text-black font-light space-y-2">
                  <li>Tested on iOS, Android, Windows, and macOS devices</li>
                  <li>Verified accessibility with screen readers and keyboard navigation</li>
                  <li>Optimized performance using Lighthouse and Chrome DevTools</li>
                  <li>Implemented fixes based on real user feedback</li>
                  <li>Conducted A/B testing on key interactions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Flow Section */}
      <section id="development-flow" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <p className="text-[25px] text-black font-light leading-relaxed mb-8 text-left">
            The technical architecture was designed with scalability, maintainability, and
            performance in mind. Here's how the different pieces work together to create a seamless
            user experience:
          </p>
        </div>
      </section>

      {/* Visual Design Section */}
      <section id="visual-design" className="py-24 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <p className="text-[25px] text-black font-light leading-relaxed mb-10 text-left">
            The visual design system was crafted to reflect my dual identity as both a developer and
            designer—balancing technical precision with creative expression. Every color, typeface,
            and spacing decision was made with intentionality to create a cohesive and memorable
            experience.
          </p>

          {/* Color System */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Color System</h3>
            <p className="text-[25px] text-black font-light mb-6 text-left">
              The color palette supports both dark and light themes with semantic color tokens that
              adapt based on user preference.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-background border border-border"></div>
                <p className="text-sm font-medium">Background</p>
                <p className="text-xs text-black">Base canvas color</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-primary"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-black">Brand & emphasis</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-card border border-border"></div>
                <p className="text-sm font-medium">Card</p>
                <p className="text-xs text-black">Surface elements</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-secondary"></div>
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs text-black">Subtle accents</p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Typography</h3>
            <p className="text-[25px] text-black font-light mb-6 text-left">
              The type system uses system fonts for optimal performance while maintaining visual
              appeal across all platforms.
            </p>
            <div className="bg-card p-6 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-5xl font-bold mb-2">Heading Bold</p>
                <p className="text-sm text-black">
                  48px bold - Main page titles and hero headlines
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold mb-2">Subheading Semibold</p>
                <p className="text-sm text-black">
                  32px semibold - Section headers and subsections
                </p>
              </div>
              <div>
                <p className="text-[25px] font-medium mb-2">Body Medium</p>
                <p className="text-sm text-black">
                  25px medium - Emphasized body text and card titles
                </p>
              </div>
              <div>
                <p className="text-[25px] font-light mb-2">Body Light</p>
                <p className="text-sm text-black">
                  25px light - Standard body text and descriptions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design Section */}
      <section id="final-design" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <p className="text-[25px] text-black font-light leading-relaxed mb-10 text-left">
            The final implementation brings together all design and technical decisions into a
            cohesive, performant, and delightful user experience. Here are the key features and
            pages that make up the portfolio:
          </p>

          {/* Screenshot/Feature Gallery */}
          <div className="space-y-10">
            {/* Homepage */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Homepage Experience</h3>
              <div className="bg-card rounded-lg overflow-hidden border border-border mb-4">
                <img
                  src="/ProjectPreviews/web-portfolio.png"
                  alt="Portfolio homepage"
                  className="w-full"
                />
              </div>
              <p className="text-[25px] text-black font-light text-left">
                The homepage features an animated hero section with a personalized greeting that
                changes based on time of day and displays the current date. The typewriter effect
                introduces visitors to my work philosophy, followed by sections showcasing skills
                and certifications.
              </p>
            </div>

            {/* Project Pages */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Project Organization</h3>
              <p className="text-[25px] text-black font-light text-left">
                Projects are organized into two main categories: Technology and Arts & Design. Each
                category has its own landing page with project cards that link to detailed project
                pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retrospective Section */}
      <section id="retrospective" className="py-24 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <p className="text-[25px] text-black font-light leading-relaxed text-left mb-10">
            Building this portfolio was both a technical challenge and a creative journey. Looking
            back at the process, there are valuable lessons learned and opportunities for future
            improvement.
          </p>

          {/* Impact Metrics */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Impact & Metrics</h3>
            <p className="text-[25px] text-black font-light mb-6 text-left">
              Since launch, the portfolio has successfully achieved its goals of showcasing my work
              and attracting opportunities. Here are some key metrics:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <p className="text-4xl font-bold text-primary mb-2">95+</p>
                <p className="text-sm text-black mb-1">Lighthouse Score</p>
                <p className="text-xs text-black">
                  Performance, Accessibility, Best Practices, SEO
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <p className="text-4xl font-bold text-primary mb-2">&lt;1s</p>
                <p className="text-sm text-black mb-1">Initial Load Time</p>
                <p className="text-xs text-black">
                  On average, across all devices and networks
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-black mb-1">Mobile Responsive</p>
                <p className="text-xs text-black">
                  Optimized for all screen sizes 320px+
                </p>
              </div>
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
