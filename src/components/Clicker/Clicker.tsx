import React, {FC, useMemo, useState, useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {animated, useTransition} from '@react-spring/web';
import useWebApp from "../../hooks/useWebApp";
import {WebApp} from "../../types/twa-types";
import {AppStateType} from "../../store";
import {clickerClick} from "../../store/app/actions";
import {ClickerContainer, ClickerSparkText} from './Clicker.Styles';
import {AppReducerState} from "../../store/app/reducers";
import {wojak} from '../../assets/images/wojak';
import {ITEM_TYPE, ITEMS_TYPES, RARITY_TYPES} from "../../types/items.d";
import {ItemImg} from "../../pages/Items.Styles";
import {DEFAULT_ENERGY_PER_TAP} from "../../const/app.constants";

interface Props {
  app: AppReducerState;
  clickerClick: () => void;
}

const Clicker: FC<Props> = (props: Props) => {
  const { app: { energy, profile: { dressed } }, clickerClick } = props;
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
    // @ts-ignore
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
  const {app} = state;
  return {
    app,
  };
};

export default connect(mapStateToProps, {clickerClick})(Clicker);
