import styled from 'styled-components';

export const ItemsControl: any = styled.div`
  border-bottom: #000;
  .items {
    &-control {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &__types {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap: 11px;
      }

      &__btn {
        padding: 10px 0;
        background: transparent;
        border: 0;
        box-shadow: none;

        &.-active {
          color: var(--accent-green);
        }
      }
    }
  }
`;

export const ItemsWrap: any = styled.div`
  .items {
    &-wrap {
      display: flex;
      flex-wrap: wrap;
    }
  }
  
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw / 3);
    height: calc(100vw / 3);
    border: 1px solid #000;
    
    &-img {
      height: 100%;
    }
    
    &.-hidden {
      display: none;
    }
  }
`;
