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


class TeacherOther extends Component {
    constructor(props) {
        super(props)
        console.log("CAME")

        this.logout = this.logout.bind(this)
    }

    logout(e) {
        localStorage.removeItem("Token")
        let path = `/`;
        this.props.history.replace(path)
    }

    render() {
        return (
            <Router basename="/">
                <div className="App">

                    <div className="App__Form_teacher">

                        <div className="PageSwitcher">
                            <NavLink exact to="/teacher/other/detail" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Detail</NavLink>
                            <NavLink exact to="/teacher/other/list" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">List</NavLink>
                            <NavLink exact to="/teacher/other/attendance" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Attendance</NavLink>
                            <NavLink exact to="/teacher/other/grad" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Mark Performance</NavLink>

                            <form className="FormFields" onSubmit={this.logout}>
                                <button className="FormField__Button mr-20">Log-out</button>
                            </form>
                        </div>

                        <Route exact path="/teacher/other/profile/:uname" component={FacultyProfile}></Route>
                        <Route exact path="/teacher/other/detail" component={StudentDeatil}></Route>
                        <Route exact path="/teacher/other/list" component={StudentList}></Route>
                        <Route exact path="/teacher/other/attendance" component={Attendance}></Route>
                        <Route exact path="/teacher/other/grad" component={Grade}></Route>
                    </div>

                </div>
            </Router>
        );
    }
}

export default TeacherOther;
