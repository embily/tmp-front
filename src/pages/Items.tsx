import React, {FC, useEffect, useState} from 'react';
import {AppStateType} from "../store";
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";
import {AppReducerState} from "../store/app/reducers";
import {ItemsReducerState} from "../store/items/reducers";
import {clear, setItem} from "../store/app/actions";
import {getItems} from "../store/items/actions";
import {LOADING_TYPES} from "../types/app.d";
import {ITEM_TYPE, ITEMS_SORT, ITEMS_TYPES} from "../types/items.d";
import {sortList, typesList} from "../const/mocks.constants";
import {ItemImg, ItemsControl, ItemsWrap} from "./Items.Styles";
import {Select} from "../elements";

interface Props {
  app: AppReducerState;
  items: ItemsReducerState;
  getItems: () => void;
  setItem: (item: ITEM_TYPE) => void;
  clear: () => void;
}

const Items: FC<Props> = (props: Props) => {
  const { items, getItems, setItem } = props;
  const { t } = useTranslation();

  const [filterParams, setFilterParams] = useState({
    type: ITEMS_TYPES.ALL,
    sort: ITEMS_SORT.NOVELTY
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

  const setItemsSort = (value: string) => {
    setFilterParams(prev => ({
      ...prev,
      sort: ITEMS_SORT[value.toUpperCase() as keyof typeof ITEMS_SORT]
    }))
  };

  const selectItem = (item: ITEM_TYPE) => {
    setItem(item);
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
          <div className="items-control__select">
            <Select
              value={filterParams.sort}
              name="group-voice"
              placeholder={t('common.sort')}
              list={sortList.map((s: ITEMS_SORT) => {
                return {
                  value: s,
                  text: t(`sort.${s}`)
                }
              })}
              fullWidth
              onChange={setItemsSort}
            />
          </div>
        </div>
      </ItemsControl>

      <ItemsWrap>
        <div className="items-wrap">
          {
            items.list.map((item: ITEM_TYPE, index: number) => (
              <div
                key={`item-${index + 1}`}
                className={`item ${filterParams.type !== ITEMS_TYPES.ALL && filterParams.type !== item.type ? '-hidden' : ''} ${item.selected ? '-selected' : ''}`}
                onClick={() => selectItem(item)}
              >
                <ItemImg icon={item.icon} />
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
export default connect(mapStateToProps, {getItems, setItem, clear})(Items);
