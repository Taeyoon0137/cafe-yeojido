import { useContext } from 'react';
import { useColorScheme } from 'react-native';

import { ThemeContext } from '@contexts';
import { ThemeWithAuto } from '@types';

import type { Theme } from '@types';

export function useTheme(mode?: Theme): Theme {
  const theme = useContext(ThemeContext);
  const setting = useColorScheme();
  return mode ?? theme === ThemeWithAuto.Auto ? setting ?? ThemeWithAuto.Light : theme;
}
