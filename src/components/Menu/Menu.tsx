import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import {PATHS} from "../../const/paths.constants";
import {MenuContainer} from "./Menu.Styles";
import { ReactComponent as MineSVG } from "../../assets/images/mine.svg";
import { ReactComponent as UpgradeSVG } from "../../assets/images/upgrade.svg";
import { ReactComponent as ItemsSVG } from "../../assets/images/items.svg";
import { ReactComponent as FriendsSVG } from "../../assets/images/friends.svg";
import { ReactComponent as EarnSVG } from "../../assets/images/earn.svg";

type Props = {
};

const Menu: React.FC<Props> = () => {
  const { pathname } = useLocation();

  return (
    <MenuContainer>
      <ul className="menu-list">
        <li className={`menu-list__item ${pathname === PATHS.MINE ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.MINE}
            className='menu-list__link'
          >
            <div className="menu-list__icon">
              <MineSVG />
            </div>
          </NavLink>
        </li>
        <li className={`menu-list__item ${pathname === PATHS.UPGRADE ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.UPGRADE}
            className='menu-list__link'
          >
            <div className="menu-list__icon">
              <UpgradeSVG/>
            </div>
          </NavLink>
        </li>
        <li className={`menu-list__item ${pathname === PATHS.ITEMS ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.ITEMS}
            className='menu-list__link'
          >
            <div className="menu-list__icon">
              <ItemsSVG/>
            </div>
          </NavLink>
        </li>
        <li className={`menu-list__item ${pathname === PATHS.FRIENDS ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.FRIENDS}
            className='menu-list__link'
          >
            <div className="menu-list__icon">
              <FriendsSVG/>
            </div>
          </NavLink>
        </li>
        <li className={`menu-list__item ${pathname === PATHS.EARN ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.EARN}
            className='menu-list__link'
          >
            <div className="menu-list__icon">
              <EarnSVG/>
            </div>
          </NavLink>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
