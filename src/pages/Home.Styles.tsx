import styled from 'styled-components';

export const ProgressLine: any = styled.div`
  display: flex;
  flex-direction: column;;
  
  .progressLine {
    &-name {
      text-align: center;
    }
    &-wrap {
      position: relative;
      width: 50%;
      height: 18px;
      border-radius: 18px;
      border: 1px solid #000;
      margin: 0 auto;
    }

    &-line {
      height: 100%;
      width: 50%;
      border-radius: 24px;
      background: var(--background-drower);
      box-shadow: 0 0 6px #000;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    
    &-caption {
      display: block;
      width: 100%;
      position: absolute;
      top: 0;
      text-align: center;
      color: var(--accent-green);
      line-height: 1;
    }
  }
`;

export const Balance: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  
  .balance {
    &-text {
      font-size: 18px;
      margin-left: 5px;
    }
  }
`;

export const Energy: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
  
  .energy {
    &-count {
      display: flex;
      align-items: center;
      justify-content: center;
      
      &__text {
        
      }
    }
    
    &-refill {
      background: transparent;
      border: 0;
      cursor: pointer;
    }
  }
`;

export const Maintanence: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
