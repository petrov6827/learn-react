const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    { id: 1, message: 'Привет пошли на футбол' },
    { id: 2, message: 'Ты где был?' },
    { id: 3, message: 'Занятия отменяются' },
    { id: 4, message: 'Скидываемся по 200 руб' },
  ],
  dialogs: [
    { id: 1, name: 'Алексей Бокс' },
    { id: 2, name: 'Антон Футбол' },
    { id: 3, name: 'Наташка Плавание' },
    { id: 4, name: 'Миша Парашют' },
    { id: 5, name: 'Андрей ' },
    { id: 6, name: 'Борис борцуха' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({ id: 5, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_POST_TEXT,
  body: body,
});
export default dialogsReducer;
