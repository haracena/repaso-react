import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

const Form = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default Form
