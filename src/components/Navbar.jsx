import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Linkedin, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from 'react-i18next';

const navGroups = [
  {
    title: 'about',
    key: 'about',
    categoryHref: '/about',
    items: [],
  },
  {
    title: 'cv',
    key: 'cv',
    categoryHref: '/cv',
    items: [],
  },
  {
    title: 'technology',
    key: 'tech',
    categoryHref: '/projects',
    items: [
      { key: 'portfolio', href: '/projects/portfolio' },
      { key: 'candelaria', href: '/projects/candelaria' },
      { key: 'licorimetro', href: '/projects/licorimetro' },
    ],
  },
  {
    title: 'arts-design',
    key: 'arts',
    categoryHref: '/arts-design',
    items: [
      { key: 'sketches', href: '/arts-design/sketches' },
      { key: 'drawings', href: '/arts-design/drawings' },
      { key: 'creative-work', href: '/arts-design/creative' },
    ],
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [isLight, setIsLight] = useState(false);
  const location = useLocation();

  // Check theme on mount and when it changes
  React.useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 lg:p-5 border-b border-border">
        <Link to="/" className="flex flex-col items-center space-y-2 group">
          <img
            src="/assets/icons/LOGO.svg"
            alt="Home"
            loading="lazy"
            className="h-16 w-16 lg:h-18 lg:w-18 xl:h-20 xl:w-20 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 lg:overflow-y-auto p-3 lg:p-4 space-y-3 lg:space-y-5">
        {navGroups.map((group, idx) => (
          <React.Fragment key={group.key}>
            <div className="space-y-2 lg:space-y-3">
              <Link
                to={group.categoryHref}
                className={cn(
                  'text-sm lg:text-base xl:text-[15px] font-medium uppercase tracking-wider text-left transition-all duration-300 cursor-pointer block',
                  location.pathname === group.categoryHref
                    ? isLight
                      ? 'text-black font-bold translate-x-2 drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]'
                      : 'text-white font-bold translate-x-2 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]'
                    : isLight
                    ? 'text-gray-700 hover:text-black hover:translate-x-1'
                    : 'text-gray-300 hover:text-white hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                )}
                onClick={() => setIsOpen(false)}
              >
                {t(`navbar.${group.title}`)}
              </Link>
              <div className="pl-4 space-y-2 border-l border-border">
                {group.items.map((item) => (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={cn(
                      'block py-1 lg:py-2 text-sm lg:text-base xl:text-[15px] transition-all duration-300 text-left',
                      location.pathname === item.href
                        ? isLight
                          ? 'text-black font-semibold translate-x-2 drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]'
                          : 'text-white font-semibold translate-x-2 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]'
                        : isLight
                        ? 'text-gray-600 hover:text-black hover:translate-x-1'
                        : 'text-gray-400 hover:text-white hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`navbar.${item.key}`)}
                  </Link>
                ))}
              </div>
            </div>
            {/* Additional separators after specific groups - positioned outside nav padding */}
            {(group.key === 'cv' || group.key === 'tech') && (
              <div className="-mx-3 lg:-mx-4 border-t border-border" />
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Social Media - Follow me */}
      <div
        className="p-3 lg:p-4 border-t border-border space-y-2 lg:space-y-3"
        style={{ minHeight: 'var(--contact-footer-min-h)' }}
      >
        <h4
          className={cn(
            'text-sm lg:text-base xl:text-[15px] font-medium uppercase tracking-wider text-center transition-colors',
            isLight
              ? 'text-gray-700 hover:text-black'
              : 'text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
          )}
        >
          {t('navbar.follow-me')}
        </h4>
        <div className="flex space-x-3 lg:space-x-4 justify-center">
          <a
            href="https://www.linkedin.com/in/juligm4/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'p-2 transition-colors',
              isLight
                ? 'text-gray-600 hover:text-black'
                : 'text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
            )}
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/juligm4/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'p-2 transition-colors',
              isLight
                ? 'text-gray-600 hover:text-black'
                : 'text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
            )}
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://x.com/Xx_juligm4_xX"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'p-2 transition-colors',
              isLight
                ? 'text-gray-600 hover:text-black'
                : 'text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
            )}
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://www.youtube.com/@juligm4"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'p-2 transition-colors',
              isLight
                ? 'text-gray-600 hover:text-black'
                : 'text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
            )}
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden xl:block fixed left-0 top-0 h-screen w-64 border-r border-border z-40"
        style={{
          background: 'var(--navbar-bg)',
        }}
      >
        {sidebarContent}
      </aside>

      {/* Tablet Sidebar - Smaller */}
      <aside
        className="hidden lg:block xl:hidden fixed left-0 top-0 h-screen w-52 border-r border-border z-40"
        style={{
          background: 'var(--navbar-bg)',
        }}
      >
        {sidebarContent}
      </aside>

      {/* Theme and Language Toggles - Top Right */}
      <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 flex items-center space-x-2 sm:space-x-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-md shadow-md"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Sidebar */}
          <aside
            className="lg:hidden fixed left-0 top-0 h-screen w-80 sm:w-72 border-r border-border z-50 transform transition-transform duration-300"
            style={{
              background: 'var(--navbar-bg)',
            }}
          >
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
};
