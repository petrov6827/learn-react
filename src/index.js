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

ReactDOM.render(<App posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
