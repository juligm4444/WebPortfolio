import { ArrowUpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const Footer = () => {
  const { t } = useTranslation();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="mt-auto py-6 px-8 border-t border-border/20 flex items-center backdrop-blur-xl"
      style={{ backgroundColor: 'var(--navbar-bg)' }}
    >
      <div className="w-full flex items-center justify-between">
        <p className="text-base lg:text-lg font-light text-muted-foreground">
          &copy; {new Date().getFullYear()} juligm4.co. {t('footer.text1')}
        </p>
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full surface-fill text-[var(--color3)] transition-all duration-300 hover:text-glow"
        >
          <ArrowUpCircle size={20} />
        </button>
      </div>
    </footer>
  );
};
