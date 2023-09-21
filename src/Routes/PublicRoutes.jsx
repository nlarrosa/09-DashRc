
import { Navigate } from "react-router-dom";




export const PublicRoutes = ({ children, isLogged }) => {



    return (!isLogged)
        ? children
        : <Navigate to='/dashboard' />

}
