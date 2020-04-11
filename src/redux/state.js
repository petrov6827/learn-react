import { rerenderEntireTree } from '../render';

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how r u? ', likesCount: '20' },
      { id: 2, message: "It's my second post", likesCount: '5' },
      { id: 3, message: 'What sports do u like more? ', likesCount: '2' },
    ],
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

export let addPost = (postMessage) => {
  let newPost = {
    id: 4,
    message: postMessage,
    likesCount: 14,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
