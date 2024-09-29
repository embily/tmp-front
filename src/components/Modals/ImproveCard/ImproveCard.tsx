import React from "react";
import {Button} from "../../../elements";
import {ImproveCardStyle} from "./ImproveCard.Styles"
import {connect} from "react-redux";
import {AppStateType} from "../../../store";
import {getPickUpCoins} from "../../../store/wallet/actions";
import {closeModal} from "../../../store/app/actions";
import {CARD} from "../../../types/cards.d";
import {nFormatter} from "../../../common/utils/formatters";
import {WebSocketContextApi} from "../../../types/webSocketTypes";
import useWebSocket from "../../../hooks/useWebSocket";

interface Props {
  closeModal: () => void;
  card: CARD;
}

const ImproveCard: React.FC<Props> = (props: Props) => {
  const {closeModal, card} = props;
  const webSocket: WebSocketContextApi = useWebSocket();
  const {
    buyInventoryItem,
    wallet: {
      points
    }
  } = webSocket;

  const buyCard = (item: CARD) => {
    console.log('item', item);
    if (item.price > points) return;
    buyInventoryItem(item.id, item.nextLevel);
    closeModal();
  }

  return (
    <ImproveCardStyle>
      <span className="improveCard-title">{card.name}</span>
      <div className="improveCard-img__wrap">
        <img
          alt=""
          className="improveCard-img"
          src={card.image}
        />
      </div>
      <span className="improveCard-description">{card.description}</span>
      <div className="improveCard-profit">
        <span className="improveCard-profit__title">Прибыль в час</span>
        <div className="improveCard-profit__value">
          <div className="improveCard-profit__icon">
            <img alt="" src="/img/coin.png"/>
          </div>
          +{nFormatter(card.nextPointsHourlyRate || 0, 1, 0)}
        </div>
      </div>
      <div className="improveCard-actions">
        {
          card.bought ? (
            <Button
              className="improveCard-btn"
              type="button"
              onClick={() => {
                buyCard(card);
              }}
            >
              Улучшить
            </Button>
          ) : (
            <Button
              className="improveCard-btn"
              type="button"
              onClick={() => {
                buyCard(card);
              }}
            >
              Купить
            </Button>
          )
        }

      </div>
    </ImproveCardStyle>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {app} = state;
  return {
    app,
  };
};

export default connect(mapStateToProps, {getPickUpCoins, closeModal})(ImproveCard);
