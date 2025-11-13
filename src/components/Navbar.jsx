import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Linkedin, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from 'react-i18next';

const navGroups = [
  {
    title: 'about',
    key: 'about',
    items: [
      { key: 'profile', href: '#about' },
      { key: 'skills', href: '#skills' },
      { key: 'certifications', href: '#certifications' },
    ]
  },
  {
    title: 'tech-interface',
    key: 'tech',
    items: [
      { key: 'websites', href: '#projects' },
      { key: 'mobile-apps', href: '#mobile-apps' }
    ]
  },
  {
    title: 'design-projects',
    key: 'design',
    items: [
      { key: 'ui-designs', href: '#ui-designs' },
      { key: 'prototypes', href: '#prototypes' },
      { key: 'class-projects', href: '#class-projects' },
    ]
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [isLight, setIsLight] = useState(false);

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
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={cn(
        "p-6 border-b",
        isLight ? "border-white/20" : "border-gray-400/50"
      )}>
        <a href="#hero" className="flex flex-col items-center space-y-2">
          <img src="/assets/icons/LOGO.svg" alt="Logo" className="h-12 w-12" />
          <span className={cn(
            "text-sm font-medium transition-colors",
            isLight 
              ? "text-white hover:text-gray-100" 
              : "text-gray-800 hover:text-black"
          )}>{t('navbar.name')}</span>
        </a>
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {navGroups.map((group) => (
          <div key={group.key} className="space-y-3">
            <h4 className={cn(
              "text-sm font-medium uppercase tracking-wider text-left transition-colors",
              isLight 
                ? "text-white hover:text-gray-100" 
                : "text-gray-800 hover:text-black"
            )}>
              {t(`navbar.${group.title}`)}
            </h4>
            <div className={cn(
              "pl-4 space-y-2 border-l",
              isLight ? "border-white/20" : "border-gray-400/50"
            )}>
              {group.items.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "block py-2 text-sm transition-colors text-left",
                    isLight 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-600 hover:text-black"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {t(`navbar.${item.key}`)}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Social Media - Follow me */}
      <div className={cn(
        "p-4 border-t space-y-3",
        isLight ? "border-white/20" : "border-gray-400/50"
      )}>
        <h4 className={cn(
          "text-sm font-medium uppercase tracking-wider text-left transition-colors",
          isLight 
            ? "text-white hover:text-gray-100" 
            : "text-gray-800 hover:text-black"
        )}>
          {t('navbar.follow-me')}
        </h4>
        <div className={cn(
          "pl-4 border-l",
          isLight ? "border-white/20" : "border-gray-400/50"
        )}>
          <div className="flex space-x-3 justify-start">
            <a
              href="https://www.linkedin.com/in/juligm4/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 transition-colors",
                isLight 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-black"
              )}
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/juligm4/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 transition-colors",
                isLight 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-black"
              )}
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://x.com/Xx_juligm4_xX"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 transition-colors",
                isLight 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-black"
              )}
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://www.youtube.com/@juligm4"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 transition-colors",
                isLight 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-black"
              )}
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside 
        className="hidden lg:block fixed left-0 top-0 h-screen w-52 border-r border-white/20 z-40"
        style={{
          background: `linear-gradient(to bottom, var(--sidebar-inverted-from), var(--sidebar-inverted-to))`
        }}
      >
        {sidebarContent}
      </aside>

      {/* Theme and Language Toggles - Top Right */}
      <div className="fixed top-4 right-4 z-50 flex items-center space-x-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-md shadow-md"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden fixed left-0 top-0 h-screen w-72 border-r border-white/20 z-50 transform transition-transform duration-300"
            style={{
              background: `linear-gradient(to bottom, var(--sidebar-inverted-from), var(--sidebar-inverted-to))`
            }}
          >
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
};
