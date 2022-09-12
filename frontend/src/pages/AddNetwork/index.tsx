import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext, UserContextType } from '../../contexts/UserContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Form, Label, Input } from './style';
import HandleError from '../../components/HandleError';
import networkApi from '../../services/api/networkApi';

type FormData = {
  title: string;
  name: string;
  password: string;
}

function AddNetwork() {
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<FormData>({ title: '', name: '', password: '' });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {  
    setDisabled(true);
    event.preventDefault();    
    try {
      const result = await networkApi.insertNetwork(formData, token || '');    
      toast.success('Wifi created successfully');      
      setTimeout(() => {
        setDisabled(false);
        navigate(`/networks/${result.data.createdId}`);
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

        <Form onSubmit={handleSubmit} id='networkForm'>

          <Label htmlFor='title'>Título</Label>
          <Input type='text' id='title' name='title' required onChange={handleChange}/>
          
          <Label htmlFor='name'>Nome</Label>
          <Input type='text' id='name' name='name' required onChange={handleChange}/>

          <Label htmlFor='password'>Senha</Label>
          <Input type='text' id='password' name='password' required onChange={handleChange}/>

        </Form>
           
        </Main>
      </Container>
      <Footer button='confirm' showBack={true} linkNextPage='/network' form='networkForm' disableButton={disabled}/>
    </>
  );
}

export default AddNetwork;
