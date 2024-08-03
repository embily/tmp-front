import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import Menu from "../Menu";
import {AppStateType} from "../../store";
import {AppReducerState} from "../../store/app/reducers";
import {clickerRestoreEnergy} from "../../store/wallet/actions";
import { Container, Content } from './Layout.Styles';
import {DEFAULT_BASE_ENERGY} from "../../const/app.constants";
import { Modal } from '../../elements';
import {WalletReducerState} from "../../store/wallet/reducers";
import {PIZZA_STATUS_TYPES, WebSocketContextApi} from "../../types/webSocketTypes.d";
import useWebSocket from "../../hooks/useWebSocket";
import Loading from "../Loading";

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
  const webSocket: WebSocketContextApi = useWebSocket();
  const {pizzaState} = webSocket;
  const timer = useRef<number>();

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


  // return pizzaState === PIZZA_STATUS_TYPES.USER_AUTHORIZED ? (
  return (
    <Container className='main-container'>
      {/*<div className='main-scrolled'>*/}
      {/*  <Content className="content">*/}
      {/*    {children}*/}
      {/*  </Content>*/}
      {/*</div>*/}
      {/*<Menu />*/}

      {/*<Modal*/}
      {/*  opened={modal?.opened}*/}
      {/*  closeModal={() => modal?.closeModal()}*/}
      {/*  className={modal?.className}*/}
      {/*  hasCloseBtn={modal?.hasCloseBtn}*/}
      {/*  children={modal?.content(modal?.contentParams)}*/}
      {/*/>*/}
    </Container>
  // ) : (
  //   <Loading />
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
