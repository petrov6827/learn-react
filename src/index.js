import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Hi, how r u? ', likesCount: '20' },
  { id: 2, message: "It's my second post", likesCount: '5' },
  { id: 3, message: 'What sports do u like more? ', likesCount: '2' },
];

let dialogs = [
  { id: 1, name: 'Алексей Бокс' },
  { id: 2, name: 'Антон Футбол' },
  { id: 3, name: 'Наташка Плавание' },
  { id: 4, name: 'Миша Парашют' },
  { id: 5, name: 'Андрей ' },
  { id: 6, name: 'Борис борцуха' },
];

let messages = [
  { id: 1, message: 'Привет пошли на футбол' },
  { id: 2, message: 'Ты где был?' },
  { id: 3, message: 'Занятия отменяются' },
  { id: 4, message: 'Скидываемся по 200 руб' },
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
