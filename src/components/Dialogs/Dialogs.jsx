import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    state.newMessageBody = body;
  };

  return (
    <div className={s.dialogs}>
      <h1>Сообщения</h1>
      <div className={s.d__content}>
        <div className={s.d__friends}>{dialogsElements}</div>
        <div className={s.d__messages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea
                cols="40"
                rows="2"
                placeholder="enter your message"
                className={s.input}
                value={state.newMessageBody}
                onChange={onNewMessageChange}
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick} className={s.sendMessage}>
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
