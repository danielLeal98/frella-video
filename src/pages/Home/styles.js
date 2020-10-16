import styled, { css } from 'styled-components';

export const DivHome = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  display: flex; /* establish flex container */
  flex-direction: column; /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: center; /* center items horizontally, in this case */
`;
export const DivInput = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  background: white;
  margin: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Title = styled.h2`
  color: black;
  font-size: 22px;
`;

export const Input = styled.input`
  background: grey;
  color: white;
  width: 100%;
  max-width: 400px;
  height: 45px;
  font-size: 16px;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--secondary);
  padding: 12px 12px;
  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;
  margin: 10px;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + span {
    transform: scale(0.6) translateY(-10px);
  }
  ${({ hasValue }) =>
    hasValue &&
    css`
      &:not([type='color']) + span {
        transform: scale(0.6) translateY(-10px);
      }
    `}
`;

export const ButtonLogin = styled.button`
  width: auto;
  box-sizing: border-box;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  transition: opacity 0.3s;
  margin: 10px;

  &:hover {
    opacity: 0.7;
  }
  padding: 20px;
`;
