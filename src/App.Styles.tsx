import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle: any = createGlobalStyle`
  ${normalize}
    // Variables
  :root {
    --default-font: 'Inter', sans-serif;

    --tg-theme-bg-color: #fff;
    --tg-theme-text-color: #0a0a0a;
    --tg-theme-hint-color: #929292;
    --tg-theme-link-color: #207ae4;
    --tg-theme-button-color: #5bc8fb;
    --tg-theme-button-text-color: #fffeec;
    --tg-theme-secondary-bg-color: #f3f2f9;
    --tg-theme-gray: #C8C7CA;
    --border-radius: 2vmin;

    height: 100%;
  }

  body {
    background: var(--tg-theme-secondary-bg-color)!important;
    font-family: var(--default-font)!important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  
  #root {
    height: 100%;
  }

  .App-logo {
    height: 21vmin;
  }

  .App-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .App-wrap {
    padding: 4vmin;
  }

  .App-btn {
    width: 100%;
    
    &__wrap {
      margin-top: auto;
      padding: 2vmin 4vmin 0 4vmin;
      background: var(--tg-theme-secondary-bg-color);
      border-top: 0.5px solid var(--tg-theme-hint-color);
      transform: translateY(100%);
      transition: 0.5s;
      
      &.-showed {
        transform: translateY(0);
      }

      &.-hidden {
        opacity: 0;
      }
    }
  }

  .App-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--tg-theme-bg-color);
    margin-bottom: 8.8vmin;
  }

  h1 {
    color: #000;
    font-size: 4vmin;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 3vmin 0 1.7vmin;
  }

  h2 {
    color: #8E8E92;
    text-align: center;
    font-size: 3vmin;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 0;
  }

  .contentWrapper {
    background: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color) !important;
    border-radius: var(--border-radius);
    margin-bottom: 4vmin;
    padding: 2vmin 4vmin;
    box-sizing: border-box;
    
    .switch {
      display: flex;
      margin: 1vmin 0;
      
      .MuiFormControlLabel-label {
        font-weight: 400;
        font-size: 4vmin;
        line-height: 6vmin;
        color: var(--tg-theme-text-color);
      }
    }

    .line {
      width: calc(100% - 4vmax);
      height: 1px;
      background-color: var(--tg-theme-secondary-bg-color);
      margin: 1vmax 0 1vmax 6vmax;
    }
  }

  .MuiAutocomplete {
    &-popper {
      width: 100% !important;
    }

    &-paper {
      border-radius: var(--border-radius) !important;
      background: var(--tg-theme-bg-color);
      box-shadow: 0 0 1px rgba(12, 26, 75, 0.1), 0 10px 16px rgba(20, 37, 63, 0.06) !important;
      margin-top: 4vmin;
      width: calc(100% - 8vmin);
      max-height: 66vmin;
      margin-left: 4vmin;
    }

    &-listbox {
      padding: 4px 0 !important;
      max-height: 66vmin !important;
      
      .MuiMenuItem-root {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        padding: 10px 11px 10px 14px;

        .flag {
          display: flex;
          align-items: center;

          &-image {
            width: 8vmin;
            height: 8vmin;
            border-radius: 50%;
            margin-right: 5vmin;
          }

          &-text {
            font-weight: 400;
            font-size: 4vmin;
            line-height: 6vmin;
            color: var(--black);
          }
        }
      }
    }
  }
`;
