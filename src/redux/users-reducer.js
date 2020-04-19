const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
      followed: false,
      fullname: 'Dmitry',
      status: 'Я босс',
      location: { city: 'Moscow', country: 'Belarus' },
    },
    {
      id: 2,
      photoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
      followed: true,
      fullname: 'Sasha',
      status: 'Я тоже босс',
      location: { city: 'Minsk', country: 'Russia' },
    },
    {
      id: 3,
      photoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
      followed: false,
      fullname: 'Anton',
      status: 'Я не босс',
      location: { city: 'Kiev', country: 'Ukraine' },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((m) => {
          if (m.id === action.userId) {
            return { ...m, followed: true };
          }
          return m;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((m) => {
          if (m.id === action.userId) {
            return { ...m, followed: false };
          }
          return m;
        }),
      };

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

let userId;
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
