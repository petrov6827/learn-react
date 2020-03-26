import React from 'react';
import s from '../App.module.scss';

const Main = () => {
  return (
    <div className="main">
      <div className={`${s.main__item}`}>аватарка</div>
      <div className={`${s.main__item}`}>Мои посты</div>
      <div className={`${s.main__item}`}>Новые посты</div>
      <div className={`${s.main__item}`}>пост1</div>
      <div className={`${s.main__item}`}>пост2</div>
    </div>
  );
};

export default Main;
