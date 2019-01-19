import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignInForm from './login/SignInForm';
import StudentList from './list/studentList';
// import StudentDetail from './detail/studentDetail';

import '../App.css';

class Student extends Component {
  render() {
    return (
      <Router basename="/student">
        <div className="App">
          <h3>Student Page</h3>
          <div className="App__Aside"></div>
          <div className="App__Form">

            <div className="PageSwitcher">
                <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                <NavLink exact to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            </div>

            <div className="FormTitle">
              <NavLink to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              or 
              <NavLink exact to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
            </div>

            {/* <Route exact path="/sign-up" component={SignUpForm}></Route> */}
            <Route exact path="/sign-up" component={StudentList}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>

          </div>

        </div>
      </Router>
    );
  }
}

export default Student;
