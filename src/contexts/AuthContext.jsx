import { createContext, useReducer } from "react";
import { AuthReducer } from "../reducers/Authreducer";
import { types }  from '../types/types';



const initialState = {
    user: null,
    isLogged: false,
}


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);


    const login = () => {

        dispatch({
            type: types.auth.login,
            payload: {
                user: {
                    name: 'Nicolas',
                    lastname: 'Larrosa',
                    email: 'nicolaslarrosa.mail@gmail.com',
                }
            }
        });
    }


    const logout = () => {

        dispatch({
            type: types.auth.logout,
        });
    }

    return(
        <AuthContext.Provider value={{
            state,
            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}