import React from 'react';
import s from './Navbar.module.scss';
import { Route, Switch, NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={`${s.nav}`}>
      <div className={`${s.nav__item} ${s.active}`}>
        <Link to="/Profile" activeClassName={s.active}>
          Моя страница
        </Link>
      </div>
      <div className={`${s.nav__item}`}>
        <Link to="/Dialogs">Сообщения</Link>
      </div>
      <div className={`${s.nav__item}`}>
        <a href="/Friends">Друзья</a>
      </div>
      <div className={`${s.nav__item}`}>
        <a href="/Settings">Настройки</a>
      </div>
    </div>
  );
};

export default Navbar;
