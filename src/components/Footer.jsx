import { ArrowUpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto py-12 px-4 bg-card border-t border-border">
      <div className="w-full flex items-center justify-between">
        <p className="text-sm font-light text-muted-foreground">
          &copy; {new Date().getFullYear()} juligm4.co. {t('footer.text1')}
        </p>
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUpCircle size={20} />
        </button>
      </div>
    </footer>
  );
};
