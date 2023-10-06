import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { FooterLayout, SideBar } from '../components/ui';
import { NavBar } from '../components/ui';
import { Route, Routes } from 'react-router-dom';
import { DashPage } from '../pages/dashboard/DashPage';
import { Error404Page } from '../pages/error/Error404Page';
import { UserPage } from '../pages/user/UserPage';
import { ProductsPage } from '../pages/products/ProductsPage';
import { EditUserPage } from '../pages/user/EditUserPage';


const defaultTheme = createTheme();

export function GeneralLayout() {
    
       
    const [open, setOpen] = React.useState(true);


    const toggleDrawer = () => {
        setOpen(!open);
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <NavBar 
            toggleDrawer={toggleDrawer}
            open={open}
        />
        <SideBar 
            toggleDrawer={toggleDrawer}
            open={open}
        />
        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            
            <Routes>
              <Route  path='/dashboard' element={<DashPage />} />
              <Route  path='/usuarios' element={<UserPage />} />
              <Route  path='/usuarios/editar/:id' element={<EditUserPage />} />
              <Route  path='/productos' element={<ProductsPage />} />
              <Route  path='/' element={<DashPage />} />
              <Route  path='/*' element={<Error404Page />} />
            </Routes>

            <FooterLayout sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}