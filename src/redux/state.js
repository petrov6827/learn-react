let rerenderEntireTree = () => {
  console.log('state changed');
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how r u? ', likesCount: '20' },
      { id: 2, message: "It's my second post", likesCount: '5' },
      { id: 3, message: 'What sports do u like more? ', likesCount: '2' },
    ],
    newPostText: '123',
  },

  dialogsPage: {
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
  },
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 14,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
