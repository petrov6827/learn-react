import React from 'react';
import s from './login.module.scss';
import { Form, reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div>
        <label htmlFor="login">Логин</label>
        <Field name="login" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        <Field name="password" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="чекбокс">запомнить меня</label>
        <Field name="remember" component="input" type="checkbox" />
      </div>
      <div>
        <button>Войти</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  return (
    <div className={s.login}>
      <h1>Вход</h1>
      <LoginReduxForm />
    </div>
  );
};

export default Login;
