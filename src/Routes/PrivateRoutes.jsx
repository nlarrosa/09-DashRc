import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {

  //TODO: Aca devemos validar si el  usuario esta validado con el Context
  const logged = false;


  return (logged)
    ? children
    : <Navigate to='/auth/login' />
}
