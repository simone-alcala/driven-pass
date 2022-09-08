import styled from 'styled-components';

interface IProps {
  color: string;
}

export const Container = styled.footer `
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

export const Main = styled.div `
  width: 800px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const Icon = styled.div<IProps> `
  ion-icon {
    font-size: 60px;
    color: ${props => props.color};
    cursor: pointer;
  }
`;

export const Span = styled.span `
  font-size: 18px;
  font-family: 'Recursive', sans-serif;
  color: #000;
  text-decoration: underline;
  cursor: pointer;
`;