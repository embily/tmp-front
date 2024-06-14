import React, {FC} from 'react';
import {Icon} from "../../elements";
import {Balance, ProgressLine, Energy, Counters, Lootbox} from "./Home.Styles";
import Clicker from "../../components/Clicker/Clicker";
import {AppStateType} from "../../store";
import {connect} from "react-redux";
import {AppReducerState} from "../../store/app/reducers";
import {formatNumber} from "../../common/utils/formatters";
import {clickerRefill} from "../../store/app/actions";

interface Props {
  app: AppReducerState;
}

const Home: FC<Props> = (props: Props) => {
  const { app: { energy, score } } = props;

  return (
    <>
      <Counters>
        <div className="counters-wrapper">
          <div className="counters-item">
            <span className="counters-item__name">Прибыль за тап</span>
            <div className="counters-item__value">
              <Icon className="counters-item__icon" name="coin" size="16"/>
              <span className="counters-item__value_text">+3</span>
            </div>
          </div>
          <div className="counters-item">
            <span className="counters-item__name -purple">Монет до ранга</span>
            <div className="counters-item__value">
              <span className="counters-item__value_text">{formatNumber(100000 - score, 0, 0).replace(/,/g,' ')}</span>
            </div>
          </div>
          <div className="counters-item">
            <span className="counters-item__name -green">Прибыль в час</span>
            <div className="counters-item__value">
              <Icon className="counters-item__icon" name="coin" size="16"/>
              <span className="counters-item__value_text">+1234</span>
              <Icon className="counters-item__info" name="info" size="12"/>
            </div>
          </div>
        </div>
      </Counters>
      <Balance>
        <Icon className="balance-icon" />
        <span className="balance-text">{formatNumber(score, 0, 0).replace(/,/g,' ')}</span>
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
            <Icon className="progressLine-caption__icon" name="coin" size="9"/>
            <span className="progressLine-caption__text">
              {formatNumber(score, 0, 0).replace(/,/g,' ')}/{formatNumber(100000, 0, 0).replace(/,/g,' ')}
            </span>
          </span>
        </div>
      </ProgressLine>
      <Clicker/>
      <Energy>
        <div className="energy-count">
          <div className="energy-count__icon" />
          <span className="energy-count__text">{energy}/1000</span>
        </div>
        {/*<button className="energy-refill" onClick={() => clickerRefill()}>*/}
        {/*  <Icon name="rocket" size="30"/>*/}
        {/*</button>*/}
      </Energy>
      <Lootbox>
        <div className="lootbox-btn">
          <div className="lootbox-icon" />
        </div>
      </Lootbox>
    </>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const { app } = state;
  return {
    app,
  };
};
export default connect(mapStateToProps, {clickerRefill})(Home);
