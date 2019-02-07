import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AdminSignIn from './AdminLogin';
import AdminAllOther from './AdminAllOther';
import './admin.css'

class AdminMain extends Component {
    render() {
        return (
            <div className="App">
                <div className="info">
                    <h2>Admin Page</h2><br />
                    Login to Create, See, Edit, Delete (CRUD) all things related to Teacher, Student, Department etc.
                </div>

                <Route exact path="/admin/auth/login" component={AdminSignIn}></Route>
                <Route path="/admin/other/" component={AdminAllOther}></Route>
            </div>
        );
    }
}

export default AdminMain;

