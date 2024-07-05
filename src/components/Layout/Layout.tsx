import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import Menu from "../Menu";
import {AppStateType} from "../../store";
import {AppReducerState} from "../../store/app/reducers";
import {clickerRestoreEnergy} from "../../store/wallet/actions";
import { Container, Content } from './Layout.Styles';
import { WebApp } from "../../types/twa-types";
import useWebApp from "../../hooks/useWebApp";
import {DEFAULT_BASE_ENERGY} from "../../const/app.constants";
import { Modal } from '../../elements';
import {WalletReducerState} from "../../store/wallet/reducers";

interface Props {
  children?: any;
  app: AppReducerState;
  wallet: WalletReducerState;
  clickerRestoreEnergy: () => void;
}

const Layout: React.FC<Props> = (props: Props) => {
  const {
    children,
    wallet: { energy },
    app: { modal },
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
        <Content className="content">
          {children}
        </Content>
      </div>
      <Menu />

      <Modal
        opened={modal?.opened}
        closeModal={() => modal?.closeModal()}
        className={modal?.className}
        hasCloseBtn={modal?.hasCloseBtn}
        children={modal?.content(modal?.contentParams)}
      />
    </Container>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const { app, wallet } = state;
  return {
    app,
    wallet,
  };
};

export default connect(mapStateToProps, {clickerRestoreEnergy})(Layout);
