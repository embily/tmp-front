import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle: any = createGlobalStyle`
  ${normalize}
    // Variables
  :root {
    --tg-color-scheme: light;
    --tg-theme-bg-color: #ffffff;
    --tg-theme-button-color: #3390ec;
    --tg-theme-button-text-color: #ffffff;
    --tg-theme-hint-color: #707579;
    --tg-theme-link-color: #00488f;
    --tg-theme-secondary-bg-color: #f4f4f5;
    --tg-theme-text-color: #000000;
    --tg-theme-header-bg-color: #ffffff;
    --tg-theme-accent-text-color: #3390ec;
    --tg-theme-section-bg-color: #ffffff;
    --tg-theme-section-header-text-color: #3390ec;
    --tg-theme-subtitle-text-color: #707579;
    --tg-theme-destructive-text-color: #df3f40;
    --tg-viewport-height: 100vh;
    --tg-viewport-stable-height: 100vh;

    --default-font: 'Inter', sans-serif;
    --accent-green: #28E0B9;
    --accent-red: #D22929;
    --accent-gold: #FFCE68;
    --text-primary: #FFF;
    --text-secondary: #9D99A9;
    --text-disabled: rgba(255, 255, 255, .3);
    --background-default: rgba(117, 122, 167, .1);
    --background-pressed: rgba(117, 122, 167, .16);
    --background-disabled: rgba(117, 122, 167, .08);
    --background-drower: rgba(25, 27, 38, .96);
    --stroke-default: rgba(117, 122, 167, .2);
    --stroke-pressed: rgba(146, 153, 214, .4);
    --button-primary-default: linear-gradient(180deg, #FCE099 0%, #EFAC46 14.5%, #E59A2A 45.5%, #DC8707 100%);
    --button-primary-pressed: linear-gradient(180deg, #EFAC46 0%, #E59A2A 45.5%, #DC8707 100%);
    --button-secondary-default: linear-gradient(180deg, #9E3FD9 0%, #762DA5 12%, #571B8E 41%, #31204E 100%);
    --button-secondary-pressed: linear-gradient(180deg, #8533BA 0%, #641EA3 41%, #3F2863 100%);
    --drower-elevate: 0px -8px 20px 0px rgba(0, 0, 0, .4);
    --loader-main: linear-gradient(199deg, #FBBA40 8.93%, #7028CD 92.21%);
    font-family: 'Inter', sans-serif;
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    isolation: isolate;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: var(--text-primary);
    margin: 0;
    display: flex;
    place-items: center;
    align-items: flex-start;
    min-width: 320px;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
  }
  
  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
