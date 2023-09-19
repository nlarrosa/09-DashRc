import { useReducer } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthReducer } from "../reducers/AuthReducer";
import { types } from "../types/types";
import { dashAxios } from "../config/DashRcAxios";

const initialState =  {
    user: null,
    isLogged: false,
    errorMessage: ''
}


export const AuthProvider = ({ children }) =>  {

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);


    const login = async (email,  password) =>  {

        try {
            const { data } = await dashAxios.post('auth/user/login', {
                email,
                password
            });

            //TODO: guardar el token en el storage
    
            dispatch({
                type:  types.auth.onLogin,
                payload:  {
                    user: data.res
                }
            });
        } catch (error) {
            const { data }  = error.response

            dispatch({
                type: types.auth.onLogout,
                payload: {
                    errorMessage: data.msg
                }
            })

        }
        

    }


    const logout = () => {

        dispatch({
            type: types.auth.onLogout
        });
    }

    return (
        <AuthContext.Provider value={{
            state,
            login,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}