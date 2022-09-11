import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext, UserContextType } from '../../contexts/UserContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Form, Label, Input } from './style';
import HandleError from '../../components/HandleError';
import safeNoteApi from '../../services/api/safeNoteApi';

type FormData = {
  title: string;
  note: string;
}

function AddSafeNote() {
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<FormData>({ title: '', note: '' });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {  
    setDisabled(true);
    event.preventDefault();    
    try {
      const result = await safeNoteApi.insertSafeNote(formData, token || '');    
      toast.success('Safe note created successfully');      
      setTimeout(() => {
        setDisabled(false);
        navigate(`/safenotes/${result.data.createdId}`);
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
      
      <Header title='Notas Seguras'/>
      <Container>
        <Main>

        <Form onSubmit={handleSubmit} id='safeNoteForm'>

          <Label htmlFor='title'>Título</Label>
          <Input type='text' id='title' name='title' required onChange={handleChange}/>
          
          <Label htmlFor='note'>Anotação</Label>
          <Input type='text' id='note' name='note' required onChange={handleChange}/>

        </Form>
           
        </Main>
      </Container>
      <Footer button='confirm' showBack={true} linkNextPage='/safenote' form='safeNoteForm' disableButton={disabled}/>
    </>
  );
}

export default AddSafeNote;
