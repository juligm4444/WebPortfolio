# IA Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the portfolio's information architecture so featured work appears on the home page, the About page shows 3 core capabilities instead of a 21-item skills grid, and certifications/full tech stack are moved to collapsible sections on About.

**Architecture:** Add a `FeaturedWorkSection` component to the home page (replacing SkillsSection + CertificationsSection). Add a `CollapsibleSection` wrapper component for reuse. Update AboutPage to include a CoreCapabilities inline section (3 capability areas) plus collapsible full tech stack and certifications at the bottom.

**Tech Stack:** React 19, Tailwind CSS v4, react-i18next, lucide-react, custom `useInView` hook, CSS variables for theming.

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `src/languages/en.json` | Add `featuredWork` and capabilities keys |
| Modify | `src/languages/es.json` | Add Spanish translations for same keys |
| Create | `src/components/FeaturedWorkSection.jsx` | Asymmetric featured projects for home page |
| Create | `src/components/CollapsibleSection.jsx` | Reusable collapsible wrapper with toggle |
| Modify | `src/pages/HomePage.jsx` | Swap SkillsSection+CertificationsSection → FeaturedWorkSection |
| Modify | `src/pages/AboutPage.jsx` | Add capabilities section + collapsible tech stack + certs |

---

## Task 1: Add translations to en.json and es.json

**Files:**
- Modify: `src/languages/en.json`
- Modify: `src/languages/es.json`

- [ ] **Step 1: Add `featuredWork` key to en.json**

In `src/languages/en.json`, add the following top-level key after the `"hero"` block (around line 44):

```json
"featuredWork": {
  "title1": "Featured",
  "title2": "Work",
  "subtitle": "Recent projects at the intersection of design and engineering.",
  "viewAll": "View all projects",
  "projects": [
    {
      "id": "portfolio",
      "category": "Web Development",
      "title": "Portfolio Website",
      "description": "A design-forward portfolio built with React and Tailwind CSS, exploring the intersection of engineering and visual craft.",
      "link": "/projects/portfolio",
      "image": "/ProjectPreviews/web-portfolio.png",
      "tech": ["React", "Tailwind CSS", "Figma"]
    },
    {
      "id": "candelaria",
      "category": "Full-Stack Platform",
      "title": "Candelaria Website",
      "description": "Complete digital platform for a university solar car competition team — e-commerce, gamification, and dual payment support.",
      "link": "/projects/candelaria",
      "image": "",
      "tech": ["React 19", "Django", "PostgreSQL"]
    },
    {
      "id": "creative",
      "category": "Design & Art",
      "title": "Creative Work",
      "description": "Experimental visual design and illustration spanning digital drawings, sketches, and conceptual projects.",
      "link": "/arts-design",
      "image": "/ProjectPreviews/TCV1.jpg",
      "tech": ["Figma", "Photoshop", "Illustrator"]
    }
  ]
},
```

- [ ] **Step 2: Add capabilities and collapsible keys to `aboutPage` in en.json**

In `src/languages/en.json`, extend the `"aboutPage"` object. Add to `"sections"`:
```json
"capabilities": "Capabilities",
"techStack": "Tech Stack",
"certifications": "Certifications"
```

Add to `"aboutPage"` (after the existing `"education"` block):
```json
"capabilities": {
  "items": [
    {
      "title": "Frontend & UI",
      "description": "Building pixel-perfect interfaces with React and Tailwind CSS, informed by strong Figma prototyping and a keen eye for visual detail.",
      "tools": ["React.svg", "Tailwind CSS.svg", "Figma.svg"]
    },
    {
      "title": "Full-Stack Engineering",
      "description": "Backend architecture with Python and Django — REST APIs, PostgreSQL databases, authentication, and payment integrations.",
      "tools": ["Python.svg", "Django.svg", "SQL Developer.svg"]
    },
    {
      "title": "Mobile & Creative",
      "description": "Cross-platform mobile development with Flutter, and interactive 3D experiences with Unity and Unreal Engine.",
      "tools": ["Flutter.svg", "Unity.svg", "Unreal Engine.svg"]
    }
  ]
},
"techStack": {
  "description": "Complete toolkit across frontend, backend, mobile, design, and tooling."
},
"collapsible": {
  "expand": "Show",
  "collapse": "Hide"
}
```

- [ ] **Step 3: Add same keys to es.json**

In `src/languages/es.json`, add the `"featuredWork"` key (top-level, after `"hero"`):
```json
"featuredWork": {
  "title1": "Trabajo",
  "title2": "Destacado",
  "subtitle": "Proyectos recientes en la intersección del diseño y la ingeniería.",
  "viewAll": "Ver todos los proyectos",
  "projects": [
    {
      "id": "portfolio",
      "category": "Desarrollo Web",
      "title": "Portafolio Digital",
      "description": "Un portafolio con sólido sentido del diseño, construido con React y Tailwind CSS, explorando la intersección entre ingeniería y oficio visual.",
      "link": "/projects/portfolio",
      "image": "/ProjectPreviews/web-portfolio.png",
      "tech": ["React", "Tailwind CSS", "Figma"]
    },
    {
      "id": "candelaria",
      "category": "Plataforma Full-Stack",
      "title": "Sitio Web Candelaria",
      "description": "Plataforma digital completa para un equipo universitario de autos solares — e-commerce, gamificación y soporte de pagos dual.",
      "link": "/projects/candelaria",
      "image": "",
      "tech": ["React 19", "Django", "PostgreSQL"]
    },
    {
      "id": "creative",
      "category": "Diseño y Arte",
      "title": "Trabajo Creativo",
      "description": "Diseño visual experimental e ilustración: dibujos digitales, bocetos y proyectos conceptuales.",
      "link": "/arts-design",
      "image": "/ProjectPreviews/TCV1.jpg",
      "tech": ["Figma", "Photoshop", "Illustrator"]
    }
  ]
},
```

In `src/languages/es.json`, extend `"aboutPage"`. Add to `"sections"`:
```json
"capabilities": "Capacidades",
"techStack": "Tecnologías",
"certifications": "Certificaciones"
```

Add to `"aboutPage"` (after `"education"`):
```json
"capabilities": {
  "items": [
    {
      "title": "Frontend y UI",
      "description": "Construyendo interfaces pixel-perfect con React y Tailwind CSS, informadas por prototipos en Figma y un fuerte criterio visual.",
      "tools": ["React.svg", "Tailwind CSS.svg", "Figma.svg"]
    },
    {
      "title": "Ingeniería Full-Stack",
      "description": "Arquitectura backend con Python y Django — APIs REST, bases de datos PostgreSQL, autenticación e integración de pagos.",
      "tools": ["Python.svg", "Django.svg", "SQL Developer.svg"]
    },
    {
      "title": "Mobile y Creativo",
      "description": "Desarrollo móvil multiplataforma con Flutter, y experiencias 3D interactivas con Unity y Unreal Engine.",
      "tools": ["Flutter.svg", "Unity.svg", "Unreal Engine.svg"]
    }
  ]
},
"techStack": {
  "description": "Kit completo de herramientas: frontend, backend, mobile, diseño y herramientas."
},
"collapsible": {
  "expand": "Mostrar",
  "collapse": "Ocultar"
}
```

- [ ] **Step 4: Commit**
```bash
git add src/languages/en.json src/languages/es.json
git commit -m "feat: add featuredWork and capabilities i18n keys"
```

---

## Task 2: Create CollapsibleSection.jsx

**Files:**
- Create: `src/components/CollapsibleSection.jsx`

- [ ] **Step 1: Create the file**

Create `src/components/CollapsibleSection.jsx` with this exact content:

