import React, {FC, useMemo, useState} from 'react';
import {
  Balance,
  Counters, CardTypesControl, CardsWrap,
} from "./Upgrade.Styles";
import {AppStateType} from "../../store";
import {connect} from "react-redux";
import {formatNumber, nFormatter} from "../../common/utils/formatters";
import {WalletReducerState} from "../../store/wallet/reducers";
import {closeModal, openModal} from "../../store/app/actions";
import {ImproveCard} from "../../components/Modals";
import { ReactComponent as CoinSVG } from "../../assets/images/coin.svg";
import { ReactComponent as InfoSVG } from "../../assets/images/info.svg";
import {CARD, CARD_TYPES} from "../../types/cards.d";
import {cardTypesList, cardsMock} from "../../const/mocks.constants";
import {useTranslation} from "react-i18next";

interface Props {
  wallet: WalletReducerState;
  openModal: (payload: any) => void;
  closeModal: () => void;
}

const Upgrade: FC<Props> = (props: Props) => {
  const {
    wallet: { score },
    openModal,
    closeModal
  } = props;
  const { t } = useTranslation();

  const [filterParams, setFilterParams] = useState({
    cardType: CARD_TYPES.BUILDING,
  })

  const setCardType = (value: CARD_TYPES) => {
    setFilterParams(prev => ({
      ...prev,
      cardType: value
    }))
  };

  const visibilityCards: CARD[] = useMemo(
    () => {
      const result: CARD[] = cardsMock.filter((item: CARD) => {
          return filterParams.cardType === item.type;
        }
      );

      return result
    },
    [filterParams.cardType]
  );

  // eslint-disable-next-line
  const handleOpenModal = (payload: any) => {
    if (!openModal) return
    openModal(payload);
  };

  const handleCloseModal = () => {
    if (!closeModal) return
    closeModal();
  };

  const modalImproveCard = (card: CARD) => (
    <div className="modal-content">
      <div className="modal-improveCard">
        <ImproveCard card={card}/>
      </div>
    </div>
  );

  return (
    <>
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
            <div className="counters-item__value -text">
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
              <div className="counters-item__info">
                <InfoSVG />
              </div>
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
      <CardTypesControl>
        <div className="cards-control">
          <div className="cards-control__types">
            {
              cardTypesList.map((cardType: CARD_TYPES) => (
                <button
                  key={`btn-card-control-${cardType}`}
                  onClick={() => setCardType(cardType)}
                  className={`cards-control__btn ${filterParams.cardType === cardType ? '-active' : ''}`}
                  type="button"
                  tabIndex={-1}
                >
                  {t(`cards.types.${cardType}`)}
                </button>
              ))
            }
          </div>
        </div>
      </CardTypesControl>
      <CardsWrap>
        {
          visibilityCards.map((card: CARD, index: number) => (
            <div
              key={`card-${index + 1}`}
              className={`card`}
              onClick={() => handleOpenModal({
                closeModal: handleCloseModal,
                className: "modal modalImproveCard",
                content: modalImproveCard,
                contentParams: card
              })}
            >
              <div className="card-info">
                <div className="card-info__avatar">
                  <img
                    alt=""
                    className="card-info__avatar_img"
                    src={card.image}
                  />
                </div>
                <div className="card-info__rows">
                  <span className="card-info__title">{card.name}</span>
                  <span className="card-info__level">Уровень {card.level}</span>
                  <div className="card-info__profit">
                    <span className="card-info__profit_title">Прибыль в час</span>
                    <div className="card-info__profit_value">
                      <div className="card-info__profit__icon">
                        <CoinSVG />
                      </div>
                      +{nFormatter(card.profitPerHour, 1, 0)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-btn">
                <div className="card-btn__icon">
                  <CoinSVG />
                </div>
                {nFormatter(card.price, 2, 100000)}
              </div>
            </div>
          ))
        }
      </CardsWrap>
    </>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {wallet} = state;
  return {
    wallet,
  };
};
export default connect(mapStateToProps, {openModal, closeModal})(Upgrade);
