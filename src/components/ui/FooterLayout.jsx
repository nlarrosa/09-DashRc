import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


export const FooterLayout = (props) => {
  return (

    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {/* <Link color="inherit" to="https://mui.com/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
