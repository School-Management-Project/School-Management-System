import React, { Component } from 'react'

import axios from 'axios'

import './detail.css'
import '../../App.css'

class StudentDeatil extends Component {
    constructor() {
        super();

        this.state = {
            rollNo: null,
            studname: '',
            studaddress: '',
            studmobileno: '',
            studemail: '',
            deptid: '',
            courseid: '',
            semid: '',
            susername: '',
            rollNoOption: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.getRollNo = this.getRollNo.bind(this)

        this.getRollNo();
        console.log(this.state.rollNo)
    }

    getRollNo(e) {
        var finalUrl = `http://127.0.0.1:8000/students/`
        var arr = [];
        var self = this;

        axios({
            method: 'get',
            url: finalUrl,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                for (var item in response.data) { arr.push(response.data[item]['rollno']); }
                console.log(arr)
                self.setState({ rollNoOption: arr });
            })
            .catch(function (response) {

            });
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        var self = this;

        this.setState({
            [name]: value
        });

        var baseurl = `http://127.0.0.1:8000/student/`
        var finalUrl = baseurl + value + `/`

        axios({
            method: 'get',
            url: finalUrl,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                console.log(response.data)
                self.setState({ rollno: response.data.rollno })
                self.setState({ studname: response.data.studname })
                self.setState({ studemail: response.data.studemail })
                self.setState({ studaddress: response.data.studaddress })
                self.setState({ studmobileno: response.data.studmobileno })
                self.setState({ deptid: response.data.deptid })
                self.setState({ courseid: response.data.courseid })
                self.setState({ semid: response.data.semid })
                self.setState({ susername: response.data.susername })
                

                var nbodyFormData = new FormData();
                var data = JSON.stringify(response.data)

                nbodyFormData.set('userName',self.state.uname);
                nbodyFormData.set('userType','s');
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

            })
            .catch(function (response) {
                self.setState({ rollno: null })
                self.setState({ studname: '' })
                self.setState({ studemail: '' })
                self.setState({ studaddress: '' })
                self.setState({ studmobileno: '' })
                self.setState({ deptid: '' })
                self.setState({ courseid: '' })
                self.setState({ semid: '' })
                alert("Some error occured!")
            });
    }


    render() {
        return (
            <div>
                <div className="FormCenter1">
                    <label className="FormField__Label" htmlFor="rollno">Select Roll Number of Student To See Student Details:-</label>

                    <select className="select-board-size" name="rollNo" onChange={this.handleChange}>
                        {this.state.rollNoOption.map(value => <option name="rollNo" key={value} value={value}>{value}</option>)}
                    </select>
                </div>

                <div className="detail">

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Student Name:-</label>   {this.state.studname}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Student User Name:-</label>   {this.state.susername}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Student Roll Number:-</label>    {this.state.rollNo}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Student Address:-</label>    {this.state.studaddress}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Student Mobile Number:-</label>  {this.state.studmobileno}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Student Email:-</label>  {this.state.studemail}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Student DepartMent Id:-</label>  {this.state.deptid}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Student Course Id:-</label>  {this.state.courseid}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Student Semester:-</label>   {this.state.semid}
                    </div>

                </div>
            </div>

        );
    }
}

export default StudentDeatil;