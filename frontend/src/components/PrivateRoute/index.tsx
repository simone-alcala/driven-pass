import React , { useContext }from 'react';
import { UserContext, UserContextType } from './../../contexts/UserContext';
import { Navigate } from 'react-router-dom'

type Props = {
  children: JSX.Element;
  page?: string;
}

function PrivateRoute(props: Props) {
  const { children, page } = props;
  //const page = children.type.prototype.constructor.name;
  const { token } = useContext(UserContext) as UserContextType;

  console.log(page);
  console.log(token);
  if (token && (page === 'SignIn' || page === 'SignUp')) {
    return <Navigate to='/' />
  }

  if (!token && (page === 'SignIn' || page === 'SignUp')) {
    return children;
  }

  return token ? children : <Navigate to='/sign-in' />; 
}

export default PrivateRoute;