import styled from 'styled-components';

export const LoadingStyles: any = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    svg {
      width: 100vw;
      height: auto;
      animation: rotate 1s linear infinite;
    }    
  }
  
  .state {
    color: #ffffff;
  }
`;
