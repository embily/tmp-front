import React from 'react';
import { ClickerContainer } from './Clicker.Styles';

interface Props {
}

const Clicker: React.FC<Props> = (props: Props) => {

  const clickOnClicker = () => {
    console.log('click');
  };

  return (
    <ClickerContainer>
      <div className="clicker" onClick={() => clickOnClicker()}>
        <img draggable="false" className="clicker-img" src="/img//clicker.png" alt="cp"/>
      </div>
    </ClickerContainer>
  );
};

export default Clicker;
