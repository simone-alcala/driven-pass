import React, { ChangeEvent, FormEvent, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext, UserContextType } from '../../contexts/UserContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Form, Label, Input, Radio, RadioOption, RadioLabel } from './style';
import HandleError from '../../components/HandleError';
import cardApi, { CardType }  from '../../services/api/cardApi';

function AddCard() {
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<CardType>(
    { title: '', number: '', holderName: '', securityCode: '', 
      expirationDate: '', password: '', virtual: false, type: 'BOTH' });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {  
    setDisabled(true);
    event.preventDefault();    
    try {
      const result = await cardApi.insertCard(formData, token || '');    
      toast.success('Card created successfully');      
      setTimeout(() => {
        setDisabled(false);
        navigate(`/cards/${result.data.createdId}`);
      }, 3000);
    } catch (err: any) {
      toast.error(HandleError({ errorObject: err }));
      setTimeout(() => setDisabled(false), 3000);
    } 
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    let virtual = true;

    if (event.target.name === 'virtual') {
      virtual = event.target.value === 'sim' ? true : false;
      setFormData({ ...formData, virtual });   
      return;
    }

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });     
  }
 
  return (
    <>
      <ToastContainer />
      
      <Header title='Cartões'/>
      <Container>
        <Main>

        <Form onSubmit={handleSubmit} id='cardForm'>

          <Label htmlFor='title'>Título</Label>
          <Input type='text' id='title' name='title' required onChange={handleChange}/>
          
          <Label htmlFor='number'>Número</Label>
          <Input type='text' id='number' name='number' required onChange={handleChange}/>

          <Label htmlFor='holderName'>Nome</Label>
          <Input type='text' id='holderName' name='holderName' required onChange={handleChange}/>
          
          <Label htmlFor='securityCode'>CVV</Label>
          <Input type='text' id='securityCode' name='securityCode' required onChange={handleChange}/>

          <Label htmlFor='expirationDate'>Data de expiração</Label>
          <Input type='text' id='expirationDate' name='expirationDate' required onChange={handleChange}/>
          
          <Label htmlFor='password'>Senha</Label>
          <Input type='text' id='password' name='password' required onChange={handleChange}/>

          <Label htmlFor='virtual'>Virtual?</Label>
          
          <Radio className='radio'>
            <RadioLabel htmlFor='virtual'>
              Sim
              <RadioOption name='virtual' type='radio' value='sim' onChange={handleChange} required/>
            </RadioLabel>

            <RadioLabel htmlFor='virtual'>
              Não
              <RadioOption name='virtual' type='radio' value='nao' onChange={handleChange} required/>
            </RadioLabel>
          </Radio>

          <Label htmlFor='type'>Tipo</Label>

          <Radio className='radio'>

            <RadioLabel htmlFor='type'>
              Ambos
              <RadioOption name='type' type='radio' value='BOTH' onChange={handleChange} required/>
            </RadioLabel>

            <RadioLabel htmlFor='type'>
              Débito
              <RadioOption name='type' type='radio' value='DEBIT' onChange={handleChange} required/>
            </RadioLabel>

            <RadioLabel htmlFor='type'>
              Crédito
              <RadioOption name='type' type='radio' value='CREDIT' onChange={handleChange} required/>
            </RadioLabel>

          </Radio>

        </Form>
           
        </Main>
      </Container>
      <Footer button='confirm' showBack={true} linkNextPage='/card' form='cardForm' disableButton={disabled}/>
    </>
  );
}

export default AddCard;
