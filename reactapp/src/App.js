import React, { Component } from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import StudentProfile from './student/profile/Profile';
import EditForm from './student/edit/EditForm';
import Home from "./home/Home";
import Department from "./department/Department";
import Student from "./student/studentMain";
import TeacherMain from "./teacher/teacherMain";
import Contact from "./contact/Contact";
import Sign_up from "./student/register/SignUpForm";
import AdminSignIn from './admin/AdminLogin';
import AdminMain from './admin/adminMain';

import './index.css'
import './App.css';
import './student/profile/Profile.css'

class App extends Component {
  render() {
    return (

      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/department">Department</NavLink></li>
            <li><NavLink to="/teacher/auth/sign-in">Teacher</NavLink></li>
            <li><NavLink to="/student/sign-in">Student</NavLink></li>
            <li><NavLink to="/admin/auth/login">Admin</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/department" component={Department} />
            <Route path="/teacher" component={TeacherMain} />
            <Route path="/student" component={Student} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={Sign_up} />
            {/* <Route path="/admin/auth/login/" component={AdminSignIn} /> */}
            <Route path="/admin" component={AdminMain} />
            <Route exact path="/studen/profile/:uname" component={StudentProfile}></Route>
            <Route exact path="/edit/student/:uname" component={EditForm}></Route>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
