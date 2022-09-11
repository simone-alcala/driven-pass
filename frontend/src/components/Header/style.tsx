import styled from 'styled-components';

export const Container = styled.header `
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Main = styled.div `
  width: 800px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const Div = styled.div `
  display: flex;
  justify-content: left;
  align-items: center;  
  cursor: pointer;
`;

export const Icon = styled.div `
  ion-icon {
    font-size: 75px;
    color: #005985;
    cursor: pointer;
  }
`;

export const Title = styled.div `
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%;
  min-height: 45px;
  background-color: #005985;
`;

export const Subtitle = styled.div `
  width: 800px;
  font-size: 18px;
  color: #FFF;
  font-family: 'Recursive', sans-serif;
  padding-left: 10px;
`;
