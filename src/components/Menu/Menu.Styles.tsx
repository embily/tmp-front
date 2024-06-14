import styled from 'styled-components';

export const MenuContainer: any = styled.div`
  display: flex;
  position: sticky;
  bottom: 0;
  margin-top: auto;
  padding: 7px 16px;
  
  .menu {
    &-list {
      height: 100%;
      display: flex;
      flex-grow: 1;
      flex-wrap: wrap;
      margin: 0;
      padding: 5px;
      background: #272A2F;
      border-radius: 15px;

      &__link {
        display: block;
        width: 100%;
        height: 29px;
        padding: 4px;
        text-decoration: none;
        border-radius: 10px;
        border: 1px solid #272A2F;
        
        &:hover {
          opacity: 0.8;
        }
      }
      
      &__text {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: var(--tg-theme-text-color);
      }

      &__item {
        flex: 1;
        text-align: center;
        overflow: hidden;
        
        &.-active {
          & .menu-list {
            &__link {
              border-color: #FD9003;
              &:hover {
                opacity: 1;
              }
            } 
          }
        }
      }
    }
  }
`;
