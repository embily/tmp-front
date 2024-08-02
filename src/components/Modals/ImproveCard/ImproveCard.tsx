import React from "react";
import {Button} from "../../../elements";
import {ImproveCardStyle} from "./ImproveCard.Styles"
import {connect} from "react-redux";
import {AppStateType} from "../../../store";
import {getPickUpCoins} from "../../../store/wallet/actions";
import {closeModal} from "../../../store/app/actions";
import {CARD} from "../../../types/cards.d";
import {nFormatter} from "../../../common/utils/formatters";

interface Props {
  closeModal: () => void;
  card: CARD;
}

const ImproveCard: React.FC<Props> = (props: Props) => {
  const {closeModal, card} = props;

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
            <img src="/img/coin.png"/>
          </div>
          +{nFormatter(card.profitPerHour, 1, 0)}
        </div>
      </div>
      <div className="improveCard-actions">
        <Button
          className="improveCard-btn"
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          Улучшить
        </Button>
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
