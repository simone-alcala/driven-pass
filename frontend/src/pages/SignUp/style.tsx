import styled from 'styled-components';

interface IProps{
  color?: string;
  margin?: string;
}

export const Main = styled.main `
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Recursive', sans-serif;
  font-size: 18px;
  color: #000;
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
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Button = styled.button<IProps> `
  width: 280px;
  height: 40px;  
  background: ${props => props.color};
  border: 3px solid ${props => props.color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  cursor: pointer;
  margin-top: ${props => props.margin};
  font-size: 18px;
`;
