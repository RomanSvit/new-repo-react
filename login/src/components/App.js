import React from 'react';
import { Switch, Redirect, Route, NavLink } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
const App = () => {
  return (
    <>
    <NavLink exact to="/" >Home</NavLink>
    <NavLink to="/about" >About</NavLink>
    <NavLink to="/login" >Login</NavLink>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/about" component={AboutPage} />
        <Route  path="/login" component={LoginPage} />
        <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
