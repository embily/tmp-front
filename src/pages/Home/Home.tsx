import React, {FC, useEffect, useState} from 'react';
import {
  Balance,
  ProgressLine,
  Energy,
  Counters,
  Lootbox,
  CenteredContent,
  BottomContent,
  MultiTap
} from "./Home.Styles";
import Clicker from "../../components/Clicker/Clicker";
import {AppStateType} from "../../store";
import {connect} from "react-redux";
import {formatNumber} from "../../common/utils/formatters";
import {WalletReducerState} from "../../store/wallet/reducers";
import {closeModal, openModal} from "../../store/app/actions";
import {PickUpCoins} from "../../components/Modals";
import Header from "../../components/Header";
import { ReactComponent as CoinSVG } from "../../assets/images/coin.svg";
import { ReactComponent as InfoSVG } from "../../assets/images/info.svg";
import {WebSocketContextApi} from "../../types/webSocketTypes";
import useWebSocket from "../../hooks/useWebSocket";

interface Props {
  wallet: WalletReducerState;
  openModal: (payload: any) => void;
  closeModal: () => void;
}

const Home: FC<Props> = (props: Props) => {
  const {
    wallet: { energy, pickupAmount },
    openModal,
    closeModal
  } = props;
  const webSocket: WebSocketContextApi = useWebSocket();
  const { wallet: { points, rank, pointsHourlyRate, rankThreshold} } = webSocket;

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
    <>
      <Header />
      <Counters>
        <div className="counters-wrapper">
          <ProgressLine progress={(points / rankThreshold) * 100}>
            <div className="progressLine-container">
              <div className="progressLine-annotation">
                <span className="progressLine-annotation__name">Мем-Фермер</span>
                <div>
                  <span className="progressLine-annotation__name -gray">Ранг</span>
                  <span className="progressLine-annotation__name">{rank}/10</span>
                </div>
              </div>
              <div className="progressLine-wrap">
                <div className="progressLine-line"/>
                <span className="progressLine-caption">
                <div className="progressLine-caption__icon">
                  <CoinSVG/>
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
                <div className="counters-item__icon">
                  <CoinSVG/>
                </div>
                <span className="counters-item__value_text">+{pointsHourlyRate}</span>
                <div className="counters-item__info">
                  <InfoSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Counters>
      <Balance>
      <div className="balance-icon">
          <CoinSVG />
        </div>
        <span className="balance-text">{formatNumber(points, 0, 0).replace(/,/g, ' ')}</span>
      </Balance>
      <CenteredContent>
        <Clicker/>
      </CenteredContent>
      <BottomContent>
        <Energy>
          <div className="energy-count">
            <div className="energy-count__icon"/>
            <span className="energy-count__text">{energy}/1000</span>
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
            <div className="multitap-value__icon">
              <CoinSVG/>
            </div>
            <span className="multitap-value__text">+3</span>
          </div>
        </MultiTap>
      </BottomContent>
    </>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {wallet} = state;
  return {
    wallet,
  };
};
export default connect(mapStateToProps, {openModal, closeModal})(Home);
