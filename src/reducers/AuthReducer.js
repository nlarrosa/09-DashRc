import { types } from '../types/types';

export const AuthReducer = (state = {}, action) => {

    switch (action.type) {
        case types.auth.login:
            return {
                ...state,
                user: action.payload.user,
                isLogged: true
            }

        case types.auth.logout:
            return {
                ...state,
                user: null,
                isLogged: false
            }
    
        default:
            return state;
    }
}