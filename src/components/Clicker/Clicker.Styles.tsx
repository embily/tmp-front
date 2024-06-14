import styled from 'styled-components';

export const ClickerContainer: any = styled.div`
  padding: 0 48px;
  margin-top: 12px;
  
  .clicker {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 242px;
    max-width: 100%;
    height: 342px;
    margin: 0 auto;
    
    &-img {
      position: absolute;
      &__wrap {
        position: relative;
        width: 100%;
        height: 100%;
        transform: none;
        border-radius: 12px;
        background: #171417;
      }
    }
  }
`;

