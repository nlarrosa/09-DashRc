import { useReducer } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthReducer } from "../reducers/AuthReducer";
import { types } from "../types/types";
import { dashAxios } from "../config/DashRcAxios";

const initialState =  {
    user: null,
    isLogged: false,
    errorMessage: '',
    isLoading: true,
}


export const AuthProvider = ({ children }) =>  {

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);


    const login = async (email,  password) =>  {

        try {
            const { data } = await dashAxios.post('auth/user/login', {
                email,
                password
            });

            localStorage.setItem('tokenRc', data.res.token);
    
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
        
        localStorage.clear();

        dispatch({
            type: types.auth.onLogout,
            payload: {
                errorMessage: ''
            }
        });
    }


    const checkAuthToken = async () => {

        try {
            const token = localStorage.getItem('tokenRc');
            if(!token){
                return dispatch({
                    type: types.auth.onLogout,
                    payload: {
                        errorMessage: ''
                    }
                });
            }

            const { data } = await dashAxios.get('auth/user/review/token');
            localStorage.setItem('tokenRc', data.res.token);

            dispatch({
                type:  types.auth.onLogin,
                payload: {
                    user: data.res
                }
            });
            
        } catch (error) {
            localStorage.clear();
            dispatch({
                type: types.auth.onLogout,
                payload: {
                    errorMessage: ''
                }
            });
        }
    }


    

    return (
        <AuthContext.Provider value={{
            state,
            login,
            logout,
            checkAuthToken,
        }}>
            { children }
        </AuthContext.Provider>
    )
}