import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

// import FacultyProfile from './profile/Profile';
import StudentList from './list/studentList';
import StudentDeatil from './detail/studentDetail';
import EditForm from './edit/EditForm';
// import Attendance from '../attendance/attendance'
// import Grade from '../attendance/grading'
// import StudentDeatil from '../student/detail/studentDetail';

import '../App.css';
// import './teachermain.css'


class AdminAllOther extends Component {
    constructor(props) {

        super(props)
        console.log("CAME")

        this.logout = this.logout.bind(this)
    }

    logout(e) {
        localStorage.removeItem("user")
        let path = `/`;
        this.props.history.replace(path)
    }

    render() {
        return (

            <Router basename="/">
                <div className="App">

                    <div className="App__Form_teacher">

                        <div className="PageSwitcher">
                            <NavLink exact to="/admin/other/list" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Student List</NavLink>
                            <NavLink exact to="/admin/other/detail" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Student Detail</NavLink>
                            {/* <NavLink exact to="/admin/other/edit" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Student Edit</NavLink> */}

                            <form className="FormFields" onSubmit={this.logout}>
                                <button className="FormField__Button mr-20">Log-out</button>
                            </form>
                        </div>
                        <div className='heading'>
                            <h3>
                                Please select one of the option from above nav bar!
                        </h3>
                        </div>
                        <Route exact path="/admin/other/list" component={StudentList}></Route>
                        <Route exact path="/admin/other/detail" component={StudentDeatil}></Route>
                        <Route exact path="/admin/other/edit" component={EditForm}></Route>
                    </div>

                </div>
            </Router>
        );
    }
}

export default AdminAllOther;



