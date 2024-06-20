import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import {PATHS} from "../../const/paths.constants";
import {MenuContainer} from "./Menu.Styles";
import {Icon} from "../../elements";

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
            <Icon className="menu-list__icon" name="mine" size="37"/>
          </NavLink>
        </li>
        <li className={`menu-list__item ${pathname === PATHS.UPGRADE ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.UPGRADE}
            className='menu-list__link'
          >
            <Icon className="menu-list__icon" name="upgrade" size="36"/>
          </NavLink>
        </li>
        <li className={`menu-list__item ${pathname === PATHS.ITEMS ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.ITEMS}
            className='menu-list__link'
          >
            <Icon className="menu-list__icon" name="items" size="26"/>
          </NavLink>
        </li>
        <li className={`menu-list__item ${pathname === PATHS.FRIENDS ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.FRIENDS}
            className='menu-list__link'
          >
            <Icon className="menu-list__icon" name="friends" size="26"/>
          </NavLink>
        </li>
        <li className={`menu-list__item ${pathname === PATHS.EARN ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.EARN}
            className='menu-list__link'
          >
            <Icon className="menu-list__icon" name="earn" size="26"/>
          </NavLink>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
