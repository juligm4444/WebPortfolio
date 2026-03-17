import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
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
  const [openDesktopGroup, setOpenDesktopGroup] = useState(null);
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
      <div className="p-4 lg:p-5 border-b border-white/70">
        <Link to="/" className="flex flex-col items-center space-y-2 group">
          <img
            src="/assets/icons/LOGO.svg"
            alt="Home"
            loading="lazy"
            className="h-24 w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 lg:overflow-y-auto p-4 space-y-4">
        {navGroups.map((group, idx) => (
          <React.Fragment key={group.key}>
            <div className="space-y-2 lg:space-y-4">
              <Link
                to={group.categoryHref}
                className={cn(
                  'text-sm lg:text-base xl:text-[15px] font-medium uppercase tracking-wider text-left transition-all duration-300 cursor-pointer block',
                  location.pathname === group.categoryHref
                    ? isLight
                      ? 'text-[#df0139] font-bold translate-x-2 drop-shadow-[0_0_8px_rgba(223,1,57,0.45)]'
                      : 'text-[#d0ff00] font-bold translate-x-2 underline underline-offset-4 decoration-2'
                    : isLight
                      ? 'text-[#e2e2e2] hover:text-[#df0139] hover:translate-x-1'
                      : 'text-gray-300 hover:text-white hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                )}
                onClick={() => setIsOpen(false)}
              >
                {t(`navbar.${group.title}`)}
              </Link>
              <div className="pl-4 space-y-2 border-l border-white/70">
                {group.items.map((item) => (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={cn(
                      'block py-2 text-sm lg:text-base xl:text-[15px] transition-all duration-300 text-left',
                      location.pathname === item.href
                        ? isLight
                          ? 'text-[#df0139] font-semibold translate-x-2 drop-shadow-[0_0_8px_rgba(223,1,57,0.45)]'
                          : 'text-[#d0ff00] font-semibold translate-x-2 underline underline-offset-4 decoration-2'
                        : isLight
                          ? 'text-[#e2e2e2] hover:text-[#df0139] hover:translate-x-1'
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
              <div className="-mx-3 lg:-mx-4 border-t border-white/70" />
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Social Media - Follow me */}
      <div
        className="p-4 border-t border-white/70 space-y-2 lg:space-y-4"
        style={{ minHeight: 'var(--contact-footer-min-h)' }}
      >
        <h4
          className={cn(
            'text-sm lg:text-base xl:text-[15px] font-medium uppercase tracking-wider text-center transition-colors',
            isLight
              ? 'text-[#e2e2e2] hover:text-[#df0139]'
              : 'text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
          )}
        >
          {t('navbar.follow-me')}
        </h4>
        <div className="flex space-x-4 justify-center">
          <a
            href="https://www.linkedin.com/in/juligm4/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'p-2 transition-colors',
              isLight
                ? 'text-[#e2e2e2] hover:text-[#df0139]'
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
                ? 'text-[#e2e2e2] hover:text-[#df0139]'
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
                ? 'text-[#e2e2e2] hover:text-[#df0139]'
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
                ? 'text-[#e2e2e2] hover:text-[#df0139]'
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
      {/* Desktop Top Navbar */}
      <header
        className="hidden xl:flex fixed top-0 left-0 right-0 h-16 border-b border-white/70 z-50 backdrop-blur-xl"
        style={{
          backgroundColor: 'var(--navbar-bg)',
        }}
      >
        <div className="w-full px-6 2xl:px-8 flex items-center justify-between gap-8">
          <Link to="/" className="shrink-0">
            <img
              src="/assets/icons/LOGO.svg"
              alt="Home"
              loading="lazy"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <nav className="flex items-center gap-8">
            {navGroups.map((group) => {
              const hasChildren = group.items.length > 0;
              const isGroupActive =
                location.pathname === group.categoryHref ||
                group.items.some((item) => location.pathname === item.href);
              const isOpenDesktop = openDesktopGroup === group.key;

              return (
                <div
                  key={group.key}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenDesktopGroup(group.key)}
                  onMouseLeave={() => hasChildren && setOpenDesktopGroup(null)}
                >
                  <div className="flex items-center gap-2">
                    <Link
                      to={group.categoryHref}
                      className={cn(
                        'text-sm font-medium transition-colors duration-300',
                        isGroupActive
                          ? isLight
                            ? 'text-primary'
                            : 'text-[#d0ff00] underline underline-offset-4 decoration-2'
                          : isLight
                            ? 'text-[#e2e2e2] hover:text-[#df0139]'
                            : 'text-gray-300 hover:text-white'
                      )}
                    >
                      {t(`navbar.${group.title}`)}
                    </Link>
                    {hasChildren && (
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          isOpenDesktop ? 'rotate-180' : 'rotate-0'
                        )}
                      />
                    )}
                  </div>

                  {hasChildren && isOpenDesktop && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 min-w-52">
                      <div
                        className="rounded-md border border-white/70 p-2 shadow-md backdrop-blur-xl"
                        style={{
                          backgroundColor: 'var(--navbar-bg)',
                        }}
                      >
                        {group.items.map((item) => (
                          <Link
                            key={item.key}
                            to={item.href}
                            className={cn(
                              'block px-4 py-2 rounded-md text-sm transition-colors',
                              location.pathname === item.href
                                ? isLight
                                  ? 'bg-primary/10 text-primary'
                                  : 'bg-[#d0ff00]/10 text-[#d0ff00] underline underline-offset-4 decoration-2'
                                : isLight
                                  ? 'text-[#e2e2e2] hover:bg-[#df0139]/15 hover:text-[#df0139]'
                                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            )}
                          >
                            {t(`navbar.${item.key}`)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="hidden xl:block h-16" />

      {/* Theme and Language Toggles - Mobile/Tablet */}
      <div className="xl:hidden fixed top-2 right-2 sm:top-4 sm:right-4 z-50 flex items-center space-x-2 sm:space-x-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* Mobile/Tablet Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-white/70 rounded-md shadow-md"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile/Tablet Sidebar */}
      {isOpen && (
        <>
          <div
            className="xl:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />

          <aside
            className="xl:hidden fixed left-0 top-0 h-screen w-80 sm:w-72 border-r border-white/70 z-50 transform transition-transform duration-300"
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
