import { useReducer, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { UserReducer } from "../reducers/UserReducer"
import { dashAxios } from "../config/DashRcAxios"
import { types } from "../types/types"


const initialState = {
    isLoading: true,
    isActive: false,
    users: [],
    user: {},
    totalRows: 0,
    errorMessage: '',
    succesMessage: '',
}


export const UserProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(UserReducer,  initialState);


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


    const getUser = (id) => {

        try {
            const user = state.users.find((item) => item.id == id);
  
            if(!user){
                return dispatch({
                    type: types.user.messages,
                    payload: {
                        messageStatus: 'ERROR',
                        msg: 'No Existe el usuario en el sistema',
                    }
                })
            }

            dispatch({
                type: types.user.getOneUser,
                payload: {
                    user
                }
            });
            
        } catch (error) {
            console.log(error);
        }
    }


    const editUser = async (dataUser) => {

        const { id } = dataUser;

        const { data } = await dashAxios.put(`users/${id}`, {
            dataUser,
        });

        console.log(data)
    }

        
    const deleteUser = async (id) => {

        const { data } = await dashAxios.delete(`users/${id}`);

        if(data){
            const users = state.users.filter( (item) => {
                if(item.id == id){
                    item.is_active = false
                }

                return item;
            });

            dispatch({
                type: types.user.deleteUser,
                payload: {
                    users,
                }
            })
        }

    }


    const activeUser = async (id) => {

        const { data }  =  await dashAxios.put(`users/${id}`, {
            is_active: true,
        });

        if(data){
            const users =  state.users.filter( (item) => {
                if(item.id == id){
                    item.is_active = true
                }

                return item;
            });

            dispatch({
                type: types.user.activeUser,
                payload: {
                    users
                }
            });
        }


    }

    return (
        <UserContext.Provider value={{
            state,
            getUsers,
            getUser,
            deleteUser,
            activeUser,
            editUser
        }}>
            { children }
        </UserContext.Provider>
    )

}