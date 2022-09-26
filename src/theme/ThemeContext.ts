import { createContext } from 'react';

export const enum Theme {
  PRIMARY = 'primary',
  DARK = 'dark',
}

export type ThemeContext = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
