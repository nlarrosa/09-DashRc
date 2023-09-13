import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


export const PublicRoutes = ({ children }) => {

    const { state } = useContext(AuthContext);


    return (!state.isLogged)
        ? children
        : <Navigate to='/dashboard' />

}
