import React from 'react';
import './App.scss';
import Clock from './Clocks';
import PhoneInput from './PhoneInput';
import { Router, Switch, Route, NavLink, BrowserRouter } from 'react-router-dom';

function NavBar() {
  return <nav id='main-nav'>
    <ul>
      <li>
        <NavLink to='/clocks'>Clocks</NavLink>
      </li>
      <li>
        <NavLink to='/phone-input'>Phone Input</NavLink>
      </li>
    </ul>
  </nav>;
}

function App() {
  return (
    <div className="App">
      {/* <Clock />
      <PhoneInput /> */}

      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Clock />
          </Route>
          <Route path="/clocks">
            <Clock />
          </Route>
          <Route path="/phone-input">
            <PhoneInput />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
