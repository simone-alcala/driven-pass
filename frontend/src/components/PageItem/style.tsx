
import styled from 'styled-components';

export const Item = styled.div `
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 18px;
`;

export const Title = styled.span`
  font-size: 18px;
  color: #222222;
  font-family: 'Recursive', sans-serif;
  cursor: pointer;
`;

export const Icon = styled.div `
  width: 65px;
  ion-icon {
    font-size: 50px;
    color: #005985;  
  }
`;
