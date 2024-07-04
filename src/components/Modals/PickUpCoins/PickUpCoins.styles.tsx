import styled from "styled-components";

export const PickUpCoinsStyle: any = styled.div`
  display: flex;
  flex-direction: column;
  
  .pickUpCoins {
    &-title {
      display: block;
      font-size: 3.5vmin;
      font-weight: 500;
      line-height: 3.5vmin;
      letter-spacing: -0.30000001192092896px;
      color: #FFFFFF;
      text-align: center;
    }
    
    &-icon {
      display: block;
      margin: 0 auto;
      margin-top: 11vmin;
      width: 30vmin;
      height: 30vmin;
      
      & svg {
        width: 100%;
        height: auto;
      }
    }
    
    &-amount {
      display: block;
      font-size: 8.5vmin;
      font-weight: 800;
      line-height: 8.5vmin;
      letter-spacing: -0.30000001192092896px;
      color: #FFFFFF;
      text-align: center;
    }
    
    &-actions {
      display: flex;
      margin-top: 9vmin;
    }

    &-btn {
      flex: 1;
    }
  }
`;
