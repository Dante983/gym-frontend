import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = (newTheme) => {
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Dropdown className="position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <Dropdown.Toggle variant="bd-primary" id="bd-theme" className="btn py-2 d-flex align-items-center">
        <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
          <use href="#moon-stars-fill"></use>
        </svg>
        <span className="visually-hidden" id="bd-theme-text">
          Toggle theme
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Item
          onClick={() => toggleTheme('light')}
          active={theme === 'light'}
          className="d-flex align-items-center"
        >
          <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
            <use href="#sun-fill"></use>
          </svg>
          Light
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => toggleTheme('dark')}
          active={theme === 'dark'}
          className="d-flex align-items-center"
        >
          <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
            <use href="#moon-stars-fill"></use>
          </svg>
          Dark
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => toggleTheme('auto')}
          active={theme === 'auto'}
          className="d-flex align-items-center"
        >
          <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
            <use href="#circle-half"></use>
          </svg>
          Auto
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ThemeToggle;
