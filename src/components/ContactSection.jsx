import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

// Social links — lucide-compatible icons except X, GitHub, Behance which use custom SVGs
const socialLinks = [
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/juligm4/',
    svgSrc: '/assets/icons/linkedin.svg',
    label: 'LinkedIn',
  },
  {
    key: 'instagram',
    href: 'https://www.instagram.com/juligm4/',
    svgSrc: '/assets/icons/instagram.svg',
    label: 'Instagram',
  },
  {
    key: 'github',
    href: 'https://github.com/juligm4444',
    svgSrc: '/assets/icons/github.svg',
    label: 'GitHub',
  },
  {
    key: 'behance',
    href: 'https://www.behance.net/juligm4',
    svgSrc: '/assets/icons/behance.svg',
    label: 'Behance',
  },
];

export const ContactSection = () => {
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

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-h1 font-bold text-primary mb-4">
          <span className="!text-[var(--color4)]">{'<'}</span>
          {t('contact.title1')} {t('contact.title2')}
          <span className="!text-[var(--color4)]">{'>'}</span>
        </h2>
        <p className="text-sm sm:text-base md:text-body font-light text-muted-foreground max-w-3xl mx-auto mb-10 sm:mb-12">
          {t('contact.description')}
        </p>

        <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={cn('group social-button w-12 h-12 rounded-md hover:scale-110')}
            >
              {social.svgSrc ? (
                <img
                  src={social.svgSrc}
                  alt={social.label}
                  className={cn(
                    'social-icon-image w-6 h-6 object-contain',
                    isLight ? 'brightness-0 invert group-hover:invert-0' : ''
                  )}
                />
              ) : (
                <social.icon size={22} />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
