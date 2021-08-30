import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light');
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
      };

    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark')
        } else {
          setTheme('light')
        }
      };

      useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
          } else {
            setMode('light')
          }
          setComponentMounted(true);
      }, []);

     


    return [theme, toggleTheme, componentMounted]
};
