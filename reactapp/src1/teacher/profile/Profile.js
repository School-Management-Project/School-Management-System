import React, { Component } from 'react';
import './Profile.css';
import axios from 'axios';

class FacultyProfile extends Component {
    constructor(props) {
        super(props)
        console.log("ASdkgasdh")
        this.state = {
            facultyid: '',
            studname: '',
            uname: '',
            studaddress: '',
            studmobileno: '',
            studemail: '',
            rollno: -1,
            course: '',
            // dept: '',
            isData: false,
            flag: true
        }

        this.state.uname = this.props.match.params.uname;
        var self = this;
        var url = `http://127.0.0.1:8000/faculty/`;

        if (this.state.uname === '') this.state.flag = false;
        // var state = localStorage.getItem('isLoggedIn')
        // self.state.flag = state

        if (this.state.flag === true) {
            axios({
                method: 'get',
                url: url + this.state.uname + `/`,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(function (response) {
                    self.state.isData = true
                    self.setState({ 'facultyid': response.data['facultyid'] })
                    self.setState({ 'studname': response.data['facultyname'] })
                    self.setState({ 'studaddress': response.data['facultyaddress'] })
                    self.setState({ 'studmobileno': response.data['facultymobileno'] })
                    self.setState({ 'studemail': response.data['facultyemail'] })
                    self.setState({ 'course': response.data['courseid'] })

                    var nbodyFormData = new FormData();
                    var data = JSON.stringify(response.data)
          
                    nbodyFormData.set('userName',self.state.uname);
                    nbodyFormData.set('userType','T');
                    nbodyFormData.set('urlFormat',url);
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
          

                })
                .catch(function (response) {
                    alert("1: Login Credentials are correct but unable to fetch record (errCode: 404), Please Login Again!!")
                    let path = `/teacher/sign-in/`;
                    self.props.history.push(path)
                })
        }
        else {
            alert("2: Login Credentials are correct but unable to fetch record (errCode: 404), Please Login Again!!")
            let path = `/teacher/sign-in/`;
            self.props.history.push(path)
        }

        this.editEvent = this.editEvent.bind(this);

    }

    editEvent(e) {
        let path = `/edit/student/` + this.state.uname;
        this.props.history.replace(path)
    }


    render() {
        return (
            <div className='App__Form_profile'>
                <br />
                <h2>Welcome, {this.state.studname}</h2><br />
                This is your information<br /><br />
                <label className="FormField__Label" htmlFor="name">Faculty Id</label> {this.state.facultyid}<br /><br />
                <label className="FormField__Label" htmlFor="name">Username:</label> {this.state.uname}<br /><br />
                <label className="FormField__Label" htmlFor="name">Address</label>{this.state.studaddress}<br /><br />
                <label className="FormField__Label" htmlFor="name">Mobile Number</label>{this.state.studmobileno}<br /><br />
                <label className="FormField__Label" htmlFor="name">Email Address</label>{this.state.studemail}<br /><br />
                <label className="FormField__Label" htmlFor="name">Course</label>{this.state.course}<br /><br />

                <button className="FormField__Button mr-20" onClick={this.editEvent}>EDIT RECORD</button>

            </div>
        )
    }
}

export default FacultyProfile;