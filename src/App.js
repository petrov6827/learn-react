import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './Main';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
