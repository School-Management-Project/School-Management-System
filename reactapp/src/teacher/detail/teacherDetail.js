import React, { Component } from 'react'

import axios from 'axios'

import './detail.css'
import '../../App.css'

class TeacherDeatil extends Component {
    constructor() {
        super();

        this.state = {
            facultyid:null,
            facultyname:'',
            facultyaddress:'',
            facultymobileno:'',
            facultyemail:'',
            facultysalary:'',
            fusername:'',
            passwd:'',
            courseid:'',
            rollNoOption: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.getRollNo = this.getRollNo.bind(this)

        this.getRollNo();
        console.log(this.state.rollNo)
    }

    getRollNo(e) {
        var finalUrl = `http://127.0.0.1:8000/facultys/`
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

        var baseurl = `http://127.0.0.1:8000/facultys/`
        var finalUrl = baseurl + value + `/`

        axios({
            method: 'get',
            url: finalUrl,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                console.log(response.data)
                self.setState({facultyid: response.data.facultyid})
                self.setState({facultyname: response.data.facultyname})
                self.setState({facultyemail: response.data.facultyemail})
                self.setState({facultyaddress: response.data.facultyaddress})
                self.setState({facultymobileno: response.data.facultymobileno})
                self.setState({fusername: response.data.fusername})
                self.setState({courseid: response.data.courseid})
                self.setState({passwd: response.data.passwd})
                self.setState({facultysalary:response.data.facultysalary})

                var nbodyFormData = new FormData();
                var data = JSON.stringify(response.data)

                nbodyFormData.set('userName',self.state.fusername);
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




            })
            .catch(function (response) {
                self.setState({facultyid:null})
                self.setState({facultyname:''})
                self.setState({facultyemail:''})
                self.setState({facultyaddress:''})
                self.setState({facultymobileno:''})
                self.setState({fusername:''})
                self.setState({courseid:''})
                self.setState({passwd:''})
                self.setState({facultysalary:''})
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
                        <label className="FormField__Label" htmlFor="name">Teacher Name:-</label>   {this.state.facultyname}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Teacher User Name:-</label>   {this.state.fusername}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Teacher Id:-</label>    {this.state.facultyid}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Teacher Address:-</label>    {this.state.facultyaddress}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Teacher Mobile Number:-</label>  {this.state.facultymobileno}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Teacher Email:-</label>  {this.state.facultyemail}
                    </div>

                    {/* <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Teacher DepartMent Id:-</label>  {this.state.deptid}
                    </div> */}

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Teacher Course Id:-</label>  {this.state.courseid}
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Teacher Salary:-</label>   {this.state.facultysalary}
                    </div>

                </div>
            </div>

        );
    }
}

export default TeacherDeatil;