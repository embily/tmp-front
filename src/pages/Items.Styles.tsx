import styled from 'styled-components';

export const ItemsControl: any = styled.div`
  border-bottom: #000;
  .items {
    &-control {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 12vmin;
      gap: 11px;

      &__types {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex: 2;
        gap: 11px;
        overflow: hidden;
        overflow-x: scroll;
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
      
      &__select {
        flex: 1;
      }
    }
  }
`;

export const ItemsWrap: any = styled.div`
  height: calc(100% - 12vmin);
  .items {
    &-wrap {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
    }
  }
  
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw / 3);
    height: calc(100vw / 3);
    border: 1px solid #000;

    &.-hidden {
      display: none;
    }

    &.-selected {
      border: 1px solid var(--accent-green);
    }
  }
`;

export const ItemImg: any = styled.div<{ icon?: string; }>`
  height: 100%;
  width: 100%;
  background: url(data:image/svg+xml;base64,${props => props.icon ? props.icon : ''});
  background-repeat: no-repeat;
  background-size: contain;
`;
