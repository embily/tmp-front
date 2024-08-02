import styled from 'styled-components';

export const LoadingStyles: any = styled.div`
  width: 100%;
  height: 100%;
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
