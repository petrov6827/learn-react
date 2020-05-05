import { usersAPI, profileAPI } from '../components/api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
// const GET_STATUS = 'GET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how r u? ', likesCount: '20' },
    { id: 2, message: "It's my second post", likesCount: '5' },
    { id: 3, message: 'What sports do u like more? ', likesCount: '2' },
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    // case GET_STATUS: {
    //   return {
    //     ...state,
    //     status: action.status,
    //   };
    // }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default: {
      let stateCopy = { ...state };
      return stateCopy;
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
//Новый экшн криэйтор
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data)); // thunk creator
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
