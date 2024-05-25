import React from 'react';
import Menu from "../Menu";
import { Container, Content } from './Layout.Styles';

interface Props {
  children?: any;
}

const Layout: React.FC<Props> = (props: Props) => {
  const {
    children,
  } = props;

  return (
    <Container className='main-container'>
      <Content className="content">
        {children}
      </Content>
      <Menu />
    </Container>
  );
};

export default Layout;
