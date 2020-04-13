import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { addPost, updateNewPostText } from './redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Router>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </Router>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
