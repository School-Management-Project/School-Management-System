

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sign_up extends Component {
    constructor() {
        super();

        this.state = {
            name:'',
            address:'',
            phone:'',
            email: '',
            password: '',
            deptkey:'',
            // defaultSemOption:'Select Semester',
            // defaultCourseOption: 'Select Dept-Course',
            hasAgreed: false,
            teams: {
              'name':'sushil',
              'rollno':'16107'
            }
        };

        this.flag = 0;

        this.countryData = [
          { value: 'USA', name: 'USA' },
          { value: 'CANADA', name: 'CANADA' }            
      ];

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
        this.flag = 1;

        if(this.state.name === '')   this.flag = 0;
        if(this.state.address === '')   this.flag = 0;
        if(this.state.phone === '')   this.flag = 0;
        if(this.state.password === '')   this.flag = 0;
        if(this.state.deptkey === '')   this.flag = 0;
        if(this.state.dept === '')   this.flag = 0;
        if(this.state.course === '')   this.flag = 0;
        if(this.state.hasAgreed === false)   this.flag = 0;

        if(this.flag === 1){
            e.preventDefault(
                console.log(this.state)
            );
        }
        else{
            console.log("empty field")
        }
    }

    render() {
        return (
        <div class='App__Aside'>    
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">

              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="address">Address</label>
                <input type="text" id="address" className="FormField__Input" placeholder="Enter your address" name="address" value={this.state.address} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" className="FormField__Input" placeholder="Enter your phone number" name="phone" value={this.state.phone} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail (Default Username)</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
 
     <div>
       {
         Object.keys(vals).map((key, index) => ( 
         <select key={index}><b>****{key}****</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
            {vals[key].map(function(name, index){
                     return <option key={ index }>{name}</option> 
                   })}
           </select> 
         ))
       }
     </div> 

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Department-Key</label>
                <input type="text" id="deptkey" className="FormField__Input" placeholder="Enter key provided by department" name="deptkey" value={this.state.deptkey} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" onChange={this.handleSubmit}>Sign Up</button>
                  <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>

            </form>
          </div>
          </div>
        );
    }
}

  var vals={
  'Computer Science':['MCA','MSc','MTech'],
  'Chemistry':['BSc','MSC']
}

export default Sign_up;