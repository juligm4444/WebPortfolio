import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const ProjectPageLayout = ({ children, sections }) => {
  const [activeSection, setActiveSection] = useState('');

  const observerRef = useRef(null);

  useEffect(() => {
    // Use IntersectionObserver for smooth, low-cost section detection
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const options = {
      root: null,
      // Root margin pushes trigger zone toward center of viewport
      rootMargin: '-35% 0px -50% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    let currentActive = activeSection;
    const rafState = { ticking: false };

    const processEntries = (entries) => {
      // Pick the entry with highest intersection ratio currently visible
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length === 0) return;
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const topEntry = visible[0];
      if (topEntry && topEntry.target.id !== currentActive) {
        currentActive = topEntry.target.id;
        setActiveSection(currentActive);
      }
    };

    const callback = (entries) => {
      if (!rafState.ticking) {
        rafState.ticking = true;
        requestAnimationFrame(() => {
          processEntries(entries);
          rafState.ticking = false;
        });
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observerRef.current = observer;

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    // Fallback initial value
    if (!currentActive && sections[0]) setActiveSection(sections[0].id);

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const OFFSET = 120; // keep consistent with scroll spy
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />

      {/* Desktop Navigation Menu - Right Side (Hidden on mobile and tablet) */}
      <aside className="hidden xl:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40 w-64">
        <div className="p-6">
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  'block w-full text-left text-[20px] py-2 transition-all duration-300',
                  activeSection === section.id
                    ? 'text-primary font-medium -translate-x-4'
                    : 'text-muted-foreground hover:text-foreground hover:font-semibold hover:scale-105'
                )}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <main
        className="lg:ml-52 xl:ml-64 xl:mr-64 flex-1 flex flex-col"
        style={{ paddingBottom: 'var(--contact-footer-min-h)' }}
      >
        <div className="flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
