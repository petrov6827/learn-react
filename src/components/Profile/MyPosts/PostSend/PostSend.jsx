import React from 'react';
import s from './PostSend.module.scss';

const PostSend = () => {
  return (
    <div>
      <textarea cols="40" rows="2" className={s.area__input}></textarea>
      <button className={s.post__send}>Добавить пост</button>
    </div>
  );
};

export default PostSend;
