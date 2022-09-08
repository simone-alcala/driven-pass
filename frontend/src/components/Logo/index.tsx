import React from 'react';
import { lockClosed } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

import { Icon, Title } from './style';

type Props = {
  size: 'large' | 'small';
}

function Logo(props: Props) {
  const { size } = props;
  return (
    <>     
      <Icon size={size}><IonIcon icon={lockClosed}/></Icon>
      <Title size={size}>DrivenPass</Title>     
    </>
  );
}

export default Logo;
