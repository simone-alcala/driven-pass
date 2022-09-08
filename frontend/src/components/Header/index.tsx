import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

import { UserContext, UserContextType } from './../../contexts/UserContext';

import Logo from './../../components/Logo';
import { Container, Main, Div, Icon, Title, Subtitle }  from './style';

type Props = {
  title?: string;
}

function Header(props: Props) {
  const { title } = props;
  const navigate = useNavigate();
  const { signOut } = useContext(UserContext) as UserContextType;

  function handleClickLogOut(){
    signOut();
    navigate('/');
  }

  return (    
    <Container>
      <Main>
        <Div><Logo size='small'/></Div>
        <Icon onClick={handleClickLogOut}><IonIcon icon={logOut}/></Icon>
      </Main>
      <Title><Subtitle>{title}</Subtitle></Title>
    </Container>
  );
}

export default Header;


