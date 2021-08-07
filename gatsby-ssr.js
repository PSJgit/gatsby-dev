import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './src/theme/theme';
import GlobalReset from './src/theme/GlobalReset';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalReset/>
    {element}
  </ThemeProvider>
)