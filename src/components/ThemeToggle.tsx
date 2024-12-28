import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md ${
          theme === 'light' ? 'bg-white shadow-sm dark:bg-gray-700' : ''
        }`}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md ${
          theme === 'dark' ? 'bg-white shadow-sm dark:bg-gray-700' : ''
        }`}
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md ${
          theme === 'system' ? 'bg-white shadow-sm dark:bg-gray-700' : ''
        }`}
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  );
}