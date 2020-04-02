import React from 'react';
import s from './Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  let path = '/dialogs' + props.id;

  return (
    <div className={s.d__items + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.message}>{props.message}</div>;
};

let oldArray = [
  'Алексей Бокс',
  'Антон Футбол',
  'Наташка Плавание',
  'Миша Парашют',
  'Андрей ',
  'Борис борцуха'
];
let newArray = oldArray.map(friend => (
  <DialogItem name={friend.name} id={friend.id} />
));

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <h1>Сообщения</h1>

      <div className={s.d__content}>
        <div className={s.d__friends}>
          <DialogItem name="Алексей Бокс" id="1" />
          <DialogItem name="Антон Футбол" id="2" />
          <DialogItem name="Наташка Плавание" id="3" />
          <DialogItem name="Миша Парашют" id="4" />
          <DialogItem name="Андрей " id="5" />
          <DialogItem name="Борис борцуха" id="6" />
        </div>

        <div className={s.d__messages}>
          <Message message="Привет пошли на футбол" />
          <Message message="Ты где был?" />
          <Message message="Занятия отменяются" />
          <Message message="Скидываемся по 200 руб" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
