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
      className={cn(
        'fixed mas-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
        'focus:outlin-hidden'
      )}
    >
      {isLight ? (
        <Moon className="w-6 h-6 text-blue-900" />
      ) : (
        <Sun className="w-6 h-6 text-yellow-400" />
      )}
    </button>
  );
};
