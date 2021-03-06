import { updateNewMessageBody, sendMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
// import { updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage,

    updateNewMessageBody,
  }),
  withAuthRedirect
)(Dialogs);
