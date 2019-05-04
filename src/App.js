import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Profiles from './pages/Profiles';
import Profile from './pages/Profile';
import Search from './pages/Search';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/signin' component={Signup} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path ="/myprofile" component={Profile} />
        <Route path='/search/:key' component={Search} />
        <Route exact path='/search' component={Search} />
      </Router>
    </div>
  );
}

export default App;
