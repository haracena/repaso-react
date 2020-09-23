import React from 'react';
import Form from './components/Form';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {
  return (
    <Provider store={store}>
      {/* <Form />
      <TodoList /> */}
      <UserList />
    </Provider>
  );
}

export default App;
