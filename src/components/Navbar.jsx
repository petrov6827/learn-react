import React from 'react';
import s from '../App.module.scss';

const Navbar = () => {
  return (
    <div className="nav">
      <div className={`${s.nav__item}`}>
        <a>Моя страница</a>
      </div>
      <div className={`${s.nav__item} ${s.active}`}>
        <a>Сообщения</a>
      </div>
      <div className="nav__item">
        <a>Друзья</a>
      </div>
      <div className="nav__item">
        <a>Настройки</a>
      </div>
    </div>
  );
};

export default Navbar;
