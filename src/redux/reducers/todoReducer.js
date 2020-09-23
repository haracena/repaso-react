import { types } from "../types/types";

const initialState = {
  todoList: [
    { id: 1, name: 'prueba 1'},
    { id: 2, name: 'prueba 2'},
    { id: 3, name: 'prueba 3'},
  ]
}

export const todoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload]
      }
    
    case types.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(({ id }) => id !== payload)
      }
      
    default:
      return state;
  }
}