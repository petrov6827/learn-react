import React from 'react';
import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={`${s.nav}`}>
      <div className={s.nav__item}>
        <NavLink to="/Profile" ClassName={s.links} activeClassName={s.active}>
          Моя страница
        </NavLink>
      </div>
      <div className={`${s.nav__item}`}>
        <NavLink to="/Dialogs" ClassName={s.links} activeClassName={s.active}>
          Сообщения
        </NavLink>
      </div>
      <div className={`${s.nav__item}`}>
        <NavLink to="/Friends" className={s.links} activeClassName={s.active}>
          Друзья
        </NavLink>
      </div>
      <div className={`${s.nav__item}`}>
        <NavLink
          to="/Settings"
          className={s.links}
          activeClassName={s.settings}
        >
          Настройки
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
