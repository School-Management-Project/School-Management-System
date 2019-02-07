import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            uname: '',
            password: '',
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

        if (this.state.uname === '') flag = 0;
        if (this.state.password === '') flag = 0;

        localStorage.setItem('isLoggedIn', false)


        if (flag === 0) {
            alert("Something Left Empty!!!")
        }
        else {
            var bodyFormData = new FormData();
            var self = this;
            bodyFormData.set('uname', this.state.uname)
            bodyFormData.set('passwd', this.state.password)

            var finalUrl = `http://127.0.0.1:8000/facultyauth/`
            axios({
                method: 'post',
                url: finalUrl,
                data: bodyFormData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(function (response) {
                    localStorage.setItem('Token', true)
                    var nbodyFormData = new FormData();
                    var data = JSON.stringify(response.data)
    
                    nbodyFormData.set('userName',self.state.uname);
                    nbodyFormData.set('userType','T');
                    nbodyFormData.set('urlFormat',finalUrl);
                    nbodyFormData.set('Data',data);
    
                    axios({
                        method: 'post',
                        url: `http://127.0.0.1:8000/log/`,
                        data: nbodyFormData,
                        config: { headers: { 'Content-Type': 'multipart/form-data' } }
                    })
                    .then(function (response){
                        console.log(response)
                    })
                    .catch(function (response){
                        alert(response)
    
                    })
                    let path = `/teacher/other/profile/` + self.state.uname;
                    self.props.history.replace(path)
                })
                .catch(function (response) {
                    alert("INVALID CREDENTIALS!!!")
                })
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="uname">UserName</label>
                        <input type="text" id="uname" className="FormField__Input" placeholder="Enter Username" name="uname" value={this.state.uname} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button> <Link to="/sign-up" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>


        );
    }
}

export default SignInForm;