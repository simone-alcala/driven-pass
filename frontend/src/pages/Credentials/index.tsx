import React from 'react';
import { logIn } from 'ionicons/icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main } from './style';
import PageItem from '../../components/PageItem';

function Cards() {
  return (
    <>
      <Header title='Credenciais'/>
      <Container>
        <Main>
          <PageItem icon={logIn} title='Credencial 1' link='credentials/1'/>
          <PageItem icon={logIn} title='Credencial 2' link='credentials/2'/> 
        </Main>
      </Container>
      <Footer button='new' showBack={true} linkNextPage='/teste'/>
    </>
  );
}

export default Cards;
