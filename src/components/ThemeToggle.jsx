import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

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
      className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-transparent"
    >
      {isLight ? (
        <Moon className="w-6 h-6 text-blue-900" />
      ) : (
        <Sun className="w-6 h-6 text-yellow-400" />
      )}
    </button>
  );
};
