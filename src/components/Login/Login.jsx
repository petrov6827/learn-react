import React from 'react';
import s from './login.module.scss';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <div>
        <label htmlFor="login"></label>
        <Field
          className={s.item}
          name="login"
          placeholder="Login"
          component="input"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <Field
          className={s.item}
          name="password"
          placeholder="Password"
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field name="remember" component="input" type="checkbox" />
        <label htmlFor="чекбокс">запомнить меня</label>
      </div>
      <div>
        <button className={s.button}>Войти</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={s.login}>
      <h1>Вход</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
