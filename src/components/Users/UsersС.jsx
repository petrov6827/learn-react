import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/user.png';

class Users extends React.Component {
  getUsers = () => {
    //метод объекта
    if (this.props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          this.props.setUsers(response.data.items); //добавили this.
        });
    }
  };

  render() {
    return (
      <div className={s.users}>
        <h1> Пользователи </h1>
        <button className={s.getUsers} onClick={getUsers}>
          Покажи пользователей
        </button>
        <div>
          {this.props.users.map((u) => (
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
                      this.props.follow(u.id);
                    }}
                  >
                    Отписаться
                  </button>
                ) : (
                  <button
                    onclick={() => {
                      this.props.unfollow(u.id);
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
  }
}

export default Users;
