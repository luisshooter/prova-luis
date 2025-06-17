import { createContext, useMemo, useState, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        ...(mode === 'light'
          ? {
              primary: {
                main: '#1976d2',
              },
              background: {
                default: '#e3f2fd',
              },
            }
          : {
              primary: {
                main: '#90caf9',
              },
              background: {
                default: '#121212',
                paper: '#1e1e1e',
              },
            }),
      },
    }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
