import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((f) => (
    <DialogItem name={f.name} id={f.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    // props.store.dispatch(updateNewMessageBodyCreator(body));
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
                className="s.area__input"
                value={newMessageBody}
                onChange={onNewMessageChange}
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
