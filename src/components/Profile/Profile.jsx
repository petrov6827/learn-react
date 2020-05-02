import React from 'react';
import s from './Profile.module.scss';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Loader from '../Users/Loader';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.profile__item}>
        <img alt="аватарка" src={props.profile.photos.large} />
      </div>
      <div className={s.profile__item}>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
