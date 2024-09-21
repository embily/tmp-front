import React from 'react';
import {renderToStaticMarkup} from "react-dom/server";

// Icons
//Base
import { ReactComponent as OuterwearBasicIconSVG } from "../../assets/images/inventory/icons/base/outerwear.svg";
import { ReactComponent as PantsBasicIconSVG } from "../../assets/images/inventory/icons/base/pants.svg";
import { ReactComponent as ShoesBasicIconSVG } from "../../assets/images/inventory/icons/base/shoes.svg";
import { ReactComponent as WeaponBasicIconSVG } from "../../assets/images/inventory/icons/base/weapon.svg";

// Images
//Base
import { ReactComponent as HeaddressBasicSVG } from "../../assets/images/inventory/images/base/headdress.svg";
import { ReactComponent as OuterwearBasicSVG } from "../../assets/images/inventory/images/base/outerwear.svg";
import { ReactComponent as PantsBasicSVG } from "../../assets/images/inventory/images/base/pants.svg";
import { ReactComponent as ShoesBasicSVG } from "../../assets/images/inventory/images/base/shoes.svg";
import { ReactComponent as WeaponBasicSVG } from "../../assets/images/inventory/images/base/weapon.svg";

export const inventoryIcon = (inventoryName: string): string => {
  switch (inventoryName) {
    case 'inventory_outerwear_base_0_0':
      return renderToStaticMarkup(<OuterwearBasicIconSVG />);

    case 'inventory_pants_base_0_0':
      return renderToStaticMarkup(<PantsBasicIconSVG />);

    case 'inventory_shoes_base_0_0':
      return renderToStaticMarkup(<ShoesBasicIconSVG />);

    case 'inventory_weapon_base_0_0':
      return renderToStaticMarkup(<WeaponBasicIconSVG />);

    default:
      return '';
  };
};

export const inventoryImage = (inventoryName: string): string => {
  switch (inventoryName) {
    case 'inventory_headdress_base_0_0':
      return renderToStaticMarkup(<HeaddressBasicSVG />);

    case 'inventory_outerwear_base_0_0':
      return renderToStaticMarkup(<OuterwearBasicSVG />);

    case 'inventory_pants_base_0_0':
      return renderToStaticMarkup(<PantsBasicSVG />);

    case 'inventory_shoes_base_0_0':
      return renderToStaticMarkup(<ShoesBasicSVG />);

    case 'inventory_weapon_base_0_0':
      return renderToStaticMarkup(<WeaponBasicSVG />);

    default:
      return '';
  };
};

