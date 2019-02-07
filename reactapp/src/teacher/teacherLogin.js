import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import SignInForm from './login/SignInForm';
import SignUpForm from './register/SignUpForm'

import '../App.css';
import './teachermain.css'


class TeacherLogin extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">

          <div className="App__Form_teacher">

            <div className="PageSwitcher">
              <NavLink exact to="/teacher/auth/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              <NavLink exact to="/teacher/auth/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            </div>

            <Route exact path="/teacher/auth/sign-up" component={SignUpForm}></Route>
            <Route exact path="/teacher/auth/sign-in" component={SignInForm}></Route>

          </div>

        </div>
      </Router>
    );
  }
}

export default TeacherLogin;
