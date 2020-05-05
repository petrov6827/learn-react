import React from 'react';
import s from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus';
// import Loader from '../../Users/Loader';

const ProfileInfo = (props) => {
  //   if (!props.profile) {
  //     return <Loader />;
  //   }
  return (
    <div className={s.profile__info}>
      {/* <img alt="аватарка" src={props.profile.photos.large} /> */}
      <ProfileStatus status={'Sam sam Sam'} updateStatus={props.updateStatus} />
    </div>
  );
};

export default ProfileInfo;
