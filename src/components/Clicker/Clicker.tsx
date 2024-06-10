import React, {FC, useMemo} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../store";
import {clickerClick} from "../../store/app/actions";
import {ClickerContainer} from './Clicker.Styles';
import {AppReducerState} from "../../store/app/reducers";
import {wojak} from '../../assets/images/wojak';
import {ITEM_TYPE, ITEMS_TYPES, RARITY_TYPES} from "../../types/items.d";
import {ItemImg} from "../../pages/Items.Styles";

interface Props {
  app: AppReducerState;
  clickerClick: () => void;
}

const Clicker: FC<Props> = (props: Props) => {
  const { app: { energy, profile: { dressed } }, clickerClick } = props;

  const dressedObj = useMemo(
    () => {
      const result = dressed.reduce((prev: { [key: string]: ITEM_TYPE }, curr: ITEM_TYPE) => {
        let {type} = curr;
        return {...prev, [type]: curr};
      }, {
          wojak: {
            icon: wojak,
            image: wojak,
            type: ITEMS_TYPES.WOJAK,
            rarity: RARITY_TYPES.BASE,
          }
        }
      );

      return result
    },
    [dressed]
  );

  const clickOnClicker = () => {
    if (energy > 0) {
      clickerClick();
    }
  };

  return (
    <ClickerContainer>
      <div className="clicker" onClick={() => clickOnClicker()}>
        <div className="clicker-img__wrap">
          {
            dressedObj.wojak ? (
              <>
                <ItemImg className="clicker-img" icon={dressedObj.weapon.image} />
                <ItemImg className="clicker-img" icon={dressedObj.wojak.image} />
                <ItemImg className="clicker-img" icon={dressedObj.headdress.image} />
                <ItemImg className="clicker-img" icon={dressedObj.pants.image} />
                <ItemImg className="clicker-img" icon={dressedObj.outerwear.image} />
                <ItemImg className="clicker-img" icon={dressedObj.shoes.image} />
              </>
            ) : null
          }
        </div>
      </div>
    </ClickerContainer>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const { app } = state;
  return {
    app,
  };
};

export default connect(mapStateToProps, {clickerClick})(Clicker);
