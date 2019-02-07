import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import FacultyProfile from './profile/Profile';
import SignInForm from './login/SignInForm';
import StudentList from '../student/list/studentList';
import SignUpForm from './register/SignUpForm'
import Attendance from '../attendance/attendance'
import Grade from '../attendance/grading'
import StudentDeatil from '../student/detail/studentDetail';

import '../App.css';
import './teachermain.css'
import TeacherLogin from './teacherLogin';
import TeacherOther from './teacherOther';


class TeacherMain extends Component {
    constructor(props) {
        super(props)
        console.log("in teaher main");
    }
    render() {
        return (
            <Router basename="/">
                <div className="App">

                    <div className="head">
                        <h3>Teacher Page</h3>

                        This is teacher page who can:- <br /><br />
                        1. login<br />
                        2. register<br />
                        3. See list of all student<br />
                        4. details of each and every student<br />
                        5. can put attendance of student<br />
                        6. also teacher can note marks of all student.
                    </div>
                    <Route path="/teacher/auth/" component={TeacherLogin}></Route>
                    <Route path="/teacher/other/" component={TeacherOther}></Route>

                    {/* <Route exact path="/teacher/profile/:uname" component={FacultyProfile}></Route>
                        <Route exact path="/teacher/detail" component={StudentDeatil}></Route>
                        <Route exact path="/teacher/list" component={StudentList}></Route>
                        <Route exact path="/teacher/attendance" component={Attendance}></Route>
                        <Route exact path="/teacher/grad" component={Grade}></Route> */}
                    {/* <Route exact path="/teacher/sign-up" component={SignUpForm}></Route>
                        <Route exact path="/teacher/sign-in" component={SignInForm}></Route> */}

                </div>
            </Router>
        );
    }
}

export default TeacherMain;
