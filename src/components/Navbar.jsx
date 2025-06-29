import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from 'react-i18next';

const navKeys = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'certifications', href: '#certifications' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        scrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow">{t('navbar.name')}</span>
          </span>
        </a>
        <div className="hidden md:flex space-x-4 items-center">
          {navKeys.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {t(`navbar.${item.key}`)}
            </a>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <div className="flex items-center md:hidden gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* ...rest of your code... */}
    </nav>
  );
};
