import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Profiles from './pages/Profiles';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/profiles' component={Profiles} />
      </Router>
    </div>
  );
}

export default App;
