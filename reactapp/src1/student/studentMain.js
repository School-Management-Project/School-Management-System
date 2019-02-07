import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import SignUpForm from './register/SignUpForm';
import SignInForm from './login/SignInForm';

import '../App.css';
import './studentmain.css';

class Student extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">

          <div className="head">
            <h3>Student Page</h3>

            This is student page who can:- <br /><br />
            1. login<br />
            2. register<br />
          </div>

          <div className="App__Form_student">

            <div className="PageSwitcher">
              <NavLink to="/student/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Register</NavLink>
              <NavLink exact to="/student/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
            </div>

            <div className="FormTitle">
              <NavLink to="/student/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Register</NavLink>
              or
              <NavLink exact to="/student/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink>
            </div>

            <Route exact path="/student/sign-up" component={SignUpForm}></Route>
            <Route path="/student/sign-in" component={SignInForm}></Route>

          </div>

        </div>
      </Router>
    );
  }
}

export default Student;
