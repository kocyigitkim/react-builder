import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, PrimaryButton } from '@fluentui/react';
import { ThemeProvider } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import {AppTheme} from './AppTheme';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      HELLO WORLD
    </ThemeProvider>
  );
};
