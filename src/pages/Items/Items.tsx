import React, {FC, useEffect, useMemo, useState} from 'react';
import {AppStateType} from "../../store";
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";
import {AppReducerState} from "../../store/app/reducers";
import {ItemsReducerState} from "../../store/items/reducers";
import {clear, setItem} from "../../store/app/actions";
import {getItems} from "../../store/items/actions";
import {LOADING_TYPES} from "../../types/app.d";
import {ITEM_TYPE, ITEMS_SORT, ITEMS_TYPES, RARITY_TYPES} from "../../types/items.d";
import {sortList, typesList} from "../../const/mocks.constants";
import {ItemImg, ItemsContainer, ItemsControl, ItemsWrap} from "./Items.Styles";
import {Select} from "../../elements";
import { ReactComponent as DotsSVG } from "../../assets/images/dots.svg";

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
  const [filterParams, setFilterParams] = useState<{
    type: ITEMS_TYPES,
    sort: ITEMS_SORT,
    filter: ITEMS_TYPES | ITEMS_SORT,
  }>({
    type: ITEMS_TYPES.ALL,
    sort: ITEMS_SORT.NOVELTY,
    filter: ITEMS_SORT.NOVELTY,
  });

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

  const setItemsSort = (value: string, type?: string) => {
    const typedValue: ITEMS_SORT = ITEMS_SORT[value.toUpperCase() as keyof typeof ITEMS_SORT];
    const typedValueType: ITEMS_TYPES = ITEMS_TYPES[value.toUpperCase() as keyof typeof ITEMS_TYPES];
    const isSort: boolean = type === 'sort';

    setFilterParams(prev => ({
      ...prev,
      sort: isSort ? typedValue : prev.sort,
      type: isSort ? prev.type : typedValueType === prev.type ? ITEMS_TYPES.ALL : typedValueType,
      filter: isSort ? typedValue : typedValueType
    }));
  };

  const selectItem = (item: ITEM_TYPE) => {
    if (item.icon) {
      setItem(item);
    }
  };

  const visibilityList: ITEM_TYPE[] = useMemo(
    () => {
      const result = items.list.filter((item: ITEM_TYPE) => {
          return !(filterParams.type !== ITEMS_TYPES.ALL && filterParams.type !== item.type);
        }
      );

      if (result.length < 28) {
        const iterationsCount = 28 - result.length;

        for (let i = iterationsCount; i > 0; i--) {
          result.push({
            icon: '',
            image: '',
            type: ITEMS_TYPES.ALL,
            selected: false,
            rarity: RARITY_TYPES.BASE
          })
        }
      }

      return result
    },
    [filterParams.type, items.list]
  );

  return (
    <ItemsContainer>
      <ItemsControl>
        <div className="items-control">
          <Select
            value={filterParams.filter}
            name="filter"
            placeholder={<>{t('common.sort')} <DotsSVG /></>}
            disableIconComponent={true}
            staticText={true}
            list={[...sortList.map((s) => {
              return {val: s, type: 'sort'}
            }), ...typesList.map((t) => {
              return {val: t, type: 'type'}
            })].map((s: {val: string; type: string}) => {
              return {
                value: s.val,
                type: s.type,
                text: t(`sort.${s.val}`)
              }
            })}
            fullWidth
            onSelect={setItemsSort}
            values={filterParams}
          />
        </div>
      </ItemsControl>

      <ItemsWrap>
        <div className="items-wrap">
          {
            visibilityList.map((item: ITEM_TYPE, index: number) => (
              <div
                key={`item-${index + 1}`}
                className={`item -${item.rarity} ${item.selected ? '-selected' : ''} ${item.icon ? '-pointed' : ''}`}
                onClick={() => selectItem(item)}
              >
                <div className="item-container">
                  <ItemImg icon={item.icon} />
                </div>
              </div>
            ))
          }
        </div>
      </ItemsWrap>
    </ItemsContainer>
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
