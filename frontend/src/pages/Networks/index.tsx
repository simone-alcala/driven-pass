import React, { useState, useContext, useEffect } from 'react';
import { wifi } from 'ionicons/icons';
import { UserContext, UserContextType } from '../../contexts/UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Title } from './style';
import PageItem from '../../components/PageItem';
import networkApi, { NetworkType } from '../../services/api/networkApi';
import HandleError from '../../components/HandleError';

type NetworkTypePage = Partial<NetworkType>;

function Networks() {
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<NetworkTypePage[]>([{ id: '', title: '' }]);
  const [error, setError] = useState(false);

  useEffect(() => {       
    const promise = networkApi.getNetworks(token || '');

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
      <Header title='Wifi'/>
      <Container>
        <Main>
          { !error 
          ? formData.map((data) => 
              <PageItem icon={wifi} key={data.id} title={data.title} link={'networks/'+data.id}/>
            )
          : <Title >Ooops</Title> 
          }
        </Main>
      </Container>
      <Footer button='new' showBack={true} linkNextPage='/network' disableButton={false}/>
    </>
  );
}

export default Networks;
