import styled from 'styled-components';

export const MenuContainer: any = styled.div`
  display: flex;
  position: sticky;
  bottom: 0;
  margin-top: auto;
  padding: 2vmin 4.5vmin;
  height: 19vmin;
  
  .menu {
    &-list {
      height: 100%;
      display: flex;
      flex-grow: 1;
      flex-wrap: wrap;
      margin: 0;
      padding: 1.5vmin;
      background: #272A2F;
      border-radius: 4vmin;

      &__link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 12vmin;
        padding: 4px;
        text-decoration: none;
        border-radius: 4vmin;
        
        &:hover {
          opacity: 0.8;
        }
      }

      &__icon {
        fill: #707579;
      }

      &__item {
        flex: 1;
        text-align: center;
        overflow: hidden;
        
        &.-active {
          & .menu-list {
            &__link {
              background: #1C1F24;
              &:hover {
                opacity: 1;
              }
            }

            &__icon {
              fill: #9747FF;
            }
          }
        }
      }
    }
  }
`;
