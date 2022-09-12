import styled from 'styled-components';

export const Container = styled.section `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  padding-top: 150px;
`;

export const Main = styled.main `
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
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
  width: 280px;
  color: #222222;
  margin: 10px 0 ;
  text-align: left;
`;

export const Radio = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadioOption = styled.input`
  width: 90px;
  height: 25px;
`;

export const RadioLabel = styled.label`
  color: #222222;
  margin: 10px 0 ;
  text-align: center;
  width: 90px;
`;