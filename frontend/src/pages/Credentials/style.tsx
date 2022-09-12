import styled from 'styled-components';

export const Container = styled.section `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Recursive', sans-serif;
  font-size: 18px;
  color: #222222;
  margin-bottom: 80px;
  padding-top: 150px;
`;

export const Main = styled.main `
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.span `
  width: 280px;
  text-align: left;
  font-weight: 700;
  margin-bottom: 5px;
`;