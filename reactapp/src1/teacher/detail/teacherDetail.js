import React, {Component} from 'react'

import axios from 'axios'

import './detail.css'
import '../../App.css'

class TeacherDeatil extends Component{
    constructor(){
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
            courseid:''
        }
        this.handleChange = this.handleChange.bind(this)
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
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                self.setState({facultyid: response.data.facultyid})
                self.setState({facultyname: response.data.facultyname})
                self.setState({facultyemail: response.data.facultyemail})
                self.setState({facultyaddress: response.data.facultyaddress})
                self.setState({facultymobileno: response.data.facultymobileno})
                self.setState({fusername: response.data.fusername})
                self.setState({courseid: response.data.courseid})
                self.setState({passwd: response.data.passwd})
                self.setState({facultysalary:response.data.facultysalary})
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


    render(){
        var rollNoOption = [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15','300'
        ]

        return(
            <div>
                <div className="FormCenter1">
                    <label className="FormField__Label" htmlFor="rollno">Select Roll Number of Student To See Student Details:-</label>
    
                    <select className="select-board-size" name="rollNo" onChange={this.handleChange}>
                        { rollNoOption.map(value => <option name="rollNo" key={value} value={value}>{value}</option>) }
                    </select>
                </div>

                <div className="detail">

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Student Name:-</label>   {this.state.studname}
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