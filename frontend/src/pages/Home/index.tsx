import React from 'react';
import { logIn, pencil, wallet, wifi } from 'ionicons/icons';

import Header from '../../components/Header';
import HomeItem from '../../components/HomeItem';
import { Container, Main } from './style';

/*
    font-family: 'Recursive', sans-serif;
    font-family: 'Righteous', cursive;
*/

function Home() {
  return (
    <>
      <Header title='Minhas senhas'/>
      <Container>
        <Main>
          <HomeItem icon={logIn} link='credentials' title='Credenciais' quantity='0' />
          <HomeItem icon={pencil} link='safenotes' title='Notas seguras' quantity='0' />
          <HomeItem icon={wallet} link='cards' title='Cartões' quantity='0' />
          <HomeItem icon={wifi} link='networks' title='Senhas de Wi-fi' quantity='0' />
        </Main>
      </Container>
    </>
  );
}

export default Home;


