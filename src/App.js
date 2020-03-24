import React from 'react';
import './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="app-wrapper">
      <Header className="header" />
      <Navbar className="nav" />
      <Main className="main" />
    </div>
  );
}

export default App;
