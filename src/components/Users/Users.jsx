import React from 'react';
import userPhoto from '../../../src/assets/images/user.png';
import s from './Users.module.scss';
import { NavLink } from 'react-router-dom';

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
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Отписаться
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
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
