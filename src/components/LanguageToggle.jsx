import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const LANGUAGES = [
  { code: 'en', icon: '/assets/icons/spanish.svg', label: 'Spanish' },
  { code: 'es', icon: '/assets/icons/english.svg', label: 'English' },
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
        'p-2 rounded-full transition-colors duration-300 focus:outline-none flex items-center justify-center'
      )}
      aria-label="Toggle language"
      title={current.label}
    >
      <img src={current.icon} alt={current.label} className="w-6 h-6" />
    </button>
  );
};
