import React from 'react';
import './App.scss';
import Clocks from './Clocks';
import PhoneInput from './PhoneInput';
import { Switch, Route, NavLink, BrowserRouter, Redirect } from 'react-router-dom';
import TodoList from './TodoList';

function NavBar() {
  return <nav id='main-nav'>
    <ul>
      <li>
        <NavLink to='/clocks'>Clocks</NavLink>
      </li>
      <li>
        <NavLink to='/phone-input'>Phone Input</NavLink>
      </li>
      <li>
        <NavLink to='/todo-list'>Todo List</NavLink>
      </li>
    </ul>
  </nav>;
}

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Redirect to='/clocks' />
          </Route>
          <Route path="/clocks">
            <Clocks />
          </Route>
          <Route path="/phone-input">
            <PhoneInput />
          </Route>
          <Route path="/todo-list">
            <TodoList />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
