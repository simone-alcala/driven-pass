import styled from 'styled-components';

export const Main = styled.main `
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Recursive', sans-serif;
  font-size: 18px;
  color: #222222;
`;

export const Form = styled.form `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

export const Input = styled.input `
  width: 280px;
  height: 40px;
  border-radius: 5px;
  background-color: #FFF;
  border: 3px solid #005985;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 10px;
  font-size: 18px;
`;

export const Label = styled.label `
  color: black;
  margin: 10px 0 ;
`;

export const Button = styled.button `
  width: 280px;
  height: 40px;  
  background: #9BFBB0;
  border: 3px solid #9BFBB0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  cursor: pointer;
  margin-top: 35px;
  font-size: 18px;
`;

export const Hr = styled.hr `
  width: 300px;
  color: #DBDBDB;
  margin-top: 40px;
  margin-bottom: 35px;
`;

export const Span = styled.span `
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`;