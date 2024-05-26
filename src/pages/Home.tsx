import React, { FC } from 'react';
import {Icon} from "../elements";
import {Balance, ProgressLine, Energy} from "./Home.Styles";
import Clicker from "../components/Clicker/Clicker";

const Home: FC = () => {
  return (
    <>
      <ProgressLine>
        <span className="progressLine-name">Novice</span>
        <div className="progressLine-wrap">
          <div
            className="progressLine-line"
          />
          <span className="progressLine-caption">13,666/69,420</span>
        </div>
      </ProgressLine>
      <Balance>
        <Icon name="coin" size="30" />
        <span className="balance-text">13,666</span>
      </Balance>
      <Clicker />
      <Energy>
        <div className="energy-count">
          <Icon name="lightning" size="30"/>
          <span className="energy-count__text">1000/1000</span>
        </div>
        <button className="energy-refill">
          <Icon name="rocket" size="30"/>
        </button>
      </Energy>
    </>
  );
};

export default Home;
