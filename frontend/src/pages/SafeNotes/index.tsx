import React, { useState, useContext, useEffect } from 'react';
import { pencil } from 'ionicons/icons';
import { UserContext, UserContextType } from '../../contexts/UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Title } from './style';
import PageItem from '../../components/PageItem';
import HandleError from '../../components/HandleError';

import safeNoteApi, { SafeNoteType } from '../../services/api/safeNoteApi';

type SafeNoteTypePage = Partial<SafeNoteType>;

function SafeNotes() {
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<SafeNoteTypePage[]>([{ id: '', title: '' }]);
  const [error, setError] = useState(false);

  useEffect(() => {       
    const promise = safeNoteApi.getSafeNotes(token || '');

    promise.then(({ data }) => {
      setFormData([ ...data]);
      setError(false);
    });

    promise.catch((err) => {
      setError(true);
      toast.error(HandleError({ errorObject: err }));
    })
    
  },[ ]);

  return (
    <>
      <ToastContainer />
      <Header title='Notas Seguras'/>
      <Container>
        <Main>
          { !error 
          ? formData.map((data) => 
              <PageItem icon={pencil} key={data.id} title={data.title} link={'safenotes/'+data.id}/>
            )
          : <Title >Ooops</Title> 
          }
        </Main>
      </Container>
      <Footer button='new' showBack={true} linkNextPage='/safenote' disableButton={false}/>
    </>
  );
}

export default SafeNotes;
