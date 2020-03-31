import React from 'react';
import s from '../../../../App.module.scss';

const Post = () => {
  return (
    <div className={`${s.post__item}`}>
      <img src="https://i.pinimg.com/736x/ce/ff/af/ceffaf6a57c0935cda8d56d4db594d02.jpg" />
      Hello my man <span>like</span>
    </div>
  );
};

export default Post;
