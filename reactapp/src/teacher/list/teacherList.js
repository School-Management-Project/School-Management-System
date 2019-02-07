import React, { Component } from 'react';
import axios from "axios";
import 'react-dropdown/style.css'
import './studentlist.css'

class TeacherList extends Component {
  constructor() {
    super();

    this.state = {
      'dict': {}
    }
    // this.state = {}

    this.submit = false;
    this.tempArr = []
    this.arr = []
    this.finalDict = {}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.res = null
    this.flag = 0;


    var baseurl = `http://127.0.0.1:8000/facultys/`
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


        var nbodyFormData = new FormData();
        var data = JSON.stringify(response.data)

        nbodyFormData.set('userName',self.state.uname);
        nbodyFormData.set('userType','T');
        nbodyFormData.set('urlFormat',baseurl);
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
      .catch(function (error) {
        console.log(error);
      });

  }

  handleSubmit(e) {
    var self = this;
    console.log(self.finalDict)

    // this.submit = true;

    this.submit = true

    console.log(this.submit)
  }


  render() {

    return (
      <table border="1" className="tablecss">
        <tbody>
          <tr class="rowcss">
            <th>Teacher Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile No</th>
            <th>Email Address</th>
            <th>Username</th>
            <th>pass</th>
            {/* <th>Department ID</th> */}
            <th>Course ID</th>
            <th>Teacher Salary</th>
          </tr>

          {
            Object.keys(this.finalDict).map((key, index) => (
              <tr>
                {this.finalDict[key].map(function (name, index) {
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
export default TeacherList;
