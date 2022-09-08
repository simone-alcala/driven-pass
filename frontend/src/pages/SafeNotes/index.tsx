import React from 'react';
import { pencil } from 'ionicons/icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Main } from './style';
import PageItem from '../../components/PageItem';

function Cards() {
  return (
    <>
      <Header title='Notas seguras'/>
      <Container>
        <Main>
          <PageItem icon={pencil} title='Nota segura 1' link='safenotes/1'/>
          <PageItem icon={pencil} title='Nota segura 2' link='safenotes/2'/> 
        </Main>
      </Container>
      <Footer button='new' showBack={true} linkNextPage='/teste'/>
    </>
  );
}

export default Cards;
