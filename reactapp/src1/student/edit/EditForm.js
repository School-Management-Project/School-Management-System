import React, { Component } from 'react';
import axios from "axios";
import './EditForm.css';

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      mobileNo: '',
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
      department: '',
      course: '',
      redirectToNewPage: false,
      departmentOptions: [],
      courseOptions: [],
      oldUserName: ''
    };

    this.flag = 0;
    this.state.userName = this.props.match.params.uname;
    this.state.oldUserName = this.props.match.params.uname;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDepartment = this.getDepartment.bind(this);
    this.getCourse = this.getCourse.bind(this);
    this.bindData = this.bindData.bind(this);

    this.bindData();
    this.getDepartment();
  }


  bindData(e) {
    var self = this;

    var finalurl = `http://127.0.0.1:8000/student/` + self.state.userName + `/`;

    axios({
      method: 'get',
      url: finalurl,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(function (response) {
        console.log(response.data)
        self.setState({ 'name': response.data['studname'] })
        self.setState({ 'address': response.data['studaddress'] })
        self.setState({ 'mobileNo': response.data['studmobileno'] })
        self.setState({ 'email': response.data['studemail'] })
        self.setState({ 'course': response.data['courseid'] })
        self.setState({ 'department': response.data['deptid'] })
      })
      .catch(function (response) {
        alert("1: Login Credentials are correct but unable to fetch record (errCode: 404), Please Login Again!!")
        // let path = `/student/sign-in/`;
        // this.props.history.push(path)
      })
  }


  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });

    if (name === 'department') {
      this.getCourse(value)
    }
  }

  handleSubmit(e) {
    var bodyFormData = new FormData();
    var flag = 0;
    var errMsg = '';
    var self = this;

    if (this.state.name === '') { flag = 1; errMsg += "Invalid Name. \n"; }
    if (this.state.address === '') { flag = 1; errMsg += "Invalid Address. \n"; }
    if (this.state.mobileNo === '') { flag = 1; errMsg += "Invalid Mobile Number. \n"; }
    if (this.state.email === '') { flag = 1; errMsg += "Invalid Email Address. \n"; }
    if (this.state.password === '') { flag = 1; errMsg += "Invalid Password. \n"; }
    if (this.state.confirmPassword === '') { flag = 1; errMsg += "Invalid Confirm Password. \n"; }
    if (this.state.password !== this.state.confirmPassword) { flag = 1; errMsg += "Password and confirm password not matching. \n"; }
    if (this.state.department === '') { flag = 1; errMsg += "Invalid Department. \n"; }
    if (this.state.course === '') { flag = 1; errMsg = errMsg + "Invalid Course. \n"; }

    if (flag === 0) {

      bodyFormData.set("studname", this.state.name)
      bodyFormData.set("studaddress", this.state.address)
      bodyFormData.set("studmobileno", this.state.mobileNo)
      bodyFormData.set("studemail", this.state.email)
      bodyFormData.set("susername", this.state.userName)
      bodyFormData.set("passwd", this.state.password)
      bodyFormData.set("deptid", this.state.department)
      bodyFormData.set("courseid", this.state.course)

      bodyFormData.set("semid", 1)
      var url= `http://127.0.0.1:8000/studentEdit/`

      axios({
        method: 'put',
        url: `http://127.0.0.1:8000/studentEdit/` + this.state.oldUserName + `/`,
        data: bodyFormData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      })
        .then(function (response) {
          
          var nbodyFormData = new FormData();
          var data = JSON.stringify(response.data)
  
          nbodyFormData.set('userName',self.state.oldUserName);
          nbodyFormData.set('userType','s');
          nbodyFormData.set('urlFormat',url);
          nbodyFormData.set('Data',data);
          nbodyFormData.set('updatedData',data);
  
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
  
  

          let path = `/studen/profile/` + self.state.userName;
          self.props.history.replace(path)
        })
        .catch(function (response) {
          alert(response)
        });
    }
    else {
      alert(errMsg);
    }

    e.preventDefault()
  }

  getDepartment(e) {
    var self = this;

    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/departments/`,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(function (response) {
        var arr = [];
        for (let item in response.data) {
          arr.push(response.data[item])
        }
        self.setState({ departmentOptions: arr });
      }).catch(function (response) {
        console.log(response);
      });
  }

  getCourse(deptid) {
    var self = this;

    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/courses/dept/` + deptid + '/',
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(function (response) {
        var arr = [];
        for (let item in response.data) {
          arr.push(response.data[item])
        }
        self.setState({ courseOptions: arr });
      }).catch(function (response) {
        console.log(response);
      });
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
            <input type="text" id="phone" className="FormField__Input" placeholder="Enter your phone number" name="mobileNo" value={this.state.mobileNo} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="username">Username</label>
            <input type="text" id="userName" className="FormField__Input" placeholder="Enter your username" name="userName" value={this.state.userName} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>


          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Confirm Password</label>
            <input type="password" id="confirmPassword" className="FormField__Input" placeholder="Re-Enter password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
          </div>

          <select className="form-control" name="department" onChange={this.handleChange}>
            <option value="">
              Select Department
              </option>
            {
              Object.keys(this.state.departmentOptions).map((key) => (
                <option key={this.state.departmentOptions[key]['deptname']} value={this.state.departmentOptions[key]['deptid']}>
                  {this.state.departmentOptions[key]['deptname']}
                </option>
              ))
            } ))}
            </select>


          <select className="form-control" name="course" onChange={this.handleChange}>
            <option value="">
              Select Course
              </option>
            {
              Object.keys(this.state.courseOptions).map((key) => (
                <option key={this.state.courseOptions[key]['coursename']} value={this.state.courseOptions[key]['courseid']}>
                  {this.state.courseOptions[key]['coursename']}
                </option>
              ))
            } ))}
            </select>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">Department-Key</label>
            <input type="text" id="deptkey" className="FormField__Input" placeholder="Enter key provided by department" name="deptkey" value={this.state.deptkey} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20" onChange={this.handleSubmit}>Confirm and Update</button>
          </div>

        </form>
      </div>
    );
  }
}

export default EditForm;
