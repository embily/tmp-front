import React, {FC, useEffect, useState} from 'react';
import {
  Balance,
  ProgressLine,
  Energy,
  Counters,
  Lootbox,
  CenteredContent,
  BottomContent,
  MultiTap, HomeContainer
} from "./Home.Styles";
import Clicker from "../../components/Clicker/Clicker";
import {AppStateType} from "../../store";
import {connect} from "react-redux";
import {formatNumber} from "../../common/utils/formatters";
import {WalletReducerState} from "../../store/wallet/reducers";
import {closeModal, openModal} from "../../store/app/actions";
import {PickUpCoins} from "../../components/Modals";
import Header from "../../components/Header";
import {WebSocketContextApi} from "../../types/webSocketTypes";
import useWebSocket from "../../hooks/useWebSocket";
import {USER_TYPE_BY_RANK, USER_TYPES} from "../../types/friends.d";
import {useTranslation} from "react-i18next";
import {Icon} from "../../elements";

interface Props {
  wallet: WalletReducerState;
  openModal: (payload: any) => void;
  closeModal: () => void;
}

const Home: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const {
    wallet: { pickupAmount },
    openModal,
    closeModal
  } = props;
  const webSocket: WebSocketContextApi = useWebSocket();
  const {
    wallet: {
      points,
      rank,
      totalPointsHourlyRate,
      rankThreshold,
      energyThreshold,
      tapThreshold,
      availableEnergy
    }
  } = webSocket;

  const [pickUpModalShowed, setPickUpModalShowed] = useState<boolean>(false);

  // eslint-disable-next-line
  const handleOpenModal = (payload: any) => {
    if (!openModal) return
    openModal(payload)
  };

  // eslint-disable-next-line
  const modalPickUpCoins = () => (
    <div className="modal-content">
      <div className="modal-pickUpCoins">
        <PickUpCoins title="Пока вас не было, вы заработали" amount={pickupAmount}/>
      </div>
    </div>
  );

  useEffect(() => {
    if (pickupAmount && !pickUpModalShowed) {
      handleOpenModal({
        closeModal: closeModal,
        className: "modal modalPickUpCoins",
        content: modalPickUpCoins
      });
      setPickUpModalShowed(true);
    }
  }, [closeModal, handleOpenModal, modalPickUpCoins, pickUpModalShowed, pickupAmount]);

  return (
    <HomeContainer>
      <Header />
      <Counters>
        <div className="counters-wrapper">
          <ProgressLine progress={(points / rankThreshold) * 100} pointslength={points.toString().length + rankThreshold.toString().length}>
            <div className="progressLine-container">
              <div className="progressLine-annotation">
                <span className="progressLine-annotation__name">{t(`friends.types.${rank ? USER_TYPE_BY_RANK[rank] : USER_TYPES.SLAVE}`)}</span>
                <div>
                  <span className="progressLine-annotation__name -gray">Ранг</span>
                  <span className="progressLine-annotation__name">{rank}/10</span>
                </div>
              </div>
              <div className="progressLine-wrap">
                <div className="progressLine-line"/>
                <span className="progressLine-caption">
                <div className="progressLine-caption__img_wrap">
                  <img className="progressLine-caption__img" src="/img/coin.png" alt="" />
                </div>
                <span className="progressLine-caption__text">
                  {formatNumber(points, 0, 0).replace(/,/g, ' ')}/{formatNumber(rankThreshold, 0, 0).replace(/,/g, ' ')}
                </span>
              </span>
              </div>
            </div>
            <div className="progressLine-shit" />
          </ProgressLine>
          <div className="counters-bg">
          <div className="counters-item">
              <span className="counters-item__name -purple">Прибыль в час</span>
              <div className="counters-item__value">
                <div className="counters-item__img_wrap">
                  <img className="counters-item__img" src="/img/coin.png" alt=""/>
                </div>
                <span className="counters-item__value_text">+{totalPointsHourlyRate}</span>
                <Icon className="counters-item__info" name="info" size="12" />
              </div>
            </div>
          </div>
        </div>
      </Counters>
      <Balance balancelength={points.toString().length}>
        <div className="balance-img__wrap">
          <img className="balance-img" src="/img/coin.png" alt=""/>
        </div>
        <span className="balance-text">
          {formatNumber(points, 0, 0).replace(/,/g, ' ')}
        </span>
      </Balance>
      <CenteredContent>
        <Clicker/>
      </CenteredContent>
      <BottomContent>
        <Energy>
          <div className="energy-count">
            <div className="energy-count__icon"/>
            <span className="energy-count__text">{availableEnergy}/{energyThreshold}</span>
          </div>
          {/*<button className="energy-refill" onClick={() => clickerRefill()}>*/}
          {/*  <Icon name="rocket" size="30"/>*/}
          {/*</button>*/}
        </Energy>
        <Lootbox>
          <div className="lootbox-btn">
            <div className="lootbox-icon"/>
          </div>
        </Lootbox>
        <MultiTap>
          <div className="multitap-icon__wrap">
            <img className="multitap-icon" src="/img/multitap.png" alt="mem"/>
          </div>
          <div className="multitap-value">
            <div className="multitap-value__img_wrap">
              <img className="multitap-value__img" src="/img/coin.png" alt=""/>
            </div>
            <span className="multitap-value__text">+{tapThreshold}</span>
          </div>
        </MultiTap>
      </BottomContent>
    </HomeContainer>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {wallet} = state;
  return {
    wallet,
  };
};
export default connect(mapStateToProps, {openModal, closeModal})(Home);
