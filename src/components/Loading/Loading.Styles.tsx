import styled from 'styled-components';

export const LoadingStyles: any = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 180px;
    height: 180px;
    animation: rotate 1s linear infinite;
  }
`;
