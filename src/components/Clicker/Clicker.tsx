import React, {FC, useMemo, useState, useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {animated, useTransition} from '@react-spring/web';
import useWebApp from "../../hooks/useWebApp";
import {WebApp} from "../../types/twa-types";
import {AppStateType} from "../../store";
import {clickerClick} from "../../store/wallet/actions";
import {ClickerContainer, ClickerSparkText} from './Clicker.Styles';
import {AppReducerState} from "../../store/app/reducers";
import {wojak} from '../../assets/images/wojak';
import {ITEM_TYPE, ITEMS_TYPES, RARITY_TYPES} from "../../types/items.d";
import {ItemImg} from "../../pages/Items.Styles";
import {DEFAULT_ENERGY_PER_TAP} from "../../const/app.constants";
import {WalletReducerState} from "../../store/wallet/reducers";

interface Props {
  app: AppReducerState;
  wallet: WalletReducerState;
  clickerClick: () => void;
}

const Clicker: FC<Props> = (props: Props) => {
  const { app: { profile: { dressed } }, wallet: { energy }, clickerClick } = props;
  const webApp: WebApp = useWebApp();
  const [sparks, setSparks] = useState<any[]>([]);
  const timer = useRef<number>();

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    if (sparks.length) {
      timer.current = window.setTimeout(() => {
        removeOldSparks();
      }, 1000)
    }

    return () => {
      clearTimeout(timer.current)
    }
    // eslint-disable-next-line
  }, [sparks.length]);

  const transition = useTransition(sparks, {
    from: {
      opacity: 1,
      marginTop: 0
    },
    enter: { opacity: 0, marginTop: -100},
    trail: 150
  });

  const removeOldSparks = () => {
    const currentTime: number = Date.now();
    const newSparks = [...sparks].filter((spark: any) => {
      return currentTime < (spark.timeStamp + 1000)
    });

    setSparks(newSparks);

    if (newSparks.length) {
      timer.current = window.setTimeout(() => {
        removeOldSparks();
      }, 1000)
    }
  };

  const onTouchEvent = (event: any) => {
    const touch = event.changedTouches[0];
    clickOnClicker({clientX: touch.clientX, clientY: touch.clientY});
  };

  const onTouchStartEvent = (event: any) => {
    event.preventDefault();
  };

  const clickOnClicker = ({clientX, clientY}: {clientX: number, clientY: number}) => {
    if (energy >= DEFAULT_ENERGY_PER_TAP) {
      webApp.HapticFeedback?.impactOccurred("rigid");
      webApp.HapticFeedback?.impactOccurred("heavy");
      clickerClick();

      const newItem = {
        text: `+${DEFAULT_ENERGY_PER_TAP}`,
        x: clientX,
        y: clientY,
        timeStamp: Date.now()
      };

      setSparks((prevSparks) => ([...prevSparks, newItem]));
    }
  };

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

  return (
    <ClickerContainer>
      <button
        type="button"
        className="clicker"
        onTouchEnd={(event: any) => onTouchEvent(event)}
        onTouchStart={(event: any) => onTouchStartEvent(event)}
      >
        <div className="clicker-img__wrap">
          {
            dressedObj.wojak ? (
              <>
                <ItemImg className="clicker-img" icon={dressedObj.weapon.image}/>
                <ItemImg className="clicker-img" icon={dressedObj.wojak.image}/>
                <ItemImg className="clicker-img" icon={dressedObj.headdress.image}/>
                <ItemImg className="clicker-img" icon={dressedObj.pants.image}/>
                <ItemImg className="clicker-img" icon={dressedObj.outerwear.image}/>
                <ItemImg className="clicker-img" icon={dressedObj.shoes.image}/>
              </>
            ) : null
          }
        </div>

        <div
          aria-hidden
          className="clicker-sparks"
        >
          {transition(
            (style, item) =>
              item ? (
                <animated.div
                  style={{
                    ...style,
                    position: "absolute",
                    top: item.y,
                    left: item.x
                  }}
                >
                  <ClickerSparkText>{item.text}</ClickerSparkText>
                </animated.div>
              ) : null
          )}
        </div>
      </button>
    </ClickerContainer>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {app, wallet} = state;
  return {
    app,
    wallet,
  };
};

export default connect(mapStateToProps, {clickerClick})(Clicker);
