import React from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className={s.app}>
      <Header />
      <Navbar />
      <Route
        className={s.links}
        path="/Profile"
        render={() => <Profile store={props.store} />}
      />
      <Route
        path="/Dialogs"
        render={() => <DialogsContainer store={props.store} />}
      />
      <Route
        path="/Users"
        render={() => <UsersContainer store={props.store} />}
      />
      <Route path="/Settings" render={() => <Settings />} />
    </div>
  );
};

export default App;
