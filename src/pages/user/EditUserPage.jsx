import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, InputAdornment, MenuItem, Paper, TextField, Typography } from '@mui/material'
import moment from 'moment';
import { UserContext } from '../../contexts/UserContext';
import { Loading } from '../../components/ui/Loading';
import { useForm } from '../../hooks/useForm';

export const EditUserPage = () => {

    const { id } = useParams();
    const { getUser, state } = useContext(UserContext);

    const { formState, onInputChange} = useForm({
        name: state?.user.name,
        lastname: state.user.lastname,
        email: state.user.email,
        is_active: state.user.is_active
    });
    
    useEffect( () => {
        if(id){
            getUser(id);
        }
    }, [])


  return (
    <Paper>
        <Box padding={3}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ 
                        borderBottom: 2, 
                        marginLeft: 3, 
                        paddingBottom: 2,  
                        borderColor: '#ebe3e3',
                        marginBottom:  5
                    }}
                >
                    <Typography variant='h6' fontFamily={'fantasy'}>Modificar Usuario</Typography>
                    <Typography variant='caption'>Creado: {moment(state.user.created_at).format("DD/MM/YYYY hh:mm:ss") }</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        // error={state.errorMessage.length > 0 ?  true : false}
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Nombre"
                        name="name"
                        autoComplete="Nombre"
                        value={formState.name}
                        // onChange={ (event ) => onInputChange(event) }
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        // error={state.errorMessage.length > 0 ?  true : false}
                        margin="normal"
                        required
                        fullWidth
                        id="lastname"
                        label="Apellido"
                        name="lastname"
                        autoComplete="Apellido"
                        value={formState.lastname}
                        // onChange={ (event ) => onInputChange(event) }
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        // error={state.errorMessage.length > 0 ?  true : false}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="Email"
                        value={formState.email}
                        // onChange={ (event ) => onInputChange(event) }
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="provincia"
                        select
                        label="Provincia"
                    >
                        <MenuItem key={1} value={'Buenos-Aires'}>Buenos Aires</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="provincia"
                        select
                        label="Provincia"
                    >
                        <MenuItem key={1} value={'Buenos-Aires'}>Buenos Aires</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="ciudad"
                        select
                        label="Ciudad"
                    >
                        <MenuItem key={1} value={'moron'}>Moron</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        // error={state.errorMessage.length > 0 ?  true : false}
                        margin="normal"
                        required
                        fullWidth
                        id="domicilio"
                        label="Domicilio"
                        name="domicilio"
                        autoComplete="Domicilio"
                        // value={formState.email}
                        // onChange={ (event ) => onInputChange(event) }
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField 
                        // error={state.errorMessage.length > 0 ?  true : false}
                        margin="normal"
                        fullWidth
                        id="dpto"
                        label="Dpto"
                        name="dpto"
                        autoComplete="Departamento"
                        // value={formState.email}
                        // onChange={ (event ) => onInputChange(event) }
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField 
                        // error={state.errorMessage.length > 0 ?  true : false}
                        margin="normal"
                        fullWidth
                        id="piso"
                        label="Piso"
                        name="piso"
                        autoComplete="Piso"
                        // value={formState.email}
                        // onChange={ (event ) => onInputChange(event) }
                    />
                </Grid>
                
                <Grid item xs={12} md={2}>
                    <TextField 
                        // error={state.errorMessage.length > 0 ?  true : false}
                        margin="normal"
                        required
                        fullWidth
                        id="codPost"
                        label="C.P"
                        name="codpost"
                        autoComplete="CodPost"
                        // value={formState.email}
                        // onChange={ (event ) => onInputChange(event) }
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="rol"
                        select
                        label="Rol"
                        disabled
                    >
                        <MenuItem key={1} value={'admin'}>Administrador</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} md={12}>
                    <FormControlLabel 
                        label="Usuario Habilitado" 
                        control={
                            <Checkbox 
                                defaultChecked={ formState.is_active ? true : false}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                            />
                        } 
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button variant='contained' size='large' color='info'>GUARDAR</Button>
                </Grid>
            </Grid>
        </Box>
    </Paper>
  )
}
