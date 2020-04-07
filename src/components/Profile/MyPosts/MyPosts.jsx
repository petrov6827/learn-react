import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.myposts}>
      <h1>Мои посты</h1>
      <div>
        <textarea
          ref={newPostElement}
          cols="40"
          rows="2"
          className={s.area__input}
        ></textarea>
        <button onclick={addPost} className={s.post__send}>
          Добавить пост
        </button>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
