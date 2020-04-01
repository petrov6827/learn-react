import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.myposts}>
      <h1>Мои посты</h1>
      <div>
        <textarea cols="40" rows="2" className={s.area__input}></textarea>
        <button className={s.post__send}>Добавить пост</button>
      </div>
      <div>
        <Post message="Hi, how r u? " likesCount="20" />
        <Post message="It's my first post " likesCount="5" />
        <Post message="Third message " likesCount="2" />
      </div>
    </div>
  );
};

export default MyPosts;
