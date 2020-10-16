import React from 'react';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import {BrowserRouter as Router} from 'react-router-dom';
import './stylesheets/styles.scss';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Dashboard />
    </div>
    </Router>
  );
}

export default App;
