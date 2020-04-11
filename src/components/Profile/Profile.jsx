import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.profile__item}>
        <img
          alt="картинка"
          src="https://u.kanobu.ru/editor/images/67/6e2c058c-9d16-4fa3-aa90-83d96e374170.jpg"
        />
      </div>
      <div className={s.profile__item}>
        <MyPosts posts={props.state.posts} addPost={props.addPost} />
      </div>
    </div>
  );
};

export default Profile;
