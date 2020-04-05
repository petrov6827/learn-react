import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = props => {
  let dialogs = [
    { id: 1, name: 'Алексей Бокс' },
    { id: 2, name: 'Антон Футбол' },
    { id: 3, name: 'Наташка Плавание' },
    { id: 4, name: 'Миша Парашют' },
    { id: 5, name: 'Андрей ' },
    { id: 6, name: 'Борис борцуха' }
  ];

  let messages = [
    { id: 1, message: 'Привет пошли на футбол' },
    { id: 2, message: 'Ты где был?' },
    { id: 3, message: 'Занятия отменяются' },
    { id: 4, message: 'Скидываемся по 200 руб' }
  ];

  let dialogsElements = dialogs.map(f => (
    <DialogItem name={f.name} id={f.id} />
  ));

  let messagesElements = messages.map(m => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <h1>Сообщения</h1>

      <div className={s.d__content}>
        <div className={s.d__friends}>{dialogsElements}</div>
        <div className={s.d__messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