```jsx
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export const CollapsibleSection = ({ id, title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { t } = useTranslation();

  return (
    <section id={id} className="py-10 md:py-16 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="about-divider border-t border-border mb-8 md:mb-12" />
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between gap-4 group mb-0"
          aria-expanded={isOpen}
          aria-controls={`${id}-content`}
        >
          <h3 className="text-h2 font-semibold text-primary text-left">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0">
            <span className="text-sm font-medium">
              {isOpen ? t('aboutPage.collapsible.collapse') : t('aboutPage.collapsible.expand')}
            </span>
            <ChevronDown
              className={cn(
                'w-5 h-5 transition-transform duration-300',
                isOpen ? 'rotate-180' : 'rotate-0'
              )}
            />
          </div>
        </button>

        <div
          id={`${id}-content`}
          className={cn(
            'overflow-hidden transition-all duration-500 ease-in-out',
            isOpen ? 'max-h-[5000px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Commit**
```bash
git add src/components/CollapsibleSection.jsx
git commit -m "feat: add CollapsibleSection reusable component"
```

---

## Task 3: Create FeaturedWorkSection.jsx

**Files:**
- Create: `src/components/FeaturedWorkSection.jsx`

- [ ] **Step 1: Create the file**

Create `src/components/FeaturedWorkSection.jsx` with this exact content:

```jsx
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
            className="w-5 h-5 text-[var(--color4)] flex-shrink-0 translate-x-0 translate-y-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
```

- [ ] **Step 2: Commit**
```bash
git add src/components/FeaturedWorkSection.jsx
git commit -m "feat: add FeaturedWorkSection component for home page"
```

---

## Task 4: Update HomePage.jsx

**Files:**
- Modify: `src/pages/HomePage.jsx`

- [ ] **Step 1: Replace file content**

Replace the entire content of `src/pages/HomePage.jsx` with:

```jsx
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { FeaturedWorkSection } from '../components/FeaturedWorkSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div
      id="root"
      className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="lg:ml-52 xl:ml-64 flex-1 flex flex-col min-h-screen">
        <HeroSection />
        <FeaturedWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
```

- [ ] **Step 2: Run dev server and visually verify the home page**

```bash
npm run dev
```

Navigate to `http://localhost:5173`. Verify:
- Hero section still renders correctly with typewriter animation
- Featured work section appears below hero with 3 project cards (Portfolio large, Candelaria + Creative stacked)
- Candelaria card shows gradient background with logo (no broken image)
- "View all projects" link at bottom points to `/projects`
- Contact section renders below featured work
- No console errors

- [ ] **Step 3: Commit**
```bash
git add src/pages/HomePage.jsx
git commit -m "feat: replace skills/certs on home with FeaturedWorkSection"
```

---

## Task 5: Update AboutPage.jsx

**Files:**
- Modify: `src/pages/AboutPage.jsx`

Add three new pieces to the About page:
1. A **Core Capabilities** section (3 cards: Frontend & UI, Full-Stack Engineering, Mobile & Creative) — placed after Education, before Focus.
2. A **collapsible Tech Stack** section — uses `CollapsibleSection` wrapping the existing `SkillsSection`.
3. A **collapsible Certifications** section — uses `CollapsibleSection` wrapping the existing `CertificationsSection`.

The sidebar sections list must also be updated to include these new sections.

- [ ] **Step 1: Replace the entire file content**

Replace `src/pages/AboutPage.jsx` with:

