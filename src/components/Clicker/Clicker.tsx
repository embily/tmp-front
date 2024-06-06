import React, {FC} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../store";
import {clickerClick} from "../../store/app/actions";
import {ClickerContainer} from './Clicker.Styles';
import {AppReducerState} from "../../store/app/reducers";
import vojak from '../../assets/images/vojak.svg';

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
        <img
          draggable="false"
          className="clicker-img"
          src={vojak}
          alt="vojak"
        />
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
