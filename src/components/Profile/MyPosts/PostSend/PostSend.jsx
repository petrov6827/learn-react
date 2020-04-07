import React from 'react';
import s from './PostSend.module.scss';

const PostSend = () => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
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
  );
};

export default PostSend;
