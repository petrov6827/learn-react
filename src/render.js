import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { addPost } from './redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Router>
      <App state={state} addPost={addPost} />
    </Router>,
    document.getElementById('root')
  );
};
