import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext, UserContextType } from '../../contexts/UserContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main, Data, Title } from './style';
import HandleError from '../../components/HandleError';
import cardApi, { CardType } from '../../services/api/cardApi';

enum cardType {
  'BOTH' = 'Ambos',
  'CREDIT' = 'Crédito',
  'DEBIT' = 'Débito',
}

function ShowCard() {
  const { id } = useParams();
  const { token } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState<CardType>({ 
    title: '', number: '', holderName: '', securityCode: '', 
      expirationDate: '', password: '', virtual: false, type: 'BOTH' });
  const [error, setError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {       
    const promise = cardApi.getCardById(token || '', id || '');
    
    promise.then(({ data }) => {

      setFormData({ 
        ...formData,
        id: data.id,
        title: data.title,
        number: data.number,
        holderName: data.holderName,
        securityCode: data.securityCode,
        expirationDate: data.expirationDate,
        password: data.password,
        type: data.type,
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
      await cardApi.deleteCard(token || '', id);
      toast.success('Card deleted successfully');
      setTimeout(() => navigate('/cards'), 2000);
    } catch (err: any) {
      toast.error(HandleError({ errorObject: err }));
      setTimeout(() => setDisableButton(false), 2000);
    }
  }

  return (
    <>
      <ToastContainer />
      
      <Header title='Cartões'/>
      <Container>
        <Main>
          { !error 
          ? <>
              <Data>{formData.title}</Data>

              <Title >Número</Title>
              <Data >{formData.number}</Data>

              <Title >Nome</Title>
              <Data >{formData.holderName}</Data>

              <Title >CVV</Title>
              <Data >{formData.securityCode}</Data>

              <Title >Senha</Title>
              <Data >{formData.password}</Data>

              <Title >Virtual?</Title>
              <Data >{ formData.virtual ? 'Sim' : 'Não' }</Data>

              <Title >Tipo</Title>
              <Data >{cardType[formData.type]}</Data>

            </>
          : <Title >Ooops</Title> 
          }
        </Main>
      </Container>
      <Footer button='delete' showBack={true} linkNextPage='/cards' 
        disableButton={disableButton} deleteFunction={deleteRegister}/>
    </>
  );
}

export default ShowCard;
