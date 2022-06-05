import { createContext } from 'react';

import { ThemeWithAuto } from '@types';

export const ThemeContext = createContext<ThemeWithAuto>(ThemeWithAuto.Auto);
