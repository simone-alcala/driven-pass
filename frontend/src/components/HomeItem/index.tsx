import React from 'react';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';

import { Item, First, Icon, Title, Quantity } from './style';

type Props = {
  icon?: string;
  link?: string;
  title?: string;
  quantity?: string;
}

function HomeItem(props: Props) {
  const { icon, link, title, quantity } = props;
  return (
    <Item>
      <First>
        <Link to={`/${link}`}>
          <Icon>
            <IonIcon icon={icon}/>
          </Icon>
        </Link>
        <Link to={`/${link}`}>
          <Title>
            {title}
          </Title>
        </Link>
      </First>
      <Link to={`/${link}`}>
        <Quantity>
          {quantity}
        </Quantity>
      </Link>
    </Item>
  );
}

export default HomeItem;
