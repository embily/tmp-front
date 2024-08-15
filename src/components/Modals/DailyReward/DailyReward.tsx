import React from "react";
import {Button} from "../../../elements";
import {DailyRewardStyle} from "./DailyReward.Styles"
import {rewardsMock} from "../../../const/mocks.constants";
import {REWARD, REWARD_TYPES} from "../../../types/tasks.d";
interface Props {
  closeModal: () => void;
}

const DailyReward: React.FC<Props> = (props: Props) => {
  const {closeModal} = props;

  const getReward = (reward: REWARD) => {
    console.log('reward', reward);
    closeModal()
  };

  return (
    <DailyRewardStyle>
      <div className="dailyReward-img__wrap">
        <img className="dailyReward-img" src="/img/coin.png" alt=""/>
      </div>
      <span className="dailyReward-title">Ежедневная Награда</span>
      <span className="dailyReward-description">Забирай награду, заходя в игру каждый день без пропусков. Пропустишь день- пропустишь награду НАВСЕГДА!</span>

      <div className="dailyReward-rewards">
        {
          rewardsMock.map((reward: REWARD, index: number) => {
            if (reward.type === REWARD_TYPES.COINS) {
              return (
                <Button
                  className={`dailyReward-reward ${reward.completed ? '-completed' : ''} ${index === 6 ? '-big' : ''}`}
                  type="button"
                  key={`reward-${index}`}
                  onClick={() => {
                    getReward(reward);
                  }}
                >
                  <div className="dailyReward-reward__wrap">
                    <span className="dailyReward-reward__title">{reward.name}</span>
                    <img className="dailyReward-reward__img" src="/img/coin.png" alt=""/>
                    <span className="dailyReward-reward__amount">{reward.amount}</span>
                  </div>
                </Button>
              )
            }

            if (reward.type === REWARD_TYPES.CLOTHING) {
              return (
                <Button
                  className={`dailyReward-reward ${reward.completed ? '-completed' : ''} ${index === 6 ? '-big' : ''}`}
                  type="button"
                  onClick={() => {
                    getReward(reward);
                  }}
                >
                  <div className="dailyReward-reward__wrap">
                    <div className="dailyReward-reward__reward">
                      <span className="dailyReward-reward__title">{reward.name}</span>
                      <img
                        className="dailyReward-reward__img"
                        src={`data:image/svg+xml;base64,${reward.icon}`}
                        alt=""
                      />
                    </div>
                  </div>
                </Button>
              )
            }
            return '';
          })
        }
      </div>
    </DailyRewardStyle>
  );
};

export default DailyReward;
