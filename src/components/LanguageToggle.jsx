import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    const stored = localStorage.getItem('lang');
    if (stored && stored !== lang) {
      i18n.changeLanguage(stored);
      setLang(stored);
    }
  }, []);

  const handleToggle = () => {
    const next = lang === 'en' ? 'es' : 'en';
    i18n.changeLanguage(next);
    setLang(next);
    localStorage.setItem('lang', next);
  };

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <button
      onClick={handleToggle}
      className={cn(
        'px-3 py-1.5 rounded-full transition-colors duration-300 focus:outline-none text-sm font-medium bg-card border border-border hover:bg-secondary/60'
      )}
      aria-label="Toggle language"
      title={current.label}
    >
      {current.label}
    </button>
  );
};
