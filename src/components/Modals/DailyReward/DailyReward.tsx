import React from "react";
import {Button} from "../../../elements";
import {DailyRewardStyle} from "./DailyReward.Styles"
import {DAILY_BONUS, REWARD, REWARD_TYPES} from "../../../types/tasks.d";
import {connect} from "react-redux";
import {openModal, closeModal} from "../../../store/app/actions";
import {PickUpDailyReward} from "../index";
import {nFormatter} from "../../../common/utils/formatters";
import {WebSocketContextApi} from "../../../types/webSocketTypes.d";
import useWebSocket from "../../../hooks/useWebSocket";
interface Props {
  openModal: (payload: any) => void;
  closeModal: () => void;
}

const DailyReward: React.FC<Props> = (props: Props) => {
  const {openModal, closeModal} = props;
  const webSocket: WebSocketContextApi = useWebSocket();
  const {dailyBonuses, wallet, } = webSocket;


  const handleOpenModal = (payload: any) => {
    if (!openModal) return
    openModal(payload);
  };

  const handleCloseModal = () => {
    if (!closeModal) return
    closeModal();
  };

  const modalPickUpDailyReward = (reward: DAILY_BONUS) => (
    <div className="modal-content">
      <div className="modal-pickUpDailyReward">
        <PickUpDailyReward reward={reward} />
      </div>
    </div>
  );

  return (
    <DailyRewardStyle>
      <div className="dailyReward-img__wrap">
        <img className="dailyReward-img" src="/img/coin.png" alt=""/>
      </div>
      <span className="dailyReward-title">Ежедневная Награда</span>
      <span className="dailyReward-description">Забирай награду, заходя в игру каждый день без пропусков. Пропустишь день- пропустишь награду НАВСЕГДА!</span>

      <div className="dailyReward-rewards">
        {
          dailyBonuses.bonuses.map((bonus: DAILY_BONUS) => {
            if (bonus.type === REWARD_TYPES.COINS) {
              return (
                <Button
                  className={`dailyReward-reward ${bonus.day <= (wallet.lastBonusedDay || 0) ? '-completed' : ''} ${bonus.day === 7 ? '-big' : ''}`}
                  type="button"
                  key={`reward-${bonus.day}`}
                  onClick={() => handleOpenModal({
                    closeModal: handleCloseModal,
                    className: "modal modalPickUpDailyReward",
                    content: modalPickUpDailyReward,
                    contentParams: bonus
                  })}
                  disabled={!bonus.claimable}
                >
                  <div className="dailyReward-reward__wrap">
                    {
                      bonus.day === 7 ? (
                        <div className="dailyReward-reward__reward">
                           <span className="dailyReward-reward__title">День {bonus.day}</span>
                          <img className="dailyReward-reward__img" src="/img/coin.png" alt=""/>
                        </div>
                      ) : (
                        <>
                          <span className="dailyReward-reward__title">День {bonus.day}</span>
                          <img className="dailyReward-reward__img" src="/img/coin.png" alt=""/>
                          <span className="dailyReward-reward__amount">{nFormatter(bonus.amount, 0, 100000).replace(/,/g, ' ')}</span>
                        </>
                      )
                    }
                  </div>
                </Button>
              )
            }

            // if (reward.type === REWARD_TYPES.CLOTHING) {
            //   return (
            //     <Button
            //       className={`dailyReward-reward ${reward.completed ? '-completed' : ''} ${index === 6 ? '-big' : ''}`}
            //       type="button"
            //       onClick={() => handleOpenModal({
            //         closeModal: handleCloseModal,
            //         className: "modal modalPickUpDailyReward",
            //         content: modalPickUpDailyReward,
            //         contentParams: reward
            //       })}
            //     >
            //       <div className="dailyReward-reward__wrap">
            //         <div className="dailyReward-reward__reward">
            //           <span className="dailyReward-reward__title">{reward.name}</span>
            //           <img
            //             className="dailyReward-reward__img"
            //             src={`data:image/svg+xml;base64,${reward.icon}`}
            //             alt=""
            //           />
            //         </div>
            //       </div>
            //     </Button>
            //   )
            // }
            return '';
          })
        }
      </div>
    </DailyRewardStyle>
  );
};

export default connect(null, {openModal, closeModal})(DailyReward);
