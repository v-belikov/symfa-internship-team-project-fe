import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import { MENU_ITEMS } from './models';

import './styles.scss';

export const Navigation: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('./');
  const navigate = useNavigate();

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div className="navigation-block">
      <Switch
        className="navigation"
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <Menu
        className="navigation__menu"
        theme={theme}
        onClick={onClick}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={MENU_ITEMS}
      />
    </div>
  );
};
