import React, { Component } from 'react';
import './Profile.css';
import axios from 'axios';

class StudentProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studname: '',
            uname: '',
            studaddress: '',
            studmobileno: '',
            studemail: '',
            rollno: -1,
            course: '',
            dept: '',
            isData: false,
            flag: true
        }

        this.state.uname = this.props.match.params.uname;
        var self = this;

        if (this.state.uname === '') this.state.flag = false;
        // var state = localStorage.getItem('isLoggedIn')
        // self.state.flag = state
        console.log(this.state.flag)
        var url = `http://127.0.0.1:8000/student/` 


        if (this.state.flag === true) {
            axios({
                method: 'get',
                url: url + this.state.uname + `/`,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(function (response) {
                    var nbodyFormData = new FormData();
                    var data = JSON.stringify(response.data)

                    nbodyFormData.set('userName',self.state.uname);
                    nbodyFormData.set('userType','s');
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

                    self.state.isData = true
                    console.log(response.data)
                    self.setState({ 'studname': response.data['studname'] })
                    self.setState({ 'studaddress': response.data['studaddress'] })
                    self.setState({ 'studmobileno': response.data['studmobileno'] })
                    self.setState({ 'studemail': response.data['studemail'] })
                    self.setState({ 'rollno': response.data['rollno'] })
                    self.setState({ 'course': response.data['courseid'] })
                    self.setState({ 'dept': response.data['deptid'] })
                })
                .catch(function (response) {
                    alert("1: Login Credentials are correct but unable to fetch record (errCode: 404), Please Login Again!!")
                    let path = `/student/sign-in/`;
                    self.props.history.push(path)
                })
        }
        else {
            alert("2: Login Credentials are correct but unable to fetch record (errCode: 404), Please Login Again!!")
            let path = `/student/sign-in/`;
            self.props.history.push(path)
        }

        this.editEvent = this.editEvent.bind(this);
        this.logout = this.logout.bind(this)
    }

    logout(e) {
        localStorage.removeItem("Token")
        let path = `/`;
        this.props.history.replace(path)
    }

    editEvent(e) {
        let path = `/edit/student/` + this.state.uname;
        this.props.history.replace(path)
    }


    render() {
        // if (this.state.isData) {
        return (
            <div className='App__Form_profile'>
                <br />
                <h2>Welcome, {this.state.studname}</h2><br />
                This is your information<br /><br />
                <label className="FormField__Label" htmlFor="name">Username</label> {this.state.uname}<br /><br />
                <label className="FormField__Label" htmlFor="name">Address</label>{this.state.studaddress}<br /><br />
                <label className="FormField__Label" htmlFor="name">Mobile Number</label>{this.state.studmobileno}<br /><br />
                <label className="FormField__Label" htmlFor="name">Email Address</label>{this.state.studemail}<br /><br />
                <label className="FormField__Label" htmlFor="name">Course</label>{this.state.course}<br /><br />
                <label className="FormField__Label" htmlFor="name">Department</label>{this.state.dept}<br /><br />

                {/* <Route path="/student/edit/" render={() => <EditForm name={this.props.name} />} /> */}

                {/* <Route path="/student/edit/" component={() => <EditForm name={this.props.name} />} /> */}

                {/* <div>
                    <EditForm data="sush" />
                </div> */}
                {/* <Route path='/favorites/:name' component={Favorites} /> */}

                <button className="FormField__Button mr-20" onClick={this.editEvent}>EDIT RECORD</button>
                <button className="FormField__Button mr-20" onClick={this.logout}>Log-out</button>

            </div>
        )
        // }
        // else {
        //     return (
        //         <div className='App__Form_error'>
        //             <h2>Reasons you are here:</h2>
        //             <h3>UNAUTHORIZED ACCESS</h3>
        //             <h3>UNABLE TO GET RECORD</h3>
        //         </div>
        //     )
        // }
    }
}

export default StudentProfile;