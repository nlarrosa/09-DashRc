import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FooterLayout } from '../components/ui/FooterLayout';
import RegisterPage from '../pages/auth/RegisterPage';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AuthLayout() {
    
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          {/* <LoginPage /> */}
          <RegisterPage />
          
        </Box>
        <FooterLayout sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}