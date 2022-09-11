import React, { useState, useContext, useEffect } from 'react';
import { logIn } from 'ionicons/icons';
import { UserContext, UserContextType } from '../../contexts/UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Title } from './style';
import PageItem from '../../components/PageItem';
import credentialApi, { CredentialType } from '../../services/api/credentialApi';
import HandleError from '../../components/HandleError';

type CredentialTypePage = Partial<CredentialType>;

function Credentials() {
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<CredentialTypePage[]>([{ id: '', title: '' }]);
  const [error, setError] = useState(false);

  useEffect(() => {       
    const promise = credentialApi.getCredentials(token || '');

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
      <Header title='Credenciais'/>
      <Container>
        <Main>
          { !error 
          ? formData.map((data) => 
              <PageItem icon={logIn} key={data.id} title={data.title} link={'credentials/'+data.id}/>
            )
          : <Title >Ooops</Title> 
          }
        </Main>
      </Container>
      <Footer button='new' showBack={true} linkNextPage='/credential' disableButton={false}/>
    </>
  );
}

export default Credentials;
