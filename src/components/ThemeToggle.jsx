import { useEffect, useState } from 'react';
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
        'p-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-secondary/60 hover:shadow-sm active:scale-95',
        'focus:outline-none'
      )}
      aria-label="Toggle theme"
    >
      {isLight ? (
        <img
          src="/assets/icons/moon.svg"
          alt="Moon icon"
          className="w-6 h-6 object-contain invert opacity-85"
        />
      ) : (
        <img
          src="/assets/icons/sun.svg"
          alt="Sun icon"
          className="w-6 h-6 object-contain brightness-0 invert transition duration-300 hover:invert-0"
        />
      )}
    </button>
  );
};
