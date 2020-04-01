import React from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Settings from './components/Settings/Settings';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={s.app}>
        <Header />
        <Navbar />
        <Route path="/Profile" component={Profile} />
        <Route path="/Dialogs" component={Dialogs} />
        <Route path="/Friends" component={Friends} />
        <Route path="/Settings" component={Settings} />
      </div>
    </Router>
  );
}

export default App;
