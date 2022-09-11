import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext, UserContextType } from '../../contexts/UserContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Data, Title } from './style';
import HandleError from '../../components/HandleError';
import credentialApi, { CredentialType } from '../../services/api/credentialApi';


function ShowCredential() {
  const { id } = useParams();
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<CredentialType>({ id: '', title: '', url: '', username: '', password: '' });
  const [error, setError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {       
    const promise = credentialApi.getCredentialById(token || '', id || '');

    promise.then(({ data }) => {
      setFormData({ 
        ...formData,
        id: data.id,
        title: data.title,
        url: data.url,
        username: data.username,
        password: data.password,
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
      await credentialApi.deleteCredential(token || '', id);
      toast.success('Credential deleted successfully');
      setTimeout(() => navigate('/credentials'), 2000);
    } catch (err: any) {
      toast.error(HandleError({ errorObject: err }));
      setTimeout(() => setDisableButton(false), 2000);
    }
  }

  return (
    <>
      <ToastContainer />
      
      <Header title='Credenciais'/>
      <Container>
        <Main>
          { !error 
          ? <>
              <Data>{formData.title}</Data>
              
              <Title >URL</Title>
              <Data >{formData.url}</Data>         
              
              <Title>Usuário</Title>
              <Data >{formData.username}</Data>

              <Title >Password</Title>
              <Data >{formData.password}</Data>
            </>
          : <Title >Ooops</Title> 
          }
        </Main>
      </Container>
      <Footer button='delete' showBack={true} linkNextPage='/credentials' 
        disableButton={disableButton} deleteFunction={deleteRegister}/>
    </>
  );
}

export default ShowCredential;
