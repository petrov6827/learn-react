import React from 'react';
import { connect } from 'react-redux';
import {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsersThunk,
} from '../../redux/users-reducer';
import Users from './Users';
import Loader from './Loader';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/users-selectors';
import { withRouter } from 'react-router-dom';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.setUsers(page, this.props.pageSize);
    this.props.setCurrentPage(page);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          //////onPageChaged?!?!?!?
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    followThunk,
    unfollowThunk,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsersThunk,
  }),
  withRouter
)(UsersContainer);
