

import { Navigate, useLocation } from 'react-router-dom';



export const PrivateRoutes = ({ children, isLogged}) => {

  const { pathname  } = useLocation();
  localStorage.setItem('lastRoute', pathname);

  return (isLogged)
    ? children
    : <Navigate to='/auth/login' />
}
