import { types } from "../types/types";

export const AuthReducer = (state={}, action ) => {

        switch (action.type) {

            case types.auth.onLogin:
                return {
                    ...state,
                    user: action.payload.user,
                    isLogged: true,
                    errorMessage: '',
                    isLoading: false
                };

            case types.auth.onLogout:
                return {
                    ...state,
                    user: null,
                    isLogged: false,
                    errorMessage: action.payload.errorMessage,
                    isLoading: false
                };
        
            default:
                return state;
        }

}