import { types } from "../types/types";


export const UserReducer = (state, action) => {
  
    switch (action.type) {
        case types.user.getUsers:
          return {
            isLoading: false,
            isActive: true,
            users: action.payload.users,
            totalRows: action.payload.totalRows
          }

        case types.user.Messages:
            return {
              isLoading: false,
              msg: action.payload.message,
            }
    
        default: state;
    }
}
