import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addCircle, closeCircle, checkmarkCircle } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

import { Container, Main, Span, Icon, Button } from './style';

type Props = {
  button: 'new' | 'delete' | 'confirm';
  showBack?: boolean;
  linkNextPage: string;
  form?: string;
  disableButton: boolean;
  deleteFunction?: (id: string) => void;
}

function Footer(props: Props) {
  const { button, showBack, linkNextPage, form, disableButton, deleteFunction } = props;
  const navigate = useNavigate();
  const { id } = useParams();

  const icon = {
    new:      { icon: addCircle,        color: '#005985'},
    delete:   { icon: closeCircle,      color: '#F52424'},
    confirm:  { icon: checkmarkCircle,  color: '#9BFBB0'}
  };

  function goBack() {
    navigate(-1);
  }

  function handleClick() {
    if (button === 'new') {
      navigate(`${linkNextPage}`);
    } 

    if (button === 'delete') {
      if (deleteFunction && id) {
        deleteFunction(id);
      }
    } 

  }

  const goBackLink = showBack 
    ? <Span onClick={ goBack }>&lt; Voltar</Span>
    : <Span></Span> ;

  return (
    <>
      <Container>
      <Main>
        { goBackLink }
        <Button type='submit' form={form} onClick={handleClick} disabled={disableButton}>
          <Icon color={icon[button].color}>
            <IonIcon icon={icon[button].icon}/>
          </Icon>        
        </Button>
      </Main>
    </Container>
    </>
  );
}

export default Footer;
