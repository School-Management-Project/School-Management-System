import React, { Component } from 'react';
import axios from "axios";
import 'react-dropdown/style.css'
import './studentlist.css'

class StudentList extends Component {
  constructor() {
    super();

    this.state = {
      'finalDict': {}
    }
    // this.state = {}

    this.submit = false;


    this.tempArr = []
    this.arr = []
    this.finalDict = {}


    this.handleSubmit = this.handleSubmit.bind(this);
    this.res = null

    this.flag = 0;

    this.countryData = [
      { value: 'USA', name: 'USA' },
      { value: 'CANADA', name: 'CANADA' }
    ];

    var baseurl = `http://127.0.0.1:8000/students/`
    var self = this;
    var tempArr = []

    axios.get(baseurl)
      .then(function (response) {
        console.log(response.data);
        self.setState({ 'dict': response.data });

        for (var i in self.state.dict) {
          var d = self.state.dict[i]
          for (var j in d) {
            tempArr.push(d[j])
          }
          self.arr.push(tempArr)
          self.finalDict[i] = tempArr
          tempArr = []
        }

        self.setState({ finalDict: self.finalDict })
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  handleSubmit(e) {
    var self = this;
    console.log(self.finalDict)
    this.submit = true

    console.log(this.submit)
  }


  render() {
    return (
      <table border="1" className="tablecss">
        <tbody>
          <tr class="rowcss">
            <th>Roll No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile No</th>
            <th>Email Address</th>
            <th>Username</th>
            <th>pass</th>
            <th>Department ID</th>
            <th>Course ID</th>
            <th>Semester ID</th>
          </tr>

          {
            Object.keys(this.state.finalDict).map((key, index) => (
              <tr>
                {this.state.finalDict[key].map(function (name, index) {
                  return <td>{name}</td>
                })}
              </tr>
            ))
          }
        </tbody>
      </table>
    );

  }
}
export default StudentList;
