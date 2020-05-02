import React from 'react';
import s from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login.jsx';

const App = (props) => {
  return (
    <div className={s.app}>
      <HeaderContainer />
      <Navbar />
      <Route
        className={s.links}
        path="/profile/:userId?"
        render={() => <ProfileContainer />}
      />
      <Route path="/dialogs" render={() => <DialogsContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/login" render={() => <LoginPage />} />
    </div>
  );
};

export default App;
