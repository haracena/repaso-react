import { types } from "../types/types";

const initialState = {
  users: [],
  fetchingUsers: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USERS:
      return {
        ...state,
        users: action.payload
      }

    case types.FETCHING_USERS:
      return {
        ...state,
        fetchingUsers: true
      }
    
    case types.FETCHING_USERS_DONE:
      return {
        ...state,
        fetchingUsers: false
      }
  
    default:
      return state;
  }
}