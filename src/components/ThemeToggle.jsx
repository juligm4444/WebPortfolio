import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
  const [isLight, setLight] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      setLight(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isLight ? 'dark' : 'light';
    document.documentElement.classList.toggle('light', newTheme === 'light');
    localStorage.setItem('theme', newTheme);
    setLight(newTheme === 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'theme-toggle-button group p-2 rounded-full border border-[var(--color6)] text-[var(--button-text-color)] transition-all duration-300 hover:scale-105 hover:border-transparent active:scale-95 focus:outline-none'
      )}
      aria-label="Toggle theme"
    >
      {isLight ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
    </button>
  );
};
