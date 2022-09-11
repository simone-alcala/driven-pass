import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthProvider from './../../contexts/UserContext';

import Home from '../../pages/Home';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import SafeNotes from '../../pages/SafeNotes';
import Network from '../../pages/Network';
import Credentials from '../../pages/Credentials';
import AddCredential from '../../pages/AddCredential';
import Cards from '../../pages/Cards';

import PrivateRoute from '../PrivateRoute';

import './../../assets/styles/reset.css';
import ShowCredential from '../../pages/ShowCredential';
import ShowSafeNote from '../../pages/ShowSafeNote';
import AddSafeNote from '../../pages/AddSafeNote';

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
          <Route path='/safenotes/:id' element={ 
            <PrivateRoute>
              <ShowSafeNote /> 
            </PrivateRoute>}
          />
          <Route path='/safenote' element={ 
            <PrivateRoute>
              <AddSafeNote /> 
            </PrivateRoute>}
          />

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
          <Route path='/credentials/:id' element={ 
            <PrivateRoute>
              <ShowCredential /> 
            </PrivateRoute>}
          />
          <Route path='/credential' element={ 
            <PrivateRoute>
              <AddCredential /> 
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