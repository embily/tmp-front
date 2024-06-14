import React from 'react';
import Menu from "../Menu";
import { Container, Content } from './Layout.Styles';
import Header from "../Header";

interface Props {
  children?: any;
}

const Layout: React.FC<Props> = (props: Props) => {
  const {
    children,
  } = props;

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
