import { ExpandMore } from '@mui/icons-material';
import React, {useCallback} from 'react';
import {Button} from "../Button/Button";

import {
  Placeholder,
  SelectContainer, SelectElement, SelectLabel,
  SelectListItem,
} from './Select.Styles';
import {FormControlLabel, Checkbox} from "@mui/material";
import {Icon} from "../Icon/Icon";

interface Props {
  className?: string;
  name: string;
  placeholder?: any;
  value?: string;
  values?: string[];
  image?: string;
  fullWidth?: boolean;
  list: any[];
  label?: string;
  error?: string;
  onChange?: (value: string) => void;
  onRemove?: (value: string) => void;
  onSelect?: (value: string) => void;
  IconComponent?: any;
  disableRotate?: boolean;
  position?: string;
  disabled?: boolean,
  withIcon?: string,
  disableIconComponent?: boolean,
  staticText?: boolean
}

export const Select: React.FC<Props> = (props: Props) => {
  const {
    className,
    value,
    name,
    image,
    placeholder,
    fullWidth,
    list,
    values,
    label,
    disabled,
    onChange,
    onSelect,
    IconComponent,
    disableRotate,
    position,
    withIcon,
    disableIconComponent,
    staticText
  } = props;

  const onItemChange = useCallback(
    (value: string) => {
      if (!onChange) return;

      onChange(value);
    },
    [onChange]
  );

  const onItemSelect = useCallback(
    (e: React.ChangeEvent<any>, value: string) => {
      e.preventDefault();
      e.stopPropagation();

      if (!onSelect) return;
      onSelect(value);
    },
    [onSelect]
  );

  const menuProps = {
    disablePortal: true,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: position ? position : 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: position ? position : 'left',
    }
  };

  return (
    <SelectContainer>
      {
        image ? (
          <img className="select-img" src={image} alt="mem" />
        ) : null
      }

      <div className="select-wrap">
        {
          label ? (
            <SelectLabel>{label}</SelectLabel>
          ) : null
        }
        <SelectElement
          MenuProps={menuProps}
          id={name}
          className={`${className} ${disableRotate ? '-disable-rotate' : ''} ${image ? '-image' : ''} ${withIcon ? '-flag' : ''}`}
          name={name}
          value={value}
          disabled={disabled}
          displayEmpty
          renderValue={
            !!value && !staticText ? undefined : () => <Placeholder>
              {
                withIcon ? <img className="flag-image" src={`/img/${withIcon}/unknown.svg`} alt="sc"/> : null
              }
              {placeholder}
            </Placeholder>
          }
          fullWidth={fullWidth}
          aria-describedby={`${name}-text`}
          IconComponent={disableIconComponent ? null : IconComponent || ExpandMore}
          onChange={(e: React.ChangeEvent<any>) => onSelect ? () => {return false} : onItemChange(e.target.value)}
        >
          {list.map((item: any, index: number) => (
            <SelectListItem
              key={`drop-down-item-${name}-${item.value}-${index + 1}`}
              value={item.value}
            >
              <div className="select-option">
                <span className="select-option__text">{item.text}</span>
                {
                  item.value === value ? (
                    <Button
                      className="select-option__btn"
                      type="button"
                      onClick={(e) => onItemSelect(e, item.value)}
                    >
                      <Icon className="select-option__btn_icon" name="crest" size="12"/>
                    </Button>
                  ) : null
                }
              </div>
            </SelectListItem>
          ))}
        </SelectElement>
      </div>
    </SelectContainer>
  );
};
