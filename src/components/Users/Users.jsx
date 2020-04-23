import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/user.png';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items); //добавили this.
      });
  }

  render() {
    return (
      <div className={s.users}>
        <h1> Пользователи </h1>
        <div className={s.pages}>
          <span className={s.pages__item}>1</span>
          <span className={(s.pages__item, s.selectedPage)}>2</span>
          <span className={s.pages__item}>3</span>
          <span className={s.pages__item}>4</span>
          <span className={s.pages__item}>5</span>
        </div>

        <div>
          {this.props.users.map((u) => (
            <div className={s.user__item} key={u.id}>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.img}
                  alt="аватарка"
                />
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
                      Подписаться
                    </button>
                  )}
                </div>
              </div>

              <div className={s.about}>{u.name}</div>
              <div className={s.about}>{u.status}</div>
              <div className={s.about}>{'u.location.country'}</div>
              <div className={s.about}>{'u.location.city'}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
