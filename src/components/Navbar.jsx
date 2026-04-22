import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Scroll progress bar
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          setScrollProgress(total > 0 ? Math.min(window.scrollY / total, 1) : 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <div className="p-4 lg:p-5 border-b border-border/20">
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
                    ? '!text-[var(--color4)] font-bold translate-x-2 selected-page-glow'
                    : 'text-[var(--body-text-color)] hover:font-bold hover:translate-x-1'
                )}
                onClick={() => setIsOpen(false)}
              >
                {t(`navbar.${group.title}`)}
              </Link>
              <div className={cn('pl-4 space-y-2 border-l', 'border-border/20')}>
                {group.items.map((item) => (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={cn(
                      'block py-2 text-sm lg:text-base xl:text-[15px] transition-all duration-300 text-left',
                      location.pathname === item.href
                        ? '!text-[var(--color4)] font-bold translate-x-2 selected-page-glow'
                        : 'text-[var(--body-text-color)] hover:font-bold hover:translate-x-1'
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
              <div className={cn('-mx-3 lg:-mx-4 border-t', 'border-border/20')} />
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Top Navbar */}
      <header
        className="hidden xl:flex fixed top-0 left-0 right-0 h-16 border-b border-border/20 z-50 backdrop-blur-xl"
        style={{ backgroundColor: 'var(--navbar-bg)' }}
      >
        {/* Scroll progress indicator */}
        <div
          className="scroll-progress-bar"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
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
                          ? '!text-[var(--color4)] font-bold selected-page-glow'
                          : 'text-[var(--color6)] hover:font-bold'
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
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 min-w-52 dropdown-enter">
                      <div
                        className="rounded-md border border-border/20 p-2 shadow-md backdrop-blur-xl"
                        style={{ backgroundColor: 'var(--navbar-bg)' }}
                      >
                        {group.items.map((item) => (
                          <Link
                            key={item.key}
                            to={item.href}
                            className={cn(
                              'block px-4 py-2 rounded-md text-sm transition-colors',
                              location.pathname === item.href
                                ? 'bg-[var(--color4)]/10 !text-[var(--color4)] font-bold selected-page-glow'
                                : 'text-[var(--color6)] hover:bg-[var(--color4)]/10 hover:font-bold'
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
        className={cn(
          'xl:hidden fixed top-4 left-4 z-50 p-2 rounded-full border border-[var(--color6)] text-[var(--button-text-color)] transition-all duration-300 hover:scale-105 hover:border-transparent active:scale-95 focus:outline-none'
        )}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile/Tablet Sidebar — always mounted, slides in/out with CSS */}
      <div
        className={cn(
          'xl:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40',
          'transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={cn(
          'xl:hidden fixed left-0 top-0 h-screen w-80 sm:w-72 border-r border-border/20 z-50',
          'backdrop-blur-xl transition-transform duration-[380ms]',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        style={{
          background: 'var(--navbar-bg)',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {sidebarContent}
      </aside>
    </>
  );
};
