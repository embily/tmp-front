import React from 'react';
import { ReactComponent as LoadingSVG } from "../../assets/images/loading.svg";
import { LoadingStyles } from './Loading.Styles';

const Loading: React.FC = () => {
  return (
    <LoadingStyles>
      <div className="image">
        <LoadingSVG/>
      </div>
    </LoadingStyles>
  );
};

export default Loading;
