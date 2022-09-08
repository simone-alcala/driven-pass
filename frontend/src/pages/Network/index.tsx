import React from 'react';
import { wifi } from 'ionicons/icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main } from './style';
import PageItem from '../../components/PageItem';

function Cards() {
  return (
    <>
      <Header title='Senhas de Wi-fi'/>
      <Container>
        <Main>
          <PageItem icon={wifi} title='Wi-fi 1' link='networks/1'/>
          <PageItem icon={wifi} title='Wi-fi 2' link='networks/2'/> 
        </Main>
      </Container>
      <Footer button='new' showBack={true} linkNextPage='/teste'/>
    </>
  );
}

export default Cards;
