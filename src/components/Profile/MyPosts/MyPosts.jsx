import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={s.myposts}>
      <h1>Мои посты</h1>
      <AddNewPostTextFormRedux onSubmit={onAddPost} />
      <div>{postsElements}</div>
    </div>
  );
};

const AddNewPostTextForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newPostText"
        component="textarea"
        cols="40"
        rows="2"
        className={s.area__input}
      />
      <button className={s.post__send}>Добавить пост</button>
    </form>
  );
};

const AddNewPostTextFormRedux = reduxForm({
  form: 'ProfileAddNewPostTextForm',
})(AddNewPostTextForm);

export default MyPosts;
