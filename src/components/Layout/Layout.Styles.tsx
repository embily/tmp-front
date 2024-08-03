import styled from 'styled-components';

export const Container: any = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  .main {
    &-scrolled {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      height: calc(100% - 21vmin);
    }
  }
`;

export const Content: any = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;
