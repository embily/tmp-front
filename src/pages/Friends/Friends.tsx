import React, {FC} from 'react';
import {Button, Icon} from "../../elements";
import {
  FriendsWrap,
} from "./Friends.Styles";
import {nFormatter} from "../../common/utils/formatters";
import { ReactComponent as CoinSVG } from "../../assets/images/coin.svg";

interface Props {
}

const Friends: FC<Props> = () => {
  return (
    <FriendsWrap>
      <div className="friends-wrapper">
        <div className="friends-title__wrap">
          <span className="friends-title">Пригласите своих друзей!</span>
        </div>
        <div className="friends-description__wrap">
          <span className="friends-description">Чем больше ваши друзья зарабатывают, тем больше ваш бонус!</span>
        </div>
        <div className="friends-info">
          <div className="friends-info__btn">
            <span className="friends-info__btn_title">Пригласить друга</span>
            <div className="friends-info__btn_value">
              <div className="friends-info__btn__icon">
                <CoinSVG/>
              </div>
              +5000
            </div>
          </div>
          <div className="friends-info__btn">
            <span className="friends-info__btn_title">Пригласить друга с телеграм Premium!</span>
            <div className="friends-info__btn_value">
              <div className="friends-info__btn__icon">
                <CoinSVG/>
              </div>
              +25000
            </div>
          </div>
          <div className="friends-list">
            <div className="friends-list__description">
              <span className="friends-list__description_title">Список друзей (4)</span>
              <div className="friends-list__description_side">
                <span className="friends-list__description_text">Как работают бонусы</span>
                <Icon className="friends-list__description_icon" name="info" size="12"/>
              </div>
            </div>
            <div className="friends-list__wrap">
              <div className="friends-friend">
                <div className="friends-friend__avatar">
                  {/*<img*/}
                  {/*  alt=""*/}
                  {/*  className="friends-friend__avatar_img"*/}
                  {/*  src={friend.image}*/}
                  {/*/>*/}
                </div>
                <div className="friends-friend__rows">
                  <div className="friends-friend__rows_side">
                    <span className="friends-friend__title">Doge Dogeson</span>
                    <div className="friends-friend__info">
                      <div className="friends-friend__role_wrap">
                        <span className="friends-friend__role">Холоп</span>
                      </div>
                      <div className="friends-friend__balance">
                        <div className="friends-friend__balance_icon">
                          <CoinSVG/>
                        </div>
                        +{nFormatter(5000, 1, 3)}
                      </div>
                    </div>
                  </div>
                  <div className="friends-friend__rows_side">
                    <div className="friends-friend__profit">
                      <span className="friends-friend__profit_title">Ваш бонус в час</span>
                      <div className="friends-friend__profit_value">
                        <div className="friends-friend__profit__icon">
                          <CoinSVG/>
                        </div>
                        +{nFormatter(500, 1, 3)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="friends-actions">
              <Button
                className="friends-actions__btn"
                type="button"
                onClick={() => {
                  console.log('share');
                }}
              >
                Пригласить друга
              </Button>
              <Button
                className="friends-actions__btn -copy"
                type="button"
                onClick={() => {
                  console.log('copy');
                }}
              >
                <Icon className="friends-actions__btn_icon" name="copy" size="12"/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </FriendsWrap>
  );
};

export default Friends;
