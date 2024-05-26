import styled from 'styled-components';

export const MenuContainer: any = styled.div`
  display: flex;
  margin-top: auto;
  
  .menu {
    &-list {
      height: 100%;
      display: flex;
      flex-grow: 1;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      
      &__link {
        display: block;
        width: 100%;
        height: 100%;
        padding: 15px 0;
        text-decoration: none;
        
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
            &__text {
              color: var(--accent-green);
            }
            &__link {
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
