import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.myposts}>
      <h1>Мои посты</h1>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          cols="40"
          rows="2"
          className={s.area__input}
        />
        <button onClick={addPost} className={s.post__send}>
          Добавить пост
        </button>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
