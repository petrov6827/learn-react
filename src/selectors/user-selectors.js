import { creatSelector } from 'reselect';

export const getUsers = (state) => {
  return state.usersPage.users.filter((u) => true);
};
