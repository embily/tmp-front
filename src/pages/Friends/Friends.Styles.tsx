import styled from 'styled-components';

export const FriendsWrap: any = styled.div`
  
  .friends {
    &-wrapper {
      padding: 0 4.5vmin;
      
    }

    &-title {
      &__wrap {
      }
    }

    &-description {
      &__wrap {
      }
    }

    &-info {
      &__btn {
        display: flex;
        flex-direction: column;
        margin-top: 2vmin;

        &_title {
          font-size: 2.7vmin;
          font-weight: 400;
          line-height: 2.7vmin;
          letter-spacing: -0.15000000596046448px;
          color: #FFFFFF;
        }

        &_value {
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

          & svg {
            width: 100%;
            height: auto;
          }
        }
      }
    }

    &-list {
      &__description {
        &_title {
        }

        &_text {
        }
        
        &_icon {
        }
      }
      
      &__wrap {
        overflow: hidden;
        overflow-y: scroll;
      }
    }

    &-friend {
      &__avatar {
        &_img {
        }
      }

      &__rows {
        display: flex;
        flex-direction: row;
        
        &_side {
          display: flex;
          flex-direction: column;
        }
      }

      &__title {
        
      }

      &__desc {

      }

      &__balance {
        &_icon {
          margin-right: 2vmin;
          width: 1vmin;
          height: 1vmin;

          & svg {
            width: 100%;
            height: auto;
          }
        }
      }

      &__profit {
        display: flex;
        flex-direction: column;
        margin-top: 2vmin;

        &_title {
          font-size: 2.7vmin;
          font-weight: 400;
          line-height: 2.7vmin;
          letter-spacing: -0.15000000596046448px;
          color: #FFFFFF;
        }

        &_value {
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

          & svg {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    
    &-actions {
      &__btn {
        flex: 8;
        background: #9747FF;

        
        &.-copy {
          flex: 1;
        }
      }
    }
  }
`;
