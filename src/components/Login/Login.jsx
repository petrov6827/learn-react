import React from 'react';
import s from './login.module.scss';
import { reduxForm, Field } from 'redux-form';
import { Textarea, Element } from '../common/FormsControls/FormsControls';
import {
  requiredLogin,
  requiredPassword,
} from '../../utils/validators/validators';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <div>
        <label htmlFor="login"></label>
        <Field
          className={s.item}
          rows="1"
          name="login"
          placeholder="Login"
          component={Textarea}
          type="textarea"
          validate={[requiredLogin]}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <Field
          className={s.item}
          rows="1"
          name="password"
          placeholder="Password"
          component={Textarea}
          type="textarea"
          validate={[requiredPassword]}
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
