import { Sun, Moon } from 'lucide-react';
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
      className={cn('p-2 rounded-full transition-colors duration-300', 'focus:outline-none')}
      aria-label="Toggle theme"
    >
      {isLight ? (
        <Moon className="w-6 h-6" style={{ color: '#93a4ab' }} />
      ) : (
        <Sun
          className="w-6 h-6 text-white"
          style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.9))' }}
        />
      )}
    </button>
  );
};
