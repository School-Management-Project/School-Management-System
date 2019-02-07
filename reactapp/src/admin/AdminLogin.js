import React, { Component } from 'react';
import axios from 'axios'

import './admin.css'

class AdminSignIn extends Component {
    constructor() {
        super();


        this.state = {
            email: 'arati',
            password: 'a',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }


    handleSubmit(e) {
        var flag = 1;

        if (this.state.email === '') flag = 0;
        if (this.state.password === '') flag = 0;

        // let path = `/admin/other` + this.state.uname;
        // this.props.history.push(path)
        if (flag === 0) {
            alert("Something Left Empty!!!")
        }
        else {
            var formdata = new FormData();
            formdata.append('username', this.state.email)
            formdata.append('password', this.state.password)
            var self = this

            axios({
                method: 'post',
                url: `http://127.0.0.1:8000/api-token-auth/`,
                data: formdata,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(function (response) {
                    alert("sucess")
                    var time = new Date().toLocaleString()
                    console.log(time)
                    let path = `/admin/other/`;
                    self.props.history.replace(path)
                })
                .catch(function (response) {
                    console.log("error)")
                    alert("NOT AUTHORIZED!!!")
                });
        }
        e.preventDefault()

    }

    render() {
        return (
            <div className="App__Form_student">

                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <h2 class="heading">Admin Login</h2><br /><br />
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">UserName</label>
                        <input type="text" id="email" className="FormField__Input" placeholder="Default is- Email Address" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AdminSignIn;