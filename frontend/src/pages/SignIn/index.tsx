import React, { useState, FormEvent, ChangeEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext, UserContextType } from './../../contexts/UserContext';
import HandleError from '../../components/HandleError';
import Logo from './../../components/Logo';
import AuthApi from '../../services/api/authApi';

import { Main, Form, Label, Input, Button, Hr, Span } from './style';

type FormData = {
  email: string;
  password: string;
}

function SignIn() {
  
  const { signIn } = useContext(UserContext) as UserContextType;

  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [disabled, setDisabled] = useState(false);
  
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setDisabled(true);
    event.preventDefault();
    try {
      const result = await AuthApi.signIn(formData);    
      toast.success('Loading...');      
      signIn(result.data.token);
    } catch (err: any) {
      toast.error(HandleError({ errorObject: err }));
      setTimeout(() => { setDisabled(false) }, 2000);
    } 
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });     
  }

  return (
    <Main>

      <ToastContainer />

      <Logo size='large'/>

      <Form onSubmit={handleSubmit}>

        <Label htmlFor='email'>Usuário (e-mail)</Label>
        <Input type='email' id='email' name='email' required onChange={handleChange}/>
        
        <Label htmlFor='password'>Senha</Label>
        <Input type='password' id='password' name='password' required onChange={handleChange}/>
        
        <Button type='submit' disabled={disabled} >Acessar</Button>

      </Form>
      <Hr />
      <Link to='/sign-up'>
        <Span>Primeiro acesso? Crie sua conta!</Span>
      </Link>
    </Main>
  );
}

export default SignIn;