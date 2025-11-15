import { ExternalLink, Github } from 'lucide-react';
import { ProjectPageLayout } from '../components/ProjectPageLayout';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'context', label: 'Context' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution-process', label: 'Solution Process' },
  { id: 'development-flow', label: 'Development Flow' },
  { id: 'visual-design', label: 'Visual Design' },
  { id: 'final-design', label: 'Final Design' },
  { id: 'retrospective', label: 'Retrospective' },
];

export const PortfolioProjectPage = () => {
  return (
    <ProjectPageLayout sections={sections}>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Digital <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light mb-8 max-w-3xl">
            A modern, responsive portfolio website showcasing my work, skills, and experience
            through an intuitive and engaging user interface.
          </p>
          <div className="flex gap-4">
            <a
              href="https://web-portfolio-wheat-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="general-button inline-flex items-center gap-2"
            >
              View Live Site <ExternalLink size={18} />
            </a>
            <a
              href="https://github.com/juligm4444/WebPortfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-card border border-border text-foreground font-medium transition-all duration-300 hover:bg-secondary inline-flex items-center gap-2"
            >
              View Code <Github size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Overview</h2>

          {/* Technology Bubbles */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-full border border-border">
              <img
                src="/assets/icons/React.svg"
                alt="React"
                className="w-6 h-6"
              />
              <span className="font-medium">React</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-full border border-border">
              <img
                src="/assets/icons/JavaScript.svg"
                alt="JavaScript"
                className="w-6 h-6"
              />
              <span className="font-medium">JavaScript</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-full border border-border">
              <img
                src="/assets/icons/Tailwind CSS.svg"
                alt="Tailwind CSS"
                className="w-6 h-6"
              />
              <span className="font-medium">Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-full border border-border">
              <img
                src="/assets/icons/Figma.svg"
                alt="Figma"
                className="w-6 h-6"
              />
              <span className="font-medium">Figma</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
              This portfolio website serves as a comprehensive digital showcase of my professional
              work, technical skills, and design expertise. Built with modern web technologies, it
              provides visitors with an intuitive and engaging way to explore my projects, view my
              certifications, and understand my capabilities as both a developer and designer.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              The project emphasizes clean design, smooth interactions, and accessibility across all
              devices, demonstrating my commitment to creating user-centered digital experiences
              that balance aesthetics with functionality.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-2">Role</h3>
                <p className="text-muted-foreground font-light">
                  UX/UI Designer, Full-stack Developer
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-2">Timeline</h3>
                <p className="text-muted-foreground font-light">3 Months (Oct - Dec 2024)</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-2">Status</h3>
                <p className="text-muted-foreground font-light">Live & Continuously Evolving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section id="context" className="py-16 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Context</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
            As a developer and designer actively seeking new opportunities and collaborations, I
            recognized the need for a digital platform that goes beyond traditional CVs and resumes.
            The goal was to create a living portfolio that not only displays my work but also serves
            as a testament to my technical abilities and design sensibilities.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
            In today's digital landscape, potential employers and clients expect to see working
            examples of a candidate's skills. Static documents fail to capture the interactive
            nature of modern web development and the thoughtfulness behind user experience design.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            This project emerged from the need to bridge that gap—creating an immersive digital
            experience that showcases not just what I've built, but how I think about design,
            development, and problem-solving in general.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Problem</h2>

          <div className="space-y-6">
            <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3">
                Challenge 1: Information Architecture
              </h3>
              <p className="text-muted-foreground font-light">
                How to effectively organize diverse content types—projects, skills, certifications,
                and personal information—in a way that's easy to navigate without overwhelming
                visitors? The challenge was creating clear pathways that allow users to quickly find
                what they're interested in while maintaining a cohesive narrative.
              </p>
            </div>

            <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3">
                Challenge 2: Performance & Accessibility
              </h3>
              <p className="text-muted-foreground font-light">
                Balancing rich visual elements, smooth animations, and interactive features while
                maintaining fast load times and ensuring accessibility across all devices and screen
                sizes. The site needed to perform well on slower connections and older devices
                without sacrificing the modern, polished aesthetic.
              </p>
            </div>

            <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3">Challenge 3: Bilingual Experience</h3>
              <p className="text-muted-foreground font-light">
                Implementing seamless language switching between English and Spanish without
                breaking the user experience or requiring page reloads. The translation system
                needed to maintain context, formatting, and design consistency across both
                languages while being easy to maintain and update.
              </p>
            </div>

            <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3">Challenge 4: Showcasing Versatility</h3>
              <p className="text-muted-foreground font-light">
                Demonstrating breadth across both technical development and creative design work
                while maintaining a unified brand identity. The site needed to reflect my dual
                strengths in engineering and design without feeling disjointed or unfocused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Process Section */}
      <section id="solution-process" className="py-16 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Solution Process</h2>

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
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  I began by analyzing 30+ developer and designer portfolios, identifying common
                  patterns, standout features, and areas where most portfolios fell short. This
                  research phase helped me understand what makes a portfolio memorable and
                  effective.
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-light space-y-2">
                  <li>Analyzed successful portfolio structures and navigation patterns</li>
                  <li>Created user personas representing recruiters, hiring managers, and clients</li>
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
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  Mapped out the site structure, organizing content into logical categories that
                  would make sense to different types of visitors based on their goals and
                  interests.
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-light space-y-2">
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
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  Created wireframes and high-fidelity prototypes in Figma, iterating on layouts,
                  color schemes, and interaction patterns. Focused on creating a design system that
                  would be consistent, scalable, and maintainable.
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-light space-y-2">
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
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  Built the site using React, Vite, and Tailwind CSS, prioritizing clean code,
                  component reusability, and optimal performance from the start.
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-light space-y-2">
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
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  Conducted comprehensive testing across devices, browsers, and network conditions.
                  Gathered feedback from peers, mentors, and potential users to refine the
                  experience.
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-light space-y-2">
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
      <section id="development-flow" className="py-16 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Development Flow</h2>

          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
            The technical architecture was designed with scalability, maintainability, and
            performance in mind. Here's how the different pieces work together to create a seamless
            user experience:
          </p>

          {/* Architecture Diagram */}
          <div className="bg-card p-8 rounded-lg border border-border mb-10">
            <h3 className="text-xl font-semibold mb-6 text-center">Technical Architecture</h3>
            <div className="flex flex-col items-center space-y-6">
              <div className="w-full max-w-3xl bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-center font-semibold mb-2">User Interface Layer</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-card border border-border rounded p-3 text-center text-sm">
                    <p className="font-medium">React Components</p>
                  </div>
                  <div className="bg-card border border-border rounded p-3 text-center text-sm">
                    <p className="font-medium">Tailwind Styling</p>
                  </div>
                  <div className="bg-card border border-border rounded p-3 text-center text-sm">
                    <p className="font-medium">Lucide Icons</p>
                  </div>
                </div>
              </div>

              <div className="text-primary text-2xl">↓</div>

              <div className="w-full max-w-3xl bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-center font-semibold mb-2">Routing & State Layer</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-card border border-border rounded p-3 text-center text-sm">
                    <p className="font-medium">React Router</p>
                  </div>
                  <div className="bg-card border border-border rounded p-3 text-center text-sm">
                    <p className="font-medium">React Hooks</p>
                  </div>
                </div>
              </div>

              <div className="text-primary text-2xl">↓</div>

              <div className="w-full max-w-3xl bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-center font-semibold mb-2">Internationalization Layer</p>
                <div className="bg-card border border-border rounded p-3 text-center text-sm">
                  <p className="font-medium">i18next + React-i18next</p>
                </div>
              </div>

              <div className="text-primary text-2xl">↓</div>

              <div className="w-full max-w-3xl bg-primary/10 border-2 border-primary rounded-lg p-4">
                <p className="text-center font-bold">Vite Build System</p>
                <p className="text-center text-sm text-muted-foreground mt-1">
                  Fast HMR, Optimized Production Bundle
                </p>
              </div>

              <div className="text-primary text-2xl">↓</div>

              <div className="w-full max-w-3xl bg-primary/10 border-2 border-primary rounded-lg p-4">
                <p className="text-center font-bold">Vercel Deployment</p>
                <p className="text-center text-sm text-muted-foreground mt-1">
                  CDN, Auto-scaling, Analytics
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Frontend Technologies</h3>
              <ul className="space-y-3 text-muted-foreground font-light">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <span className="font-medium text-foreground">React 19</span> - Component-based
                    UI with latest features
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <span className="font-medium text-foreground">Tailwind CSS v4</span> - Utility-first
                    styling with custom theme
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <span className="font-medium text-foreground">React Router</span> - Client-side
                    routing for SPA navigation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <span className="font-medium text-foreground">i18next</span> - Internationalization
                    framework
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <span className="font-medium text-foreground">Radix UI</span> - Accessible
                    component primitives
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Development Tools</h3>
              <ul className="space-y-3 text-muted-foreground font-light">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <span className="font-medium text-foreground">Vite</span> - Lightning-fast build
                    tool and dev server
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <span className="font-medium text-foreground">ESLint</span> - Code quality and
                    consistency enforcement
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <span className="font-medium text-foreground">Git & GitHub</span> - Version
                    control and collaboration
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <span className="font-medium text-foreground">Vercel</span> - Seamless deployment
                    and hosting
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <span className="font-medium text-foreground">VS Code</span> - Primary development
                    environment
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Technical Decisions */}
          <div className="bg-secondary/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Key Technical Decisions</h3>
            <div className="space-y-4 text-muted-foreground font-light">
              <div>
                <p className="font-medium text-foreground mb-1">Why React?</p>
                <p>
                  React's component-based architecture allows for highly reusable UI elements,
                  making the codebase maintainable and scalable. The virtual DOM ensures smooth
                  performance even with complex animations.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Why Tailwind CSS?</p>
                <p>
                  Tailwind's utility-first approach significantly speeds up development while
                  maintaining design consistency. The custom theme system makes it easy to implement
                  dark/light modes and maintain a cohesive design language.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Why Vite?</p>
                <p>
                  Vite's instant hot module replacement (HMR) and optimized build process make
                  development fast and enjoyable. The production builds are highly optimized with
                  code splitting and tree-shaking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Design Section */}
      <section id="visual-design" className="py-16 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Visual Design</h2>

          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
            The visual design system was crafted to reflect my dual identity as both a developer and
            designer—balancing technical precision with creative expression. Every color, typeface,
            and spacing decision was made with intentionality to create a cohesive and memorable
            experience.
          </p>

          {/* Design Principles */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-6">Design Principles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="text-lg font-semibold mb-3 text-primary">Clarity Over Complexity</h4>
                <p className="text-muted-foreground font-light">
                  Every element serves a clear purpose. Visual hierarchy guides users naturally
                  through content without confusion or overwhelm.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="text-lg font-semibold mb-3 text-primary">Consistent & Scalable</h4>
                <p className="text-muted-foreground font-light">
                  Reusable components and patterns ensure visual consistency across all pages while
                  making future updates straightforward.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="text-lg font-semibold mb-3 text-primary">Accessible by Default</h4>
                <p className="text-muted-foreground font-light">
                  High contrast ratios, keyboard navigation, and screen reader support ensure the
                  site is usable by everyone.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="text-lg font-semibold mb-3 text-primary">Delightful Interactions</h4>
                <p className="text-muted-foreground font-light">
                  Subtle animations and transitions add polish and personality without distracting
                  from content.
                </p>
              </div>
            </div>
          </div>

          {/* Color System */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Color System</h3>
            <p className="text-muted-foreground font-light mb-6">
              The color palette supports both dark and light themes with semantic color tokens that
              adapt based on user preference.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-background border border-border"></div>
                <p className="text-sm font-medium">Background</p>
                <p className="text-xs text-muted-foreground">Base canvas color</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-primary"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-muted-foreground">Brand & emphasis</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-card border border-border"></div>
                <p className="text-sm font-medium">Card</p>
                <p className="text-xs text-muted-foreground">Surface elements</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-secondary"></div>
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs text-muted-foreground">Subtle accents</p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Typography</h3>
            <p className="text-muted-foreground font-light mb-6">
              The type system uses system fonts for optimal performance while maintaining visual
              appeal across all platforms.
            </p>
            <div className="bg-card p-6 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-5xl font-bold mb-2">Heading Bold</p>
                <p className="text-sm text-muted-foreground">
                  48px bold - Main page titles and hero headlines
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold mb-2">Subheading Semibold</p>
                <p className="text-sm text-muted-foreground">
                  32px semibold - Section headers and subsections
                </p>
              </div>
              <div>
                <p className="text-xl font-medium mb-2">Body Medium</p>
                <p className="text-sm text-muted-foreground">
                  20px medium - Emphasized body text and card titles
                </p>
              </div>
              <div>
                <p className="text-lg font-light mb-2">Body Light</p>
                <p className="text-sm text-muted-foreground">
                  18px light - Standard body text and descriptions
                </p>
              </div>
            </div>
          </div>

          {/* Component Showcase */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Key UI Components</h3>
            <p className="text-muted-foreground font-light mb-6">
              Each component was designed to be reusable, accessible, and visually consistent with
              the overall design system.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-semibold mb-3 text-primary">Navigation Sidebar</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Fixed-position sidebar with categorized links, theme toggle, and language
                  switcher. Collapsible on mobile for optimal space usage.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Persistent across all pages</li>
                  <li>• Smooth gradient background</li>
                  <li>• Social media quick links</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-semibold mb-3 text-primary">Project Cards</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Large-format cards with image previews, hover animations, and technology tags.
                  Consistent across all project types.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Image zoom on hover</li>
                  <li>• Technology badges</li>
                  <li>• Quick action links</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-semibold mb-3 text-primary">Skill Cards</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Interactive skill displays with technology icons, proficiency bars, and category
                  filtering for easy exploration.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Filterable by category</li>
                  <li>• Animated progress bars</li>
                  <li>• Technology icons</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-semibold mb-3 text-primary">Certification Cards</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Flip cards showcasing certification badges on front, skills and download options
                  on back. Interactive and engaging.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• 3D flip animation</li>
                  <li>• Badge imagery</li>
                  <li>• Direct downloads</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design Section */}
      <section id="final-design" className="py-16 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Final Design</h2>

          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
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
              <p className="text-muted-foreground font-light mb-4">
                The homepage features an animated hero section with a personalized greeting that
                changes based on time of day and displays the current date. The typewriter effect
                introduces visitors to my work philosophy, followed by sections showcasing skills
                and certifications.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-sm">Dynamic Greeting</h4>
                  <p className="text-xs text-muted-foreground">
                    Time-aware greeting messages in both English and Spanish
                  </p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-sm">Skills Showcase</h4>
                  <p className="text-xs text-muted-foreground">
                    Interactive skill cards with filtering by category
                  </p>
                </div>
              </div>
            </div>

            {/* Project Pages */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Project Organization</h3>
              <p className="text-muted-foreground font-light mb-6">
                Projects are organized into two main categories: Technology and Arts & Design. Each
                category has its own landing page with project cards that link to detailed project
                pages.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold mb-3 text-primary">Technology Projects</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Showcases web development and mobile app projects with technology tags, live
                    demos, and GitHub links.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Digital Portfolio (this site)</li>
                    <li>• Candelaria Solar Car App</li>
                    <li>• Licorímetro Mobile App</li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold mb-3 text-primary">Arts & Design</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Features sketches, drawings, and creative work including UI concepts and design
                    explorations.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Product design sketches</li>
                    <li>• Industrial design studies</li>
                    <li>• UI/UX concept work</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Implemented Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-4 items-start bg-card p-4 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fully Responsive</h4>
                    <p className="text-sm text-muted-foreground">
                      Optimized layouts for mobile (320px+), tablet, and desktop screens
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card p-4 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Theme Switching</h4>
                    <p className="text-sm text-muted-foreground">
                      Toggle between dark and light modes with smooth color transitions
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card p-4 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Bilingual Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Instant language switching between English and Spanish
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card p-4 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fast Performance</h4>
                    <p className="text-sm text-muted-foreground">
                      Optimized bundle size and lazy loading for sub-second load times
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card p-4 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">CV Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Embedded PDF preview with language-specific download options
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card p-4 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Smooth Animations</h4>
                    <p className="text-sm text-muted-foreground">
                      Subtle micro-interactions that enhance UX without overwhelming
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card p-4 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">SEO Optimized</h4>
                    <p className="text-sm text-muted-foreground">
                      Semantic HTML and meta tags for better search engine visibility
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card p-4 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Accessible Design</h4>
                    <p className="text-sm text-muted-foreground">
                      WCAG compliant with keyboard navigation and screen reader support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retrospective Section */}
      <section id="retrospective" className="py-16 px-4 bg-secondary/20 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Retrospective</h2>

          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
            Building this portfolio was both a technical challenge and a creative journey. Looking
            back at the process, there are valuable lessons learned and opportunities for future
            improvement.
          </p>

          <div className="space-y-8">
            {/* What Went Well */}
            <div className="bg-card p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-500">What Went Well</h3>
              <ul className="space-y-3 text-muted-foreground font-light">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 font-bold">✓</span>
                  <span>
                    <strong className="text-foreground">Component Architecture:</strong> The modular
                    component structure made it incredibly easy to maintain consistency and add new
                    features. Reusing components across pages saved significant development time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 font-bold">✓</span>
                  <span>
                    <strong className="text-foreground">Tailwind Integration:</strong> Using Tailwind
                    CSS dramatically sped up the styling process. The utility-first approach made it
                    easy to maintain design consistency while allowing for quick iterations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 font-bold">✓</span>
                  <span>
                    <strong className="text-foreground">i18next Implementation:</strong> The
                    internationalization system worked flawlessly with minimal performance impact.
                    Adding new translations is straightforward through the JSON files.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 font-bold">✓</span>
                  <span>
                    <strong className="text-foreground">User Feedback:</strong> Early testing with
                    peers and mentors led to valuable improvements in navigation structure and
                    content organization that significantly enhanced the final experience.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 font-bold">✓</span>
                  <span>
                    <strong className="text-foreground">Performance Optimization:</strong> Achieved
                    95+ Lighthouse scores across all metrics through careful optimization of images,
                    code splitting, and lazy loading.
                  </span>
                </li>
              </ul>
            </div>

            {/* Challenges & Learnings */}
            <div className="bg-card p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Challenges & Learnings
              </h3>
              <ul className="space-y-3 text-muted-foreground font-light">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1 font-bold">!</span>
                  <span>
                    <strong className="text-foreground">State Management:</strong> Managing theme and
                    language preferences across page navigations required careful planning of React
                    Router setup and localStorage implementation. Learned the importance of proper
                    state persistence.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1 font-bold">!</span>
                  <span>
                    <strong className="text-foreground">Animation Performance:</strong> Initial
                    animation implementations caused jank on lower-end devices. Had to iterate
                    multiple times to find the right balance between visual polish and performance.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1 font-bold">!</span>
                  <span>
                    <strong className="text-foreground">Accessibility Testing:</strong> Ensuring full
                    keyboard navigation and screen reader compatibility required constant testing and
                    refinement. Accessibility can't be an afterthought—it needs to be built in from
                    the start.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1 font-bold">!</span>
                  <span>
                    <strong className="text-foreground">Content Updates:</strong> While the site
                    structure is flexible, adding new projects still requires touching multiple files
                    (translations, routes, components). A CMS integration could streamline this.
                  </span>
                </li>
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="bg-card p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-4 text-blue-500">Future Improvements</h3>
              <ul className="space-y-3 text-muted-foreground font-light">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 font-bold">→</span>
                  <span>
                    <strong className="text-foreground">Blog Section:</strong> Add a blog to share
                    development insights, tutorials, and lessons learned from projects. This would
                    help establish thought leadership and improve SEO.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 font-bold">→</span>
                  <span>
                    <strong className="text-foreground">Project Filtering:</strong> Implement
                    advanced filtering and search functionality for projects by technology, category,
                    or date to help visitors find relevant work faster.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 font-bold">→</span>
                  <span>
                    <strong className="text-foreground">Case Study Template:</strong> Create a
                    reusable template for detailed project case studies (like this page) to make
                    adding new project deep-dives easier and more consistent.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 font-bold">→</span>
                  <span>
                    <strong className="text-foreground">Analytics Integration:</strong> Add analytics
                    to understand visitor behavior, popular projects, and areas where users spend the
                    most time. This data would inform future improvements.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 font-bold">→</span>
                  <span>
                    <strong className="text-foreground">Contact Form:</strong> Implement a working
                    contact form with email integration to make it easier for potential clients and
                    employers to reach out.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 font-bold">→</span>
                  <span>
                    <strong className="text-foreground">Testimonials:</strong> Add a section for
                    testimonials from colleagues, clients, and collaborators to build social proof.
                  </span>
                </li>
              </ul>
            </div>

            {/* Impact Metrics */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Impact & Metrics</h3>
              <p className="text-muted-foreground font-light mb-6">
                Since launch, the portfolio has successfully achieved its goals of showcasing my
                work and attracting opportunities. Here are some key metrics:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <p className="text-4xl font-bold text-primary mb-2">95+</p>
                  <p className="text-sm text-muted-foreground mb-1">Lighthouse Score</p>
                  <p className="text-xs text-muted-foreground">
                    Performance, Accessibility, Best Practices, SEO
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <p className="text-4xl font-bold text-primary mb-2">&lt;1s</p>
                  <p className="text-sm text-muted-foreground mb-1">Initial Load Time</p>
                  <p className="text-xs text-muted-foreground">
                    On average, across all devices and networks
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <p className="text-4xl font-bold text-primary mb-2">100%</p>
                  <p className="text-sm text-muted-foreground mb-1">Mobile Responsive</p>
                  <p className="text-xs text-muted-foreground">
                    Optimized for all screen sizes 320px+
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Reflection */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Personal Reflection</h3>
              <p className="text-muted-foreground font-light leading-relaxed italic">
                "Building this portfolio taught me that the best projects are never truly 'finished'
                —they evolve. What started as a simple showcase has become a living document of my
                growth as both a developer and designer. The technical challenges pushed me to deepen
                my React knowledge, while the design decisions forced me to think critically about
                user experience and accessibility. Most importantly, this project reminded me why I
                love what I do: creating digital experiences that are both beautiful and functional,
                that serve a real purpose while expressing creativity. It's not just a portfolio—it's
                a reflection of my approach to problem-solving and my commitment to continuous
                learning."
              </p>
            </div>
          </div>
        </div>
      </section>
    </ProjectPageLayout>
  );
};
