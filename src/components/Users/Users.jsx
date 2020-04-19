import React from 'react';
import s from './Users.module.scss';

const Users = (props) => {
  return (
    <div className={s.users}>
      <h1> Пользователи </h1>
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <div>
              <img src={u.photoUrl} className={s.img} alt="аватарка" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onclick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Отписаться
                </button>
              ) : (
                <button
                  onclick={() => {
                    props.follow(u.id);
                  }}
                >
                  Подписка
                </button>
              )}
            </div>
            <div>{u.fullname}</div>
            <div>{u.status}</div>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
