import styled from 'styled-components';

export const HeaderContainer: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 17px 9px 17px;
  
  .header {
    &-left {}
    &-right {
      &__square {
        width: 111px;
        height: 32px;
        background-color: #171417;
        border-radius: 15px;
      }
    }
  }
  
  .user-info {
    align-items: center;
    display: inline-flex;
    flex: 1 1 auto;
    justify-content: center;
    
    &__avatar {
      background-color: #1c1f24;
      flex: 0 0 32px;
      height: 32px;
      margin-right: 12px;
      overflow: hidden;
      width: 32px;
      
      &_img {
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        width: 100%;
      }
    }
    
    &__name {
      color: var(--tg-theme-text-color);
      cursor: default;
      font-size: 14px;
      letter-spacing: -0.30000001192092896px;
      font-weight: 500;
      line-height: 14px;
    }
  }
`;
