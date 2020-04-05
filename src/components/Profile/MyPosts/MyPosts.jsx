import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import PostSend from './PostSend/PostSend';

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: 'Hi, how r u? ', likesCount: '20' },
    { id: 2, message: "It's my second post", likesCount: '5' },
    { id: 3, message: 'What sports do u like more? ', likesCount: '2' },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.myposts}>
      <h1>Мои посты</h1>
      <PostSend />
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