```jsx
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ProjectPageLayout } from '../components/ProjectPageLayout';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { SkillsSection } from '../components/SkillsSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { useInView } from '../hooks/useInView';

const iconMap = {
  'React.svg': '/assets/icons/React.svg',
  'Tailwind CSS.svg': '/assets/icons/Tailwind CSS.svg',
  'Figma.svg': '/assets/icons/Figma.svg',
  'Python.svg': '/assets/icons/Python.svg',
  'Django.svg': 'assets/icons/Django.svg',
  'SQL Developer.svg': '/assets/icons/SQL Developer.svg',
  'Flutter.svg': '/assets/icons/Flutter.svg',
  'Unity.svg': '/assets/icons/Unity.svg',
  'Unreal Engine.svg': '/assets/icons/Unreal Engine.svg',
};

const CapabilityCard = ({ item }) => (
  <div className="flex flex-col gap-4 p-5 md:p-6 rounded-xl border border-border bg-[var(--color2)] hover:border-[var(--color4)] transition-colors duration-300">
    <div className="flex gap-3">
      {item.tools.map((tool) => (
        <div
          key={tool}
          className="w-9 h-9 rounded-md bg-[var(--skill-icon-bg)] flex items-center justify-center flex-shrink-0"
        >
          <img
            src={iconMap[tool]}
            alt={tool.replace('.svg', '')}
            loading="lazy"
            className="w-6 h-6 object-contain"
          />
        </div>
      ))}
    </div>
    <h4 className="text-h3 font-semibold text-foreground leading-snug">{item.title}</h4>
    <p className="text-sm md:text-base font-light leading-relaxed text-muted-foreground">
      {item.description}
    </p>
  </div>
);

export const About = () => {
  const { t } = useTranslation();
  const showInspirations = false;
  const showHobbies = false;

  const meSplitRef = useInView('reveal-split--init');
  const infoSplitRef = useInView('reveal-split--init');
  const eduSplitRef = useInView('reveal-split--init');
  const capabilitiesRef = useInView('reveal--init');
  const capabilitiesGridRef = useInView();
  const focusSplitRef = useInView('reveal-split--init');

  const sections = useMemo(() => {
    const base = [
      { id: 'me', label: t('aboutPage.sections.me') },
      { id: 'information', label: t('aboutPage.sections.information') },
      { id: 'education', label: t('aboutPage.sections.education') },
      { id: 'capabilities', label: t('aboutPage.sections.capabilities') },
      { id: 'foccus', label: t('aboutPage.sections.foccus') },
      { id: 'tech-stack', label: t('aboutPage.sections.techStack') },
      { id: 'certifications', label: t('aboutPage.sections.certifications') },
    ];
    if (showInspirations)
      base.splice(3, 0, { id: 'inspirations', label: t('aboutPage.sections.inspirations') });
    if (showHobbies)
      base.splice(showInspirations ? 4 : 3, 0, {
        id: 'hobbies',
        label: t('aboutPage.sections.hobbies'),
      });
    return base;
  }, [t, showInspirations, showHobbies]);

  const capabilities = t('aboutPage.capabilities.items', { returnObjects: true });

  return (
    <ProjectPageLayout sections={sections}>
      {/* ME Section */}
      <section id="me" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div
            ref={meSplitRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 items-center"
          >
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg">
              <img
                src="/photos/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left space-y-4 md:space-y-6">
              <p className="text-[2rem] sm:text-[3rem] md:text-[4.5rem] xl:text-[5.5rem] font-bold text-primary leading-none">
                juligm4
              </p>
              <h1 className="text-[1.25rem] sm:text-[1.75rem] md:text-[2.5rem] xl:text-[3rem] font-bold text-foreground leading-tight">
                Julián Galindo
              </h1>
              <p className="text-[0.75rem] sm:text-[0.9rem] md:text-[1.1rem] xl:text-[1.3rem] font-semibold text-foreground leading-snug">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATION Section */}
      <section id="information" className="pt-0 pb-0 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="about-divider border-t border-border my-0 mb-10 md:mb-16" />
          <div
            ref={infoSplitRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-center"
          >
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-left">
              <h3 className="text-h2 font-semibold text-primary mb-2 text-center md:text-left">
                {t('aboutPage.sections.information')}
              </h3>
              {t('aboutPage.information.paragraphs', { returnObjects: true }).map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base md:text-body font-light leading-relaxed text-foreground"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg">
              <img
                src="/photos/info.jpeg"
                alt="Informative portrait"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="about-divider border-t border-border mt-10 md:hidden" />
        </div>
      </section>

      {/* EDUCATION Section */}
      <section id="education" className="pt-10 md:pt-0 pb-0 md:pb-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="about-divider border-t border-border my-16 hidden md:block" />
          <div
            ref={eduSplitRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 items-center"
          >
            <div className="order-2 md:order-1 rounded-lg overflow-hidden border-2 border-border shadow-lg">
              <img
                src="/photos/uni.jpg"
                alt="Universidad de los Andes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center space-y-4 md:space-y-4 text-left md:text-right">
              <h3 className="text-h2 font-semibold text-primary mb-2 text-center md:text-right">
                {t('aboutPage.sections.education')}
              </h3>
              <p className="text-sm sm:text-base md:text-body font-light text-foreground">
                {'Universidad de los Andes, Bogotá'}
              </p>
              <p className="text-sm sm:text-base md:text-body font-light text-foreground">
                {t('aboutPage.education.degree1')}
              </p>
              <p className="text-sm sm:text-base md:text-body font-light text-foreground">
                {t('aboutPage.education.degree2')}
              </p>
              <p className="text-sm sm:text-base md:text-body font-light text-muted-foreground">
                {`(${t('aboutPage.education.years')})`}
              </p>
            </div>
          </div>
          <div className="about-divider border-t border-border mt-10 md:hidden" />
        </div>
      </section>

      {/* CAPABILITIES Section — 3 cards */}
      <section id="capabilities" className="pt-10 pb-0 md:py-16 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="about-divider border-t border-border mb-10 md:mb-16" />
          <h3
            ref={capabilitiesRef}
            className="text-h2 font-semibold text-primary mb-8 text-center md:text-left"
          >
            {t('aboutPage.sections.capabilities')}
          </h3>
          <div
            ref={capabilitiesGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {capabilities.map((item, idx) => (
              <CapabilityCard key={idx} item={item} />
            ))}
          </div>
          <div className="about-divider border-t border-border mt-10 md:hidden" />
        </div>
      </section>

      {/* INSPIRATIONS Section (temporarily hidden) */}
      {showInspirations && (
        <section id="inspirations" className="py-16 md:py-24 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="about-divider border-t border-border mb-8" />
            <h3 className="text-h2 font-semibold text-primary mb-6 text-left">
              {t('aboutPage.sections.inspirations')}
            </h3>
            <p className="text-body font-light leading-relaxed text-left max-w-4xl">
              {t('aboutPage.inspirations.text')}
            </p>
          </div>
        </section>
      )}

      {/* HOBBIES Section (temporarily hidden) */}
      {showHobbies && (
        <section id="hobbies" className="py-16 md:py-24 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="about-divider border-t border-border mb-8" />
            <h3 className="text-h2 font-semibold text-primary mb-6 text-left">
              {t('aboutPage.sections.hobbies')}
            </h3>
            <p className="text-body font-light leading-relaxed text-left max-w-4xl">
              {t('aboutPage.hobbies.text')}
            </p>
          </div>
        </section>
      )}

      {/* FOCUS Section */}
      <section id="foccus" className="pt-10 pb-16 md:py-24 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="about-divider border-t border-border my-16 hidden md:block" />
          <div
            ref={focusSplitRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-center"
          >
            <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-left">
              <h3 className="text-h2 font-semibold text-primary mb-2 text-center md:text-left">
                {t('aboutPage.sections.foccus')}
              </h3>
              <p className="text-sm sm:text-base md:text-body font-light leading-relaxed text-left text-foreground">
                {t('about.parragraph1')}
              </p>
              <p className="text-sm sm:text-base md:text-body font-light leading-relaxed text-left text-foreground">
                {t('about.parragraph2')}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg bg-muted/30 aspect-[4/3]" />
          </div>
          <div className="about-divider border-t border-border mt-10 md:hidden" />
        </div>
      </section>

      {/* TECH STACK — collapsible */}
      <CollapsibleSection
        id="tech-stack"
        title={t('aboutPage.sections.techStack')}
      >
        <p className="text-sm text-muted-foreground mb-6">
          {t('aboutPage.techStack.description')}
        </p>
        <SkillsSection embedded />
      </CollapsibleSection>

      {/* CERTIFICATIONS — collapsible */}
      <CollapsibleSection
        id="certifications"
        title={t('aboutPage.sections.certifications')}
      >
        <CertificationsSection embedded />
      </CollapsibleSection>
    </ProjectPageLayout>
  );
};
```

