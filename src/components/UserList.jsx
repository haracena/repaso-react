import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startAddUsers } from  '../redux/actions/userActions';

const UserList = () => {
  const dispatch = useDispatch();
  const {users, fetchingUsers} = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(startAddUsers());
  }, [dispatch])

  return (
    <div>
      <h1>user list</h1>
      {
        fetchingUsers ? <p>Cargando...</p> : users.map(user => <p key={user.id}>{user.name}</p>)
      }
    </div>
  )
}

export default UserList;
