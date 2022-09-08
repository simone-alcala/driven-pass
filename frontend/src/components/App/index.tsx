import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthProvider from './../../contexts/UserContext';

import Home from '../../pages/Home';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import SafeNotes from '../../pages/SafeNotes';
import Network from '../../pages/Network';
import Credentials from '../../pages/Credentials';
import Cards from '../../pages/Cards';

import PrivateRoute from '../PrivateRoute';

import './../../assets/styles/reset.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/sign-up' element={ 
            <PrivateRoute page='SignUp'>
              <SignUp /> 
            </PrivateRoute>
          }/>
          <Route path='/sign-in' element={ 
            <PrivateRoute page='SignIn'>
              <SignIn /> 
            </PrivateRoute>
          }/>
          <Route path='/' element={ 
            <PrivateRoute>
              <Home /> 
            </PrivateRoute>
          }/>
          <Route path='/safenotes' element={ 
            <PrivateRoute>
              <SafeNotes /> 
            </PrivateRoute>
          }/>
          <Route path='/networks' element={ 
            <PrivateRoute>
              <Network /> 
            </PrivateRoute>
          }/>
          <Route path='/credentials' element={ 
            <PrivateRoute>
              <Credentials /> 
            </PrivateRoute>}
          />
          <Route path='/cards' element={ 
            <PrivateRoute>
              <Cards /> 
            </PrivateRoute>
          }/>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;