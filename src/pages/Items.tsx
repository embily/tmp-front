import React, {FC, useEffect, useState} from 'react';
import {AppStateType} from "../store";
import {connect} from "react-redux";
import {AppReducerState} from "../store/app/reducers";
import {ItemsReducerState} from "../store/items/reducers";
import {clear} from "../store/app/actions";
import {getItems} from "../store/items/actions";
import {LOADING_TYPES} from "../types/app.d";
import {ITEM_TYPE, ITEMS_TYPES} from "../types/items.d";
import {itemsMock, typesList} from "../const/mocks.constants";
import {ItemsControl, ItemsWrap} from "./Items.Styles";

interface Props {
  app: AppReducerState;
  items: ItemsReducerState;
  getItems: () => void;
  clear: () => void;
}

const Items: FC<Props> = (props: Props) => {
  const { items, getItems } = props;

  const [filterParams, setFilterParams] = useState({
    type: ITEMS_TYPES.ALL,
  })

  useEffect(() => {
    if (items.loaded === LOADING_TYPES.NOT_LOADED) {
      getItems();
    }

    if (items.answer?.success) {
      console.log(items.answer?.success);
      clear();
    }

    if (items.answer?.error) {
      console.log(items.answer.error);
      clear();
    }
  }, [getItems, items.answer.error, items.answer?.success, items.loaded]);

  const setType = (value: ITEMS_TYPES) => {
    setFilterParams(prev => ({
      ...prev,
      type: value
    }))
  };

  return (
    <>
      <ItemsControl>
        <div className="items-control">
          <div className="items-control__types">
            <button
              onClick={() => setType(ITEMS_TYPES.ALL)}
              className={`items-control__btn ${filterParams.type === ITEMS_TYPES.ALL ? '-active' : ''}`}
              type="button"
              tabIndex={-1}
            >
              All
            </button>
            {
              typesList.map((itemType: ITEMS_TYPES) => (
                <button
                  key={`btn-item-control-${itemType}`}
                  onClick={() => setType(itemType)}
                  className={`items-control__btn ${filterParams.type === itemType ? '-active' : ''}`}
                  type="button"
                  tabIndex={-1}
                >
                  {itemType}
                </button>
              ))
            }
          </div>
        </div>
      </ItemsControl>

      <ItemsWrap>
        <div className="items-wrap">
          {
            itemsMock.map((item: ITEM_TYPE) => (
              <div
                key={`item-${item.id}`}
                className={`item ${filterParams.type !== ITEMS_TYPES.ALL && filterParams.type !== item.type ? '-hidden' : ''}`}
              >
                <img
                  className="item-img"
                  src={item.icon}
                  alt="icon"
                />
              </div>
            ))
          }
        </div>
      </ItemsWrap>
    </>
);
};

const mapStateToProps = (state: AppStateType) => {
  const { app, items } = state;
  return {
    app,
    items,
  };
};
export default connect(mapStateToProps, {getItems, clear})(Items);
