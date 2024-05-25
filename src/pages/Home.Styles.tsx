import styled from 'styled-components';

export const ProgressLine: any = styled.div`
  display: flex;
  flex-direction: column;;
  
  .progressLine {
    &-name {
      text-align: center;
    }
    &-wrap {
      width: 50%;
      height: 24px;
      border-radius: 24px;
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
  }
`;

export const Maintanence: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
