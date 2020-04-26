import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={s.header}>
      Спортивная соц сеть
      <div className={s.login_block}>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink className={s.white} to={'/login'}>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
