import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

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

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
    />
  );
};

export default DialogsContainer;
