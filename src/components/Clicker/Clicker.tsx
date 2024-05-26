import React, {FC} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../store";
import {clickerClick} from "../../store/app/actions";
import {ClickerContainer} from './Clicker.Styles';
import {AppReducerState} from "../../store/app/reducers";

interface Props {
  app: AppReducerState;
  clickerClick: () => void;
}

const Clicker: FC<Props> = (props: Props) => {
  const { app: { energy }, clickerClick } = props;

  const clickOnClicker = () => {
    if (energy > 0) {
      clickerClick();
    }
  };

  return (
    <ClickerContainer>
      <div className="clicker" onClick={() => clickOnClicker()}>
        <img draggable="false" className="clicker-img" src="/img//clicker.png" alt="cp"/>
      </div>
    </ClickerContainer>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const { app } = state;
  return {
    app,
  };
};

export default connect(mapStateToProps, {clickerClick})(Clicker);
