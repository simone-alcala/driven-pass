import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext, UserContextType } from '../../contexts/UserContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Data, Title } from './style';
import HandleError from '../../components/HandleError';
import safeNoteApi, { SafeNoteType } from '../../services/api/safeNoteApi';

function ShowSafeNote() {
  const { id } = useParams();
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<SafeNoteType>({ id: '', title: '', note: ''});
  const [error, setError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {       
    const promise = safeNoteApi.getSafeNoteById(token || '', id || '');

    promise.then(({ data }) => {
      setFormData({ 
        ...formData,
        id: data.id,
        title: data.title,
        note: data.note,
      });
      setError(false);
    });

    promise.catch((err) => {
      setError(true);
      toast.error(HandleError({ errorObject: err }));
    })
    
  },[ ]);

  async function deleteRegister(id: string) {
    setDisableButton(true);
    try {
      await safeNoteApi.deleteSafeNote(token || '', id);
      toast.success('Safe note deleted successfully');
      setTimeout(() => navigate('/safenotes'), 2000);
    } catch (err: any) {
      toast.error(HandleError({ errorObject: err }));
      setTimeout(() => setDisableButton(false), 2000);
    }
  }

  return (
    <>
      <ToastContainer />
      
      <Header title='Notas Seguras'/>
      <Container>
        <Main>
          { !error 
          ? <>
              <Data>{formData.title}</Data>

              <Title >Anotação</Title>
              <Data >{formData.note}</Data>
            </>
          : <Title >Ooops</Title> 
          }
        </Main>
      </Container>
      <Footer button='delete' showBack={true} linkNextPage='/safenotes' 
        disableButton={disableButton} deleteFunction={deleteRegister}/>
    </>
  );
}

export default ShowSafeNote;
