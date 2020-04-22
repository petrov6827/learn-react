import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/user.png';

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };
  // props.setUsers(
  //   (users: [
  //     {
  //       id: 1,
  //       photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
  //       followed: false,
  //       fullname: 'Dmitry',
  //       status: 'Я босс',
  //       location: { city: 'Moscow', country: 'Belarus' },
  //     },
  //     {
  //       id: 2,
  //       photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
  //       followed: true,
  //       fullname: 'Sasha',
  //       status: 'Я тоже босс',
  //       location: { city: 'Minsk', country: 'Russia' },
  //     },
  //     {
  //       id: 3,
  //       photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
  //       followed: false,
  //       fullname: 'Anton',
  //       status: 'Я не босс',
  //       location: { city: 'Kiev', country: 'Ukraine' },
  //     }
  //   ])
  // );

  return (
    <div className={s.users}>
      <h1> Пользователи </h1>
      <button className={s.getUsers} onClick={getUsers}>
        Покажи пользователей
      </button>
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={s.img}
                alt="аватарка"
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onclick={() => {
                    props.follow(u.id);
                  }}
                >
                  Отписаться
                </button>
              ) : (
                <button
                  onclick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Подписка
                </button>
              )}
            </div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
