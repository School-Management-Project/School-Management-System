import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from "axios";
// import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { MAX_BOARD_SIZE } from './constants'
import _ from 'lodash';

class SignUpForm extends Component {
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
            sel: 0,
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
console.log(this.state.sel)
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
          alert(this.state)
          console.log(this.state)

            // e.preventDefault(
            //     console.log(this.state)
            //     // axios.get(`http://127.0.0.1:8000/student/1/`)
            //     // .then((res) => {
            //     //     console.log(res)
            //     // } )
            // );
        }
        else{
alert("something left empty");
        }

        e.preventDefault()
    }


    render() {
        return (
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

              <div className="FormField">
                <label className="FormField__Label" htmlFor="">Select Semester</label>
                <select className="select-board-size" name="sel" onChange={this.handleChange}>
                  { semOptions.map(value => <option name="sel" key={value} value={value}>{value}</option>) }
                </select>
              </div>

              {/* render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
} */}
 


 {/* if (isLoggedIn) {
  button = <LogoutButton onClick={this.handleLogoutClick} />;
} else {
  button = <LoginButton onClick={this.handleLoginClick} />;
}

return (
  <div>
    <Greeting isLoggedIn={isLoggedIn} />
    {button}
  </div>
); */}


{/* 
return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  ); */}



              {/* <div className="FormField">
                <Dropdown class="select" options={deptOptions} onChange={this._onSelect} value={this.defaultCourseOption} placeholder="Select Dept-Course" />
              </div>

              <div className="FormField">
                <Dropdown options={semOptions} onChange={this._onSelect} value={this.defaultSemOption} placeholder="Select Semester" />
              </div> */}

{/* 
drop down 3: dept
drop down 3: course
drop down 3: semid (optional)
*/}


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
                  {/* <Link to="/sign-in" className="FormField__Link">I'm already member</Link> */}
              </div>

            </form>
          </div>
        );
    }
}

// const defaultCourseOption = "Select Dept-Course"
// const defaultSemOption = 'Select Semester'

const semOptions = [
    '1','2','3','4','5','6'
]


var vals={
  'Computer Science':['MCA','MSc','MTech'],
  'Chemistry':['BSc','MSC']
}

export default SignUpForm;
