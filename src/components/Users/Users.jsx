import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/user.png';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items); //добавили this.
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

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
              className={this.props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                this.onPageChanged(p);
              }}
            >
              {p}
            </span>
          ))}
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
