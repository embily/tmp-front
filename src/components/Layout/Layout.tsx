import React from 'react';
import Menu from "../Menu";
import { Container, Content } from './Layout.Styles';
import Header from "../Header";
import { WebApp } from "../../types/twa-types";
import useWebApp from "../../hooks/useWebApp";

interface Props {
  children?: any;
}

const Layout: React.FC<Props> = (props: Props) => {
  const {
    children,
  } = props;
  const webApp: WebApp = useWebApp();

  if (!webApp.isExpanded) {
    webApp.expand();
  }

  return (
    <Container className='main-container'>
      <Header />
      <Content className="content">
        {children}
      </Content>
      <Menu />
    </Container>
  );
};

export default Layout;
