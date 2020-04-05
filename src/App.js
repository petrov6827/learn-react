import React from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Settings from './components/Settings/Settings';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <Router>
      <div className={s.app}>
        <Header />
        <Navbar />
        <Route
          path="/Profile"
          render={() => <Profile state={props.state.profilePage} />}
        />
        <Route
          path="/Dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} />}
        />
        <Route path="/Friends" render={() => <Friends />} />
        <Route path="/Settings" render={() => <Settings />} />
      </div>
    </Router>
  );
};

export default App;
