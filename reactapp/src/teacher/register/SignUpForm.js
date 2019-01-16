import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from "axios";
// import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

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
            hasAgreed: false
        };

        this.flag = 0;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
      let {name, value} = e.target;
      this.setState({
        [name]: value,
      
      });
      
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
                // axios.get(`http://127.0.0.1:8000/student/1/`)
                // .then((res) => {
                //     console.log(res)
                // } )
            );
        }
        else{
            console.log("empty field")
        }
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
                  <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>

            </form>
          </div>
        );
    }
}
// const defaultCourseOption = "Select Dept-Course"
// const defaultSemOption = 'Select Semester'

// const semOptions = [
//     '1','2','3','4','5','6'
// ]

// const deptOptions = [
//     {
//      type: 'group', name: 'Computer Science', items: [
//        { value: 'MCA', label: 'MCA'},
//        { value: 'MSC', label: 'MSC' }
//      ]
//     },
//     {
//      type: 'group', name: 'Chemistry', items: [
//        { value: 'chem1', label: 'Chem 1' },
//        { value: 'chem2', label: 'Chem 2' }
//      ]
//     },
//     {
//      type: 'group', name: 'Physics', items: [
//        { value: 'phy1', label: 'Phy 1' },
//        { value: 'phy2', label: 'Phy 2' }
//      ]
//     }
//   ]

export default SignUpForm;
