import React from 'react';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';

import { Item, Icon, Title } from './style';

type Props = {
  icon?: string;
  title?: string;
  link?: string;
}

function PageItem(props: Props) {
  const { icon, title, link } = props;
  return (
    <Item>
      <Link to={`/${link}`}><Icon><IonIcon icon={icon}/></Icon></Link>
      <Link to={`/${link}`}><Title>{title}</Title></Link>
    </Item>
  );
}

export default PageItem;
