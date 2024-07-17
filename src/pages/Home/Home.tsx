import React, {FC, useEffect, useState} from 'react';
import {Icon} from "../../elements";
import {Balance, ProgressLine, Energy, Counters, Lootbox, CenteredContent} from "./Home.Styles";
import Clicker from "../../components/Clicker/Clicker";
import {AppStateType} from "../../store";
import {connect} from "react-redux";
import {formatNumber} from "../../common/utils/formatters";
import {WalletReducerState} from "../../store/wallet/reducers";
import {closeModal, openModal} from "../../store/app/actions";
import {PickUpCoins} from "../../components/Modals";
import Header from "../../components/Header";
import { ReactComponent as CoinSVG } from "../../assets/images/coin.svg";
import useStore from "../../hooks/useStore";

interface Props {
  wallet: WalletReducerState;
  openModal: (payload: any) => void;
  closeModal: () => void;
}

const Home: FC<Props> = (props: Props) => {
  const {
    wallet: { energy, score, pickupAmount },
    openModal,
    closeModal
  } = props;
  const store = useStore();
  console.log('store', store);

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
          <div className="counters-item">
            <span className="counters-item__name">Прибыль за тап</span>
            <div className="counters-item__value">
              <div className="counters-item__icon">
                <CoinSVG />
              </div>
              <span className="counters-item__value_text">+3</span>
            </div>
          </div>
          <div className="counters-item">
            <span className="counters-item__name -purple">Монет до ранга</span>
            <div className="counters-item__value">
              <span className="counters-item__value_text">{formatNumber(100000 - score, 0, 0).replace(/,/g, ' ')}</span>
            </div>
          </div>
          <div className="counters-item">
            <span className="counters-item__name -green">Прибыль в час</span>
            <div className="counters-item__value">
              <div className="counters-item__icon">
                <CoinSVG />
              </div>
              <span className="counters-item__value_text">+1234</span>
              <Icon className="counters-item__info" name="info" size="12"/>
            </div>
          </div>
        </div>
      </Counters>
      <Balance>
        <div className="balance-icon">
          <CoinSVG />
        </div>
        <span className="balance-text">{formatNumber(score, 0, 0).replace(/,/g, ' ')}</span>
      </Balance>
      <ProgressLine>
        <div className="progressLine-annotation">
          <span className="progressLine-annotation__name">Мем-Фермер</span>
          <div>
            <span className="progressLine-annotation__name -gray">Ранг</span>
            <span className="progressLine-annotation__name">3/10</span>
          </div>
        </div>
        <div className="progressLine-wrap">
          <div className="progressLine-line"/>
          <span className="progressLine-caption">
            <div className="progressLine-caption__icon">
              <CoinSVG />
            </div>
            <span className="progressLine-caption__text">
              {formatNumber(score, 0, 0).replace(/,/g, ' ')}/{formatNumber(100000, 0, 0).replace(/,/g, ' ')}
            </span>
          </span>
        </div>
      </ProgressLine>
      <CenteredContent>
        <Clicker/>
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
      </CenteredContent>
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
