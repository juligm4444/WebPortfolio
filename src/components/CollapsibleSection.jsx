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
