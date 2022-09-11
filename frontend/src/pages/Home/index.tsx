import React, { useEffect, useContext, useState } from 'react';
import { logIn, pencil, wallet, wifi } from 'ionicons/icons';

import Header from '../../components/Header';
import HomeItem from '../../components/HomeItem';
import { Container, Main } from './style';
import userApi, { TotalsType } from '../../services/api/userApi';
import { UserContext, UserContextType } from '../../contexts/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HandleError from '../../components/HandleError';

function Home() {
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<TotalsType>({ 
    userId: 0,
    totalCredentials: 0,
    totalCards: 0,
    totalNetworks: 0,
    totalSafeNotes: 0 
  });

  useEffect(() => {       
    const promise = userApi.getTotals(token || '');

    promise.then(({ data }) => {
      setFormData({ 
        ...formData,
        userId: data.userId,
        totalCredentials: data.totalCredentials,
        totalCards: data.totalCards,
        totalNetworks: data.totalNetworks,
        totalSafeNotes: data.totalSafeNotes 
      });
    });

    promise.catch((err) => {
      toast.error(HandleError({ errorObject: err }));
    })
    
  },[ ]);

  return (
    <>
      <ToastContainer />
      <Header title='Minhas senhas'/>
      <Container>
        <Main>
          <HomeItem icon={logIn} link='credentials' title='Credenciais' quantity={formData.totalCredentials} />
          <HomeItem icon={pencil} link='safenotes' title='Notas seguras' quantity={formData.totalSafeNotes} />
          <HomeItem icon={wallet} link='cards' title='Cartões' quantity={formData.totalCards} />
          <HomeItem icon={wifi} link='networks' title='Senhas de Wi-fi' quantity={formData.totalNetworks} />
        </Main>
      </Container>
    </>
  );
}

export default Home;


