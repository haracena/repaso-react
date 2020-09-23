import { types } from "../types/types";

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: {
    id: Math.random() ,
    name:todo
  }
});

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  payload: id
})