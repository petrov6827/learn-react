const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how r u? ', likesCount: '20' },
    { id: 2, message: "It's my second post", likesCount: '5' },
    { id: 3, message: 'What sports do u like more? ', likesCount: '2' },
  ],
  newPostText: '123',
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    default: 
      return state;
  }
};


export default userReducer;
