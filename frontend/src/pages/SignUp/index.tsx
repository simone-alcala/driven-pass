import React, { useState, FormEvent, ChangeEvent, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../services/api/api';

import Logo from './../../components/Logo';
import { Main, Form, Label, Input, Button } from './style';
import { AxiosError } from 'axios';

type FormData = {
  email: string;
  password: string;
}

function SignUp() {
 
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [disabled, setDisabled] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setDisabled(true);
    event.preventDefault();

    const { email, password } = formData;

    try {
      const result = await Api.signUp({ email, password });
      console.log(result);
      toast.success('Sign up successfully');
      setTimeout(() => navigate('/sign-in'), 3000);
    } catch (err: AxiosError | any ) {
      console.log(err);
      const errorMessage = err.response.data.error || err.response.data || 'Please, try again later'
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
        
        <Button type='submit' disabled={disabled} color='#9BFBB0' margin='25px'>Criar</Button>

      </Form>

      <Link to='/sign-in'>
        <Button type='button' color='#FB9B9B' margin='10px'>&lt; Voltar</Button>
      </Link>

    </Main>
  );
}

export default SignUp;
