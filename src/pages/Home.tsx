import React, { FC } from 'react';
import {ProgressLine} from "./Home.Styles";

const Home: FC = () => {
  return (
    <>
      <ProgressLine>
        <span className="progressLine-name">Novice</span>
        <div className="progressLine-wrap">
          <div
            className="progressLine-line"
          />
        </div>
      </ProgressLine>
    </>
  );
};

export default Home;
