import React , { useContext, useEffect, useState }from 'react';
import { UserContext, UserContextType } from './../../contexts/UserContext';
import { useNavigate, Navigate } from 'react-router-dom'

import userApi from '../../services/api/userApi';
import { contractOutline } from 'ionicons/icons';

type Props = {
  children: JSX.Element;
  page?: string;
}

function PrivateRoute(props: Props) {
  const { children, page } = props;
  const { token, signOut } = useContext(UserContext) as UserContextType;

  useEffect(() => {
    const promise = userApi.validateToken(token || '') ;
    promise.catch(() => signOut() );
  },[])

  if (token && (page === 'SignIn' || page === 'SignUp')) {
    return <Navigate to='/' />
  }

  if (!token && (page === 'SignIn' || page === 'SignUp')) {
    return children;
  }

  return token ? children : <Navigate to='/sign-in'/>; 
}

export default PrivateRoute;