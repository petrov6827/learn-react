// import { creatSelector } from 'reselect';

// export const getUsers = (state) => {
//   return state.usersPage.users.filter((u) => true);
// };

export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getPageSize = (state) => {
  return state.usersPage.PageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.IsFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
