import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import { MENU_ITEMS } from './models';

import './styles.scss';

export const EducationBtnBlock: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('./');
  const redirect = useNavigate();

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
    redirect(e.key);
  };

  return (
    <div className="menu-btn-block">
      <Switch
        className="education-btn-block"
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <Menu
        className="education-btn-block__menu"
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
