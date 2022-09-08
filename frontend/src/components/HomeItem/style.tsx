
import styled from 'styled-components';

export const Item = styled.div `
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;

export const First = styled.div `
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: left;
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

export const Quantity = styled.div `
  min-width: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  background-color: #005985;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
`;