import styled from 'styled-components';

export const Counters: any = styled.div`
  .counters {
    &-wrapper {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      gap: 2vmin;
    }

    &-item {
      flex: 1;
      background: #171417;
      border-radius: 1vmin;
      text-align: center;
      padding: 0.5vmin 0;
      padding-bottom: 1.5vmin;
      position: relative;

      &__name {
        display: inline-block;
        font-size: 3vmin;
        font-weight: 400;
        line-height: 3vmin;
        letter-spacing: -0.15000000596046448px;
        color: #FD9103;

        &.-purple {
          color: #9747FF;
          margin-bottom: 2.5vmin;
        }

        &.-green {
          color: #53ED0A;

        }
      }

      &__value {
        display: flex;
        align-items: center;
        justify-content: center;

        &_text {
          font-size: 3vmin;
          font-weight: 600;
          line-height: 3vmin;
          letter-spacing: -0.30000001192092896px;
          color: #ffffff;
        }
      }

      &__icon {
        margin-right: 1vmin;
        width: 5vmin;
        height: 5vmin;

        & svg {
          width: 100%;
          height: auto;
        }
      }

      &__info {
        position: absolute;
        right: 2vmin;
      }
    }
  }
`;
export const Balance: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vmin 0 0;
  padding: 0 4.5vmin;
  
  
  .balance {
    &-icon {
      width: 14vmin;
      height: 14vmin;
      
      & svg {
        width: 100%;
        height: auto;
      }
    }
    &-text {
      margin-left: 2vmin;
      font-size: 8vmin;
      font-weight: 800;
      line-height: 8vmin;
      letter-spacing: -0.30000001192092896px;
      color: #ffffff;
    }
  }
`;

export const CardTypesControl: any = styled.div`
  border-bottom: #000;
  .cards {
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

export const CardsWrap: any = styled.div`
  border-bottom: #000;
  .cards {
    .card {
      display: flex;
      flex-direction: column;
      &-info {
        display: flex;
        flex-direction: row;
        
        &__avatar {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
`;
