import { useReducer, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { UserReducer } from "../reducers/UserReducer"
import { dashAxios } from "../config/DashRcAxios"
import { types } from "../types/types"


const initialState = {
    isLoading: true,
    isActive: false,
    users: [],
    totalRows: 0,
}


export const UserProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(UserReducer,  initialState);
    const [ioading, setLoading] = useState(true);


    const getUsers = async (page = 0) =>  {
        const limit = 25;
        const { data } = await dashAxios.get(`users?limit=${limit}&page=${page}`);
        
        if(!data){
            return dispatch({
                type: types.user.messages,
                payload: {
                    messageStatus: 'ERROR',
                    msg: 'No Existen usuarios en el sistema',
                }
            })
        };

        dispatch({
            type: types.user.getUsers,
            payload:  {
                users:  data.res.users,
                totalRows: data.res.totalRows
            }
        });
    }


    const inactiveUser = async (id) => {

        setLoading(true);
        const { data } = await dashAxios.delete(`users/${id}`);
        
        if(data){
            dispatch({
                type: types.user.deleteUser,
                payload: {
                    msg: data.msg
                }
            })
        }
        setLoading(false);


    }

    return (
        <UserContext.Provider value={{
            state,
            getUsers,
            inactiveUser
        }}>
            { children }
        </UserContext.Provider>
    )

}