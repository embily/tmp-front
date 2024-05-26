import React, {FC} from 'react';
import {Icon} from "../elements";
import {Balance, ProgressLine, Energy} from "./Home.Styles";
import Clicker from "../components/Clicker/Clicker";
import {AppStateType} from "../store";
import {connect} from "react-redux";
import {AppReducerState} from "../store/app/reducers";
import {formatNumber} from "../common/utils/formatters";
import {clickerRefill} from "../store/app/actions";

interface Props {
  app: AppReducerState;
  clickerRefill: () => void;
}

const Home: FC<Props> = (props: Props) => {
  const { app: { energy, score }, clickerRefill } = props;

  return (
    <>
      <ProgressLine>
        <span className="progressLine-name">Novice</span>
        <div className="progressLine-wrap">
          <div
            className="progressLine-line"
          />
          <span className="progressLine-caption">{formatNumber(score)}/69,420</span>
        </div>
      </ProgressLine>
      <Balance>
        <Icon name="coin" size="30" />
        <span className="balance-text">{formatNumber(score)}</span>
      </Balance>
      <Clicker />
      <Energy>
        <div className="energy-count">
          <Icon name="lightning" size="30"/>
          <span className="energy-count__text">{energy}/1000</span>
        </div>
        <button className="energy-refill" onClick={() => clickerRefill()}>
          <Icon name="rocket" size="30"/>
        </button>
      </Energy>
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
