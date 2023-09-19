
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { FormHelperText } from '@mui/material';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';




export const LoginPage = () => {

    const { login, state } = useContext(AuthContext);
    const { formState, onInputChange } = useForm();

    const handleSubmit = (event) => {
        event.preventDefault();
        login(formState.email, formState.password);
    };


  return (
    
    <>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            DashRc
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              error={state.errorMessage.length > 0 ?  true : false}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Usuario / correo"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={ (event ) => onInputChange(event) }
            />
            <TextField
              error={state.errorMessage.length > 0 ?  true : false}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={ (event ) => onInputChange(event) }
            />
            <FormHelperText 
              id="component-helper-text"
              sx={{ color:'red' }}
            >
              { state.errorMessage }
            </FormHelperText>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size='large'
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={'/auth/forgot'} >
                  <Button variant='text'>
                    Olvide la contraseña
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to={'/auth/register'}>
                  <Button variant='text'>
                    Registrarse
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
    </>
  )
}
