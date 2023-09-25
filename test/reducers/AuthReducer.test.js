import { dashAxios } from "../../src/config/DashRcAxios";
import { AuthReducer } from "../../src/reducers/AuthReducer";
import { types } from "../../src/types/types";

describe('TEST REDUCER - AuthReducer', () => {

    const initialState = {
        user: null,
        isLogged: false,
        errorMessage: '',
        isLoading: true,
    };

    test('CONTROL - Agregar un estado inicial', () =>  {

        //Al pasar un objeto vacio no entra en ningun action 
        //por lo cual devuelve el estado inicial  tal cual
        const reducerState = AuthReducer(initialState, {});
        expect(reducerState).toBe(initialState);
    });


    test('ACTION CONTROL - Ejecutar action de Login', async() =>  {

        const { data } = await dashAxios.post('/auth/user/login', {
            email: 'nicolas@gmail.com',
            password: 'Nicolas10'
        });

        console.log(data.user);

        const  action = {
            type: types.auth.onLogin,
            payload: {
                user: data.res,
                isLogged: true,
                errorMessage: '',
                isLoading: false,
            }
        };

        const reducerState = AuthReducer(initialState, action);
        expect(reducerState.isLogged).toBe(true);
        expect(reducerState).toEqual(action.payload);
    });


    test('ACTION CONTROL - Validar que se ejecute el Logout', () =>  {

        const action = {
            type: types.auth.onLogout,
            payload:  {
                user: null,
                isLogged: false,
                errorMessage: '',
                isLoading: false
            }
        }

        const reducerState = AuthReducer(initialState, action);
        expect(reducerState.user).toBe(action.payload.user);
        expect(reducerState.isLogged).toBe(action.payload.isLogged);
        expect(reducerState).toEqual(action.payload);
    });


})