import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
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
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);

        var flag = 1;

        if(this.state.email === '') flag = 0;
        if(this.state.password === '') flag = 0;

        if(flag ===0){
            alert("Something Left Empty!!!")
        }
        else{
            let path = `/detail`;
            this.props.history.push(path);
    
            axios({
                method: 'get',
                url: `http://127.0.0.1:8000/semester/1/`,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then(function (response) {
                    this.state({response})
                    console.log(response);
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });        
        }
    }

    render() {
        return (
        <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">UserName</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Default is- Email Address" name="email" value={this.state.email} onChange={this.handleChange} />
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