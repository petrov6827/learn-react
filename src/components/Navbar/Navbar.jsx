import React from 'react';
import s from '../../App.module.scss';

const Navbar = () => {
  return (
    <div className={`${s.nav}`}>
      <div className={`${s.nav__item} ${s.active}`}>
        <a>Моя страница</a>
      </div>
      <div className={`${s.nav__item}`}>
        <a>Сообщения</a>
      </div>
      <div className={`${s.nav__item}`}>
        <a>Друзья</a>
      </div>
      <div className={`${s.nav__item}`}>
        <a>Настройки</a>
      </div>
    </div>
  );
};

export default Navbar;
