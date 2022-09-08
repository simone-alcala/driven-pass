import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Logo from './../../components/Logo';
import Api from '../../services/api/api';

import { Main, Form, Label, Input, Button, Hr, Span } from './style';

type FormData = {
  email: string;
  password: string;
}

function SignUp() {
  
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setDisabled(true);
    event.preventDefault();
    const { email, password } = formData;
    try {
      await Api.signUp({ email, password });
      toast.success('Usuário criado com sucesso');
      setTimeout(() => navigate('/sign-in'), 3000);
    } catch (err: AxiosError | any ) {
      const errorMessage = err.response.data || 'Please, try again later'
      toast.error(errorMessage);
    }
    setTimeout(() => setDisabled(false), 2000);
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
      <Link to='/sign-in'>
        <Span>Primeiro acesso? Crie sua conta!</Span>
      </Link>
    </Main>
  );
}

export default SignUp;

