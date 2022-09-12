import React, { useState, useContext, useEffect } from 'react';
import { wallet } from 'ionicons/icons';
import { UserContext, UserContextType } from '../../contexts/UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Title } from './style';
import PageItem from '../../components/PageItem';
import HandleError from '../../components/HandleError';

import cardApi, { CardType } from '../../services/api/cardApi';

type CardTypePage = Partial<CardType>;

function Cards() {
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<CardTypePage[]>([{ id: '', title: '' }]);
  const [error, setError] = useState(false);

  useEffect(() => {       
    const promise = cardApi.getCards(token || '');

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
      <Header title='Cartões'/>
      <Container>
        <Main>
          { !error 
          ? formData.map((data) => 
              <PageItem icon={wallet} key={data.id} title={data.title} link={'cards/'+data.id}/>
            )
          : <Title >Ooops</Title> 
          }
        </Main>
      </Container>
      <Footer button='new' showBack={true} linkNextPage='/card' disableButton={false}/>
    </>
  );
}

export default Cards;
