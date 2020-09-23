import { types } from "../types/types"

export const startAddUsers = () => {
  return async (dispatch, getState) => {
    dispatch(fetchingUser());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      // console.log(users);
      dispatch(addUsers(users));
      dispatch(fetchingUserDone());
    } catch (e) {

    }
  }
}

const fetchingUser = () => ({
  type: types.FETCHING_USERS
})

const fetchingUserDone = () => ({
  type: types.FETCHING_USERS_DONE
})

const addUsers = (users) => ({
  type: types.ADD_USERS,
  payload: users
})