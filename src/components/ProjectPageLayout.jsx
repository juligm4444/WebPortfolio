import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const ProjectPageLayout = ({ children, sections }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections
        .map((section) => document.getElementById(section.id))
        .filter(Boolean);

      // Choose the last section whose top is above a small offset from the top.
      // This avoids jumping to a far section when the viewport center is lower.
      const OFFSET = 120; // matches scroll-mt-24 (~96px) + small padding
      let currentId = sections[0]?.id;

      for (const el of sectionElements) {
        const top = el.getBoundingClientRect().top;
        if (top - OFFSET <= 0) {
          currentId = el.id;
        } else {
          break;
        }
      }

      if (currentId) {
        setActiveSection(currentId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
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
          <h3 className="text-[20px] font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            Contents
          </h3>
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
