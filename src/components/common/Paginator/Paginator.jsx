import React from 'react';
import s from './Paginator.module.scss';

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.pages}>
      {pages.map((p) => (
        <span className={currentPage === p && s.selectedPage}
          onClick={(e) => {onPageChanged(p);}}> {p} </span>
      ))}
    </div>
  )
};

