
import { Navigate, useLocation } from "react-router-dom";




export const PublicRoutes = ({ children, isLogged }) => {

    const path = localStorage.getItem('lastRoute') || '/dashboard'; 

    return (!isLogged)
        ? children
        : <Navigate to={path} />

}
