import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addCircle, closeCircle, checkmarkCircle } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

import { Container, Main, Span, Icon } from './style';

type Props = {
  button: 'new' | 'delete' | 'confirm';
  showBack?: boolean;
  linkNextPage: string;
}

function Footer(props: Props) {
  const { button, showBack, linkNextPage } = props;
  const navigate = useNavigate();

  const icon = {
    new:      { icon: addCircle,        color: '#005985'},
    delete:   { icon: closeCircle,      color: '#F52424'},
    confirm:  { icon: checkmarkCircle,  color: '#9BFBB0'}
  };

  function goBack() {
    navigate(-1);
  }

  const goBackLink = showBack 
    ? <Span onClick={ goBack }>&lt; Voltar</Span>
    : <Span></Span> ;

  return (
    <>
      <Container>
      <Main>
        { goBackLink }
        <Link to={`/${linkNextPage}`}>
          <Icon color={icon[button].color}>
            <IonIcon icon={icon[button].icon}/>
          </Icon>
        </Link>
      </Main>
    </Container>
    </>
  );
}

export default Footer;
