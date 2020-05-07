import React from 'react';
import s from './login.module.scss';
import { Form, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div>
        <input placeholder={'logins'}></input>
      </div>
      <div>
        <input placeholder={'Password'}></input>
      </div>
      <div>
        <input type={'checkbox'}>Запомнить меня</input>
      </div>
      <div>
        <button>Log in</button>
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