- [ ] **Step 2: Update SkillsSection.jsx to support `embedded` prop**

The existing `SkillsSection` has its own `<section>` wrapper with padding. When rendered inside `CollapsibleSection`, we don't need that outer wrapper. Add an `embedded` prop that strips the outer `<section>`.

Open `src/components/SkillsSection.jsx` and change:

```jsx
export const SkillsSection = () => {
```
to:
```jsx
export const SkillsSection = ({ embedded = false }) => {
```

And wrap the return in a conditional. Change:

```jsx
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 ref={titleRef} className="text-h1 font-bold mb-12 text-center text-primary">
          {t('skills.title1')} {t('skills.title2')}
        </h2>
```
to:
```jsx
  const inner = (
    <div className={embedded ? '' : 'container mx-auto max-w-5xl'}>
      {!embedded && (
        <h2 ref={titleRef} className="text-h1 font-bold mb-12 text-center text-primary">
          {t('skills.title1')} {t('skills.title2')}
        </h2>
      )}
```

And change the closing tags. Replace the existing closing structure:

```jsx
      </div>
    </section>
  );
};
```
with:
```jsx
      </div>
  );

  return embedded ? inner : (
    <section id="skills" className="py-12 sm:py-16 md:py-24 px-4 relative bg-secondary/30">
      {inner}
    </section>
  );
};
```

