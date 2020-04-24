import React from 'react';
import s from './Profile.module.scss';
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.profile__item}>
        <img alt="" src="" />
      </div>
      <div className={s.profile__item}>
        <MyPostsContainer
          store={props.store}
          // posts={props.profilePage.posts}
          // dispatch={props.dispatch}
          // newPostText={props.profilePage.newPostText}
        />
      </div>
    </div>
  );
};

export default Profile;
