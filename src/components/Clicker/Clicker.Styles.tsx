import styled from 'styled-components';

export const ClickerContainer: any = styled.div`
  .clicker {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &-img {
      position: absolute;
      &__wrap {
        position: relative;
        width: 89vw;
        height: 70vh;
        transform: none;
      }
    }
  }
`;

