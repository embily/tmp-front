import React from "react";
import {Button} from "../../../elements";
import {PickUpCoinsStyle} from "./PickUpDailyReward.Styles";
import {connect} from "react-redux";
import {closeModal} from "../../../store/app/actions";
import {REWARD, REWARD_TYPES} from "../../../types/tasks.d";
import {nFormatter} from "../../../common/utils/formatters";

interface Props {
  closeModal: () => void;
  reward: REWARD;
}

const PickUpDailyReward: React.FC<Props> = (props: Props) => {
  const {closeModal, reward} = props;

  return (
    <PickUpCoinsStyle>
      <span className="pickUpCoins-title">{reward.name}</span>
      <div className="pickUpCoins-icon">
        {
          (reward.type === REWARD_TYPES.COINS) ? (
            <img alt="" src="/img/coin.png"/>
          ) : (
            <img
              className="dailyReward-reward__img"
              src={`data:image/svg+xml;base64,${reward.icon}`}
              alt=""
            />
          )
        }
      </div>
      <span className="pickUpCoins-amount">{nFormatter(reward.amount, 0, 100000).replace(/,/g, ' ')}</span>
      <div className="pickUpCoins-actions">
        <Button
          className="pickUpCoins-btn"
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          Забрать мои монеты
        </Button>
      </div>
    </PickUpCoinsStyle>
  );
};

export default connect(null, {closeModal})(PickUpDailyReward);
