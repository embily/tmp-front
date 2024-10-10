import styled from "styled-components";

export const InventoryCardStyle: any = styled.div`
  display: flex;
  flex-direction: column;
  
  .inventoryCard {
    &-title {
      display: block;
      font-size: 5.3vmin;
      font-weight: 600;
      line-height: 5.3vmin;
      letter-spacing: -0.30000001192092896px;
      color: #FFFFFF;
      text-align: center;
    }
    
    &-img {
      width: 100%;
      height: auto;
      
      &__wrap {
        display: block;
        margin: 0 auto;
        margin-top: 9.5vmin;
        width: 30vmin;
        height: 30vmin;
        border-radius: 2vmin;
        overflow: hidden;
      }
    }
    
    &-description {
      display: block;
      margin: 0 auto;
      margin-top: 3vmin;
      font-size: 2.65vmin;
      font-weight: 400;
      line-height: 3vmin;
      letter-spacing: -0.15000000596046448px;
      color: #FFFFFF;
      text-align: center;
    }
    
    &-profits {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4vmin;
      gap: 16vmin;
    }

    &-profit {
      display: flex;
      flex-direction: column;

      &__title {
        font-size: 2.75vmin;
        font-weight: 400;
        line-height: 2.5vmin;
        letter-spacing: -0.15000000596046448px;
        color: #9747FF;
        text-align: center;
      }

      &__value {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 0.75vmin;
        font-size: 3vmin;
        font-weight: 600;
        line-height: 3vmin;
        letter-spacing: -0.30000001192092896px;
        color: #FFFFFF;
      }

      &__icon {
        margin-right: 1vmin;
        width: 4.25vmin;
        height: 4.25vmin;

        & img {
          width: 100%;
          height: auto;
        }
      }
    }
    
    &-actions {
      display: flex;
      margin-top: 3vmin;
    }

    &-btn {
      flex: 1;
    }
  }
`;
