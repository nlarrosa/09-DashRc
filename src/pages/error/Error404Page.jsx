import React from 'react'
import { Avatar, Box, Grid, Typography } from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';

export const Error404Page = () => {
  return (

    <>
        <Grid mt={'10%'}>
          <Box noValidate sx={{ mt: 1, textAlign:'center' }}>
            <AnnouncementIcon sx={{ fontSize: 100 }} />
              <Typography variant='h2' fontFamily={'fantasy'} color={'primary.main'}>ERROR 404</Typography>
              <Typography variant='h5' fontFamily={'revert'} >La pagina no se encuentra disponible!</Typography>
          </Box>
        </Grid>
    </>
  )
}
