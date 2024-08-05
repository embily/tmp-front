import React from 'react';
import {connect} from "react-redux";
import Menu from "../Menu";
import {AppStateType} from "../../store";
import {AppReducerState} from "../../store/app/reducers";
import {clickerRestoreEnergy} from "../../store/wallet/actions";
import { Container, Content } from './Layout.Styles';
import { Modal } from '../../elements';
import {WalletReducerState} from "../../store/wallet/reducers";
import {PIZZA_STATUS_TYPES} from "../../types/webSocketTypes.d";
import Loading from "../Loading";
import useStore from "../../hooks/useStore";

interface Props {
  children?: any;
  app: AppReducerState;
  wallet: WalletReducerState;
  clickerRestoreEnergy: () => void;
}

const Layout: React.FC<Props> = (props: Props) => {
  const {
    children,
    app: { modal },
  } = props;
  const store = useStore();
  const { pizzaState } = store[0];


  return pizzaState === PIZZA_STATUS_TYPES.WALLET_RECEIVED ? (
    <>
      <Container className='main-scrolled'>
        <Content className="content">
          {children}
        </Content>
      </Container>
      <Menu />

      <Modal
        opened={modal?.opened}
        closeModal={() => modal?.closeModal()}
        className={modal?.className}
        hasCloseBtn={modal?.hasCloseBtn}
        children={modal?.content(modal?.contentParams)}
      />
    </>
  ) : (
    <Loading />
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
