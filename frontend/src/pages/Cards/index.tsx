import React from 'react';
import { wallet } from 'ionicons/icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main } from './style';
import PageItem from '../../components/PageItem';

function Cards() {
  return (
    <>
      <Header title='Cartões'/>
      <Container>
        <Main>
          <PageItem icon={wallet} title='Cartão 1' link='cards/1'/>
          <PageItem icon={wallet} title='Cartão 2' link='cards/2'/> 
        </Main>
      </Container>
      <Footer button='new' showBack={true} linkNextPage='/teste'/>
    </>
  );
}

export default Cards;
