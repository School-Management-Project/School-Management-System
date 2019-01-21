import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignInForm from './login/SignInForm';
import StudentList from './list/studentList';
import SignUpForm from './register/SignUpForm'
import Attendance from '../attendance/attendance'
import Grade from '../attendance/grading'

import '../App.css';
import StudentDeatil from './detail/studentDetail';

class Student extends Component {
  render() {
    return (
      <Router basename="/teacher">
        <div className="App">

          <div className="App__Aside">            
            {/* <div className="tempInfo">
              <h3>Teacher Page</h3><br />
                1. Stud-List<br />
                2. Stud-Details<br />
                3. Attendance<br />
                4. Mark Performance<br /><br />
                5. Sign Up<br />
                6. Sign In<br />
            </div> */}


           <div className="PageSwitcher">
                <NavLink to="/detail" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Detail</NavLink>
                <NavLink exact to="/list" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">List</NavLink>
                <NavLink to="/attendance" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Attendance</NavLink>
                <NavLink exact to="/grad" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Mark Performance</NavLink>
                <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                <NavLink exact to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            </div>

            <Route path="/detail" component={StudentDeatil}></Route>
            <Route path="/list" component={StudentList}></Route>
            <Route path="/attendance" component={Attendance}></Route>
            <Route path="/grad" component={Grade}></Route>
            <Route exact path="/sign-up" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>

          </div>

        </div>
      </Router>
    );
  }
}

export default Student;
