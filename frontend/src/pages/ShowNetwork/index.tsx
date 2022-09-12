import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext, UserContextType } from '../../contexts/UserContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Data, Title } from './style';
import HandleError from '../../components/HandleError';
import networkApi, { NetworkType } from '../../services/api/networkApi';


function ShowNetwork() {
  const { id } = useParams();
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<NetworkType>({ id: '', title: '', name: '', password: '' });
  const [error, setError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {       
    const promise = networkApi.getNetworkById(token || '', id || '');

    promise.then(({ data }) => {
      setFormData({ 
        ...formData,
        id: data.id,
        title: data.title,
        name: data.name,
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
      await networkApi.deleteNetwork(token || '', id);
      toast.success('Wifi deleted successfully');
      setTimeout(() => navigate('/networks'), 2000);
    } catch (err: any) {
      toast.error(HandleError({ errorObject: err }));
      setTimeout(() => setDisableButton(false), 2000);
    }
  }

  return (
    <>
      <ToastContainer />
      
      <Header title='Wifi'/>
      <Container>
        <Main>
          { !error 
          ? <>
              <Data>{formData.title}</Data>
 
              <Title>Nome</Title>
              <Data >{formData.name}</Data>

              <Title >Password</Title>
              <Data >{formData.password}</Data>
            </>
          : <Title >Ooops</Title> 
          }
        </Main>
      </Container>
      <Footer button='delete' showBack={true} linkNextPage='/networks' 
        disableButton={disableButton} deleteFunction={deleteRegister}/>
    </>
  );
}

export default ShowNetwork;
