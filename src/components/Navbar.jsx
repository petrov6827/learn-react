import React from 'react';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__item">
        <a>Моя страница</a>
      </div>
      <div className="nav__item">
        <a>Контакты</a>
      </div>
      <div className="nav__item">
        <a>Черный список</a>
      </div>
      <div className="nav__item">
        <a>Сообщества</a>
      </div>
    </div>
  );
};

export default Navbar;
