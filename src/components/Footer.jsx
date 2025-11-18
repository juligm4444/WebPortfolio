import { ArrowUpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 px-4 bg-card border-t border-border flex items-center lg:ml-52 xl:ml-64"
      style={{ height: 'var(--contact-footer-min-h)', zIndex: 30 }}
    >
      <div className="w-full flex items-center justify-between">
        <p className="text-sm font-light text-muted-foreground">
          &copy; {new Date().getFullYear()} juligm4.co. {t('footer.text1')}
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUpCircle size={20} />
        </a>
      </div>
    </footer>
  );
};
