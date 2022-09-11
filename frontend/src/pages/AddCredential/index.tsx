import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext, UserContextType } from '../../contexts/UserContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Form, Label, Input } from './style';
import HandleError from '../../components/HandleError';
import credentialApi from '../../services/api/credentialApi';

type FormData = {
  title: string;
  url: string;
  username: string;
  password: string;
}

function AddCredential() {
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<FormData>({ title: '', url: '', username: '', password: '' });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {  
    setDisabled(true);
    event.preventDefault();    
    try {
      const result = await credentialApi.insertCredential(formData, token || '');    
      toast.success('Credential created successfully');      
      setTimeout(() => {
        setDisabled(false);
        navigate(`/credentials/${result.data.createdId}`);
      }, 3000);
    } catch (err: any) {
      toast.error(HandleError({ errorObject: err }));
      setTimeout(() => setDisabled(false), 3000);
    } 
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });     
  }
 
  return (
    <>
      <ToastContainer />
      
      <Header title='Credenciais'/>
      <Container>
        <Main>

        <Form onSubmit={handleSubmit} id='credentialForm'>

          <Label htmlFor='title'>Título</Label>
          <Input type='text' id='title' name='title' required onChange={handleChange}/>

          <Label htmlFor='url'>URL</Label>
          <Input type='url' id='url' name='url' required onChange={handleChange}/>
          
          <Label htmlFor='username'>Usuário</Label>
          <Input type='text' id='username' name='username' required onChange={handleChange}/>

          <Label htmlFor='password'>Password</Label>
          <Input type='text' id='password' name='password' required onChange={handleChange}/>

        </Form>
           
        </Main>
      </Container>
      <Footer button='confirm' showBack={true} linkNextPage='/credential' form='credentialForm' disableButton={disabled}/>
    </>
  );
}

export default AddCredential;
