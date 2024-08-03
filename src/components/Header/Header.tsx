import React from 'react';
import {HeaderContainer} from "./Header.Styles";
import {WebApp} from "../../types/twa-types";
import useWebApp from "../../hooks/useWebApp";

type Props = {
};

const Header: React.FC<Props> = () => {
  const webApp: WebApp = useWebApp();
  const { initDataUnsafe: { user } } = webApp;

   return (
    <HeaderContainer>
      <div className="header-left">
        <div className="user-info">
          <div className="user-info__avatar">
            <img
              className="user-info__avatar_img"
              src={user?.photo_url ? `${user?.photo_url}` : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iI0EyQUNCMCIvPgo8L3N2Zz4K"}
              alt="mememiner"
            />
          </div>
          <span className="user-info__name">{user?.first_name} {user?.last_name}</span>
        </div>
      </div>
      <div className="header-right">
        <div className="header-right__square"/>
      </div>
    </HeaderContainer>
  );
};

export default Header;