- [ ] **Step 3: Update CertificationsSection.jsx to support `embedded` prop**

Open `src/components/CertificationsSection.jsx`.

Change:
```jsx
export const CertificationsSection = () => {
```
to:
```jsx
export const CertificationsSection = ({ embedded = false }) => {
```

Change:
```jsx
  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-24 px-4 bg-secondary/30 mb-8">
      <div className="container mx-auto max-w-6xl">
        <h2 ref={titleRef} className="text-h1 font-bold mb-12 text-center text-primary">
          {t('certifications.title1')} {t('certifications.title2')}
        </h2>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 mb-8">
          {certifications
            .filter((cert) => cert.pdf)
            .map((cert, idx) => (
              <CertificationCard key={cert.id || idx} cert={cert} />
            ))}
        </div>
      </div>
    </section>
  );
```
to:
```jsx
  const grid = (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 mb-8">
      {certifications
        .filter((cert) => cert.pdf)
        .map((cert, idx) => (
          <CertificationCard key={cert.id || idx} cert={cert} />
        ))}
    </div>
  );

  if (embedded) return grid;

  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-24 px-4 bg-secondary/30 mb-8">
      <div className="container mx-auto max-w-6xl">
        <h2 ref={titleRef} className="text-h1 font-bold mb-12 text-center text-primary">
          {t('certifications.title1')} {t('certifications.title2')}
        </h2>
        {grid}
      </div>
    </section>
  );
```

- [ ] **Step 4: Run dev server and verify About page**

```bash
npm run dev
```

Navigate to `http://localhost:5173/about`. Verify:
- Me, Information, Education sections render exactly as before
- New "Capabilities" section shows 3 cards (Frontend & UI, Full-Stack Engineering, Mobile & Creative) with tool icons
- Focus section renders as before
- "Tech Stack" collapsible section appears, collapsed by default — click to expand and see the full skills grid
- "Certifications" collapsible section appears, collapsed by default — click to expand and see the cert cards
- Sidebar scroll-spy includes all 7 sections and highlights the active one
- No console errors

- [ ] **Step 5: Commit**
```bash
git add src/pages/AboutPage.jsx src/components/SkillsSection.jsx src/components/CertificationsSection.jsx
git commit -m "feat: restructure About page — add capabilities section, collapsible tech stack + certs"
```

---

## Self-Review

**Spec coverage:**
- ✅ Problem 1 (projects buried): FeaturedWorkSection on home page, visible immediately after hero
- ✅ Problem 2 (skills overwhelming): Replaced with 3-card CoreCapabilities; full grid demoted to collapsible
- ✅ Problem 3 (certs equal weight to projects): Moved to collapsed section at bottom of About
- ✅ Problem 4 (weak home value prop): Home now shows actual project work with descriptions + tech tags

**Placeholder scan:** No TBDs, no "implement later" — all code blocks are complete.

**Type consistency:**
- `FeaturedCard` receives `project` with `{ id, category, title, description, link, image, tech }` — matches the shape defined in `en.json`
- `CapabilityCard` receives `item` with `{ title, description, tools }` — matches `aboutPage.capabilities.items` in `en.json`
- `CollapsibleSection` receives `{ id, title, children, defaultOpen }` — consistently used in `AboutPage.jsx`
- `SkillsSection` and `CertificationsSection` both receive optional `embedded` boolean — default `false` preserves existing standalone behavior
