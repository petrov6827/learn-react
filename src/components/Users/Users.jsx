import React from 'react';
import userPhoto from '../../../src/assets/images/user.png';
import s from './Users.module.scss';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.users}>
      <h1> Пользователи </h1>
      <div className={s.pages}>
        {pages.map((p) => (
          <span
            className={props.currentPage === p && s.selectedPage}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>

      <div>
        {props.users.map((u) => (
          <div className={s.user__item} key={u.id}>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.img}
                  alt="аватарка"
                />
              </NavLink>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              'API-KEY': '4ab334bc-c44a-4a21-a3c6-08016163f3f7',
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                          props.toggleFollowingProgress(false, u.id);
                        });
                    }}
                  >
                    Отписаться
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress}
                    onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              'API-KEY': '4ab334bc-c44a-4a21-a3c6-08016163f3f7',
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                          props.toggleFollowingProgress(false, u.id);
                        });
                    }}
                  >
                    Подписаться
                  </button>
                )}
              </div>
            </div>

            <div className={s.about}>{u.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
