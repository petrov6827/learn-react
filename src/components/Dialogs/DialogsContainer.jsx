import { updateNewMessageBody, sendMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: () => {
//       dispatch(sendMessageCreator());
//     },
//     updateNewMessageBody: (body) => {
//       let action = updateNewMessageBodyCreator(body);
//       dispatch(action);
//     },
//   };
// };

const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageBody,
})(Dialogs);

export default DialogsContainer;
