import React from 'react';
import s from '../../../App.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={`${s.myposts}`}>
      My posts
      <textarea></textarea>
      <button>Добавить пост</button>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
