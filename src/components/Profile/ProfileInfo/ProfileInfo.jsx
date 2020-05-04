import React from 'react';
import s from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus';
// import Loader from '../../Users/Loader';

const ProfileInfo = (props) => {
  //   if (!props.profile) {
  //     return <Loader />;
  //   }
  return (
    <div>
      <div className={s.profile__status}>
        <ProfileStatus status={'Status is here!'} />
      </div>
    </div>
  );
};

export default ProfileInfo;
