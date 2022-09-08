import styled from 'styled-components';

interface IProps{
  size?: string;
}

export const Title = styled.h1<IProps> `
  font-size: 36px;
  color: #005985;
  font-family: 'Righteous';
`;

export const Icon = styled.div<IProps>  `
  ion-icon {
    font-size: ${props => props.size === 'large' ? '150px' : '60px'};
    color: #005985;
  }
`;