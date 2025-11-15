import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const ProjectPageLayout = ({ children, sections }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => document.getElementById(section.id));
      const viewportCenter = window.innerHeight / 2;

      const current = sectionElements.find((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= viewportCenter && rect.bottom >= viewportCenter;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

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

      <main className="lg:ml-52 xl:mr-64 flex-1 flex flex-col">
        <div className="pt-20 flex-1">{children}</div>
        <Footer />
      </main>
    </div>
  );
};
