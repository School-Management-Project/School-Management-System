import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uname: 'sushil',
            password: 's',
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
        e.preventDefault();

        var flag = 1;

        if (this.state.uname === '') flag = 0;
        if (this.state.password === '') flag = 0;


        if (flag === 0) {
            alert("Something Left Empty!!!")
        }
        else {
            var bodyFormData = new FormData();
            var self = this;
            bodyFormData.set('uname', this.state.uname)
            bodyFormData.set('passwd', this.state.password)
            var url = `http://127.0.0.1:8000/studentauth/`

            axios({
                method: 'post',
                url: url,
                data: bodyFormData,
                
                config: { headers: { 'Content-Type': 'multipart/form-data' } },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            })
                .then(function (response) {
                    sessionStorage.setItem('session',response.data)
                    localStorage.setItem('local',response.data)
                    var tok = localStorage.getItem('local')
                    
                    var nbodyFormData = new FormData();
                    var data = JSON.stringify(response.data)

                    nbodyFormData.set('userName',self.state.uname);
                    nbodyFormData.set('userType','s');
                    nbodyFormData.set('urlFormat',url);
                    nbodyFormData.set('Data',data);
                    nbodyFormData.set('Token',tok);

                    axios({
                        method: 'post',
                        url: `http://127.0.0.1:8000/log/`,
                        data: nbodyFormData,
                        config: { headers: {'Content-Type': 'multipart/form-data'} }
                    })
                    .then(function (response){
                        console.log(response)
                    })
                    .catch(function (response){
                        alert(response)

                    })

                    let path = `/studen/profile/` + self.state.uname;
                    self.props.history.push(path)
                })
                .catch(function (response) {
                    alert("INVALID CREDENTIALS!!!")
                })
        }
    }


    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">UserName</label>
                        <input type="text" id="email" className="FormField__Input" placeholder="Default is- Email Address" name="uname" value={this.state.uname} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;