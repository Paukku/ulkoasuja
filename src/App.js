import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Thanks from './components/Thanks';
import Ohje from './components/Ohje';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return(
  <BrowserRouter>
  <div>
   <Navigation />
   <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/kiitos" component={Thanks} />
    <Route path="/ohje" component={Ohje} />
    <Route compnent={Error} />
   </Switch>

   </div>
   <div className="footer">
    <NavLink to="/ohje" className="link">Ohje</NavLink>
   </div>
  </BrowserRouter>

  );
}

export default App;