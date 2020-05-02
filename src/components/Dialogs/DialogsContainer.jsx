import { updateNewMessageBody, sendMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageBody,
})(AuthRedirectComponent);

export default DialogsContainer;
