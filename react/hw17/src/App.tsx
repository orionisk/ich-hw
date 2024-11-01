import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { lightTheme, darkTheme } from './theme';
import { StyledButton } from './components/StyledButton';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3
        }}
      >
        <Typography variant='h2'>
          {isDarkMode ? 'Dark Theme' : 'Light Theme'}
        </Typography>
        <StyledButton onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Theme
        </StyledButton>
      </Box>
    </ThemeProvider>
  );
}

export default App;
