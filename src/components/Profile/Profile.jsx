import React from 'react';
import s from '../../App.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={`${s.profile}`}>
      <div className={`${s.profile__item}`}>аватарка</div>
      <div className={`${s.profile__item}`}>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
