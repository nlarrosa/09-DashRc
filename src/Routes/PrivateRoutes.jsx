import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const PrivateRoutes = ({ children }) => {

  //TODO: Aca devemos validar si el  usuario esta validado con el Context
  const { state } =  useContext(AuthContext);


  return (state.isLogged)
    ? children
    : <Navigate to='/auth/login' />
}
