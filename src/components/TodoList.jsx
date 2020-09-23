import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions/todoActions';

const TodoList = () => {
    const dispatch = useDispatch();
    const {todoList} = useSelector(state => state.todoReducer);
  useEffect(() => {
    console.log(todoList);
  }, []);

  const deleteTodod = (id) => {
    dispatch(deleteTodo(id));
  }

  return (
    <div>
      {
        todoList.map(todo => 
        <div key={todo.id}>
            <p>{todo.name}</p>
            <button onClick={() => {deleteTodod(todo.id)}}>Delete</button>
        </div>        
        )
      }
    </div>
  )
}

export default TodoList;
