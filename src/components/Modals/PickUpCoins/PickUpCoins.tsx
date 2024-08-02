import React from "react";
import {Button} from "../../../elements";
import {PickUpCoinsStyle} from "./PickUpCoins.Styles";
import {connect} from "react-redux";
import {AppStateType} from "../../../store";
import {getPickUpCoins} from "../../../store/wallet/actions";
import {closeModal} from "../../../store/app/actions";

interface Props {
  closeModal: () => void;
  getPickUpCoins: (payload: any) => void;
  title: string;
  amount: number;
}

const PickUpCoins: React.FC<Props> = (props: Props) => {
  const {closeModal, getPickUpCoins} = props;

  return (
    <PickUpCoinsStyle>
      <span className="pickUpCoins-title">Пока вас не было, вы заработали</span>
      <div className="pickUpCoins-icon">
        <img src="/img/coin.png"/>
      </div>
      <span className="pickUpCoins-amount">25 000</span>
      <div className="pickUpCoins-actions">
        <Button
          className="pickUpCoins-btn"
          type="button"
          onClick={() => {
            closeModal();
            getPickUpCoins({amount: 25000});
          }}
        >
          Забрать мои монеты
        </Button>
      </div>
    </PickUpCoinsStyle>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {app} = state;
  return {
    app,
  };
};

export default connect(mapStateToProps, {getPickUpCoins, closeModal})(PickUpCoins);
