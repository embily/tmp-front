import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import Menu from "../Menu";
import {AppStateType} from "../../store";
import {AppReducerState} from "../../store/app/reducers";
import {clickerRestoreEnergy} from "../../store/app/actions";
import { Container, Content } from './Layout.Styles';
import Header from "../Header";
import { WebApp } from "../../types/twa-types";
import useWebApp from "../../hooks/useWebApp";
import {DEFAULT_BASE_ENERGY} from "../../const/app.constants";

interface Props {
  children?: any;
  app: AppReducerState;
  clickerRestoreEnergy: () => void;
}

const Layout: React.FC<Props> = (props: Props) => {
  const {
    children,
    app: { energy },
    clickerRestoreEnergy
  } = props;
  const webApp: WebApp = useWebApp();
  const timer = useRef<number>();

  if (!webApp.isExpanded) {
    webApp.expand();
  }

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    if (energy < DEFAULT_BASE_ENERGY) {
      timer.current = window.setTimeout(() => {
        clickerRestoreEnergy();
      }, 1000)
    }

    return () => {
      clearTimeout(timer.current)
    }
  }, [clickerRestoreEnergy, energy, timer])


  return (
    <Container className='main-container'>
      <div className='main-scrolled'>
        <Header />
        <Content className="content">
          {children}
        </Content>
      </div>
      <Menu />
    </Container>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const { app } = state;
  return {
    app,
  };
};

export default connect(mapStateToProps, {clickerRestoreEnergy})(Layout);
