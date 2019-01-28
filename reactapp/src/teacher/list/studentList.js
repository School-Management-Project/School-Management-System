import React, { Component } from 'react';
import axios from "axios";
import 'react-dropdown/style.css'
import './studentlist.css'

class StudentList extends Component {
    constructor() {
        super();

        this.state = {}

        this.state[0] ={rollNo:1, studname : 'arati',studaddress : 'BMT',studmobileno : '7030298043',studemail : 'arati@gmail.com',deptid : '1',courseid: '1',semid: '1'}
        this.state[1] = {rollNo : 2,studname : 'Siddharth Khore',studaddress : 'PUNE',studmobileno : '8552134556',studemail : 'sid@gmail.com',deptid : '2',courseid: '1',semid: '1'}
        this.state[2] = {rollNo : 3,studname : 'Rajendra Garade',studaddress : 'Daund',studmobileno : '7890123456',studemail : 'raj@gmail.com',deptid : '1',courseid: '2',semid: '2'}
        this.state[3] = {rollNo : 4,studname : 'Sagar Bade',studaddress : 'JALGAON',studmobileno : '9876543210',studemail : 'sagar@gmail.com',deptid : '1',courseid: '2',semid: '2'}
        this.state[4] = {rollNo : 5,studname : 'Sushil Bhile',studaddress : 'BMT',studmobileno : '8378007899',studemail : 'sushil@gmail.com',deptid : '1',courseid: '3',semid: '3'}
        this.state[5] = {rollNo :6,studname : 'Pooja Tathod',studaddress : 'SHEGAON',studmobileno : '7812345678',studemail : 'pooja@gmail.com',deptid : '1',courseid: '3',semid: '3'}
        this.state[6] = {rollNo :7,studname : 'Samruddhi Gole',studaddress : 'AJNAGAON',studmobileno : '987654310',studemail : 'sam@gmail.com',deptid : '1',courseid: '1',semid: '4'}
        this.state[7] = {rollNo :8,studname : 'Ankita Jagtap',studaddress : 'SATARA',studmobileno : '8605232887',studemail : 'ankita@gmail.com',deptid : '1',courseid: '1',semid: '4'}

        // this.state = {
        //   0: {rollno: 1, studname: "arati", studaddress: "BMT"},
        //   1: {rollno: 2, studname: "zz", studaddress: "c"},
        //   2: {rollno: 3, studname: "xx", studaddress: "d"},
        //   3: {rollno: 4, studname: "cc", studaddress: "e"},
        //   4: {rollno: 5, studname: "vv", studaddress: "f"},
        //   5: {rollno: 6, studname: "bb", studaddress: "g"},
        //   6: {rollno: 7, studname: "nn", studaddress: "h"}
        // }


        var promiseResponse
          
        axios({
          method:"GET",
          url : "http://127.0.0.1:8000/student/",
          config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(response => {
              promiseResponse = response.data;
              console.log("resposnse",promiseResponse);
              var data = response.data
              this.state = data
          })
            .catch(function (response) {
                //handle error
                console.log(response);
            });    
            
            console.log("this is state",this.state)
        
        this.tempArr = []
        this.arr = []

        for(var i in this.state){
          var r = this.state[i]

          for(var item in r){
            this.tempArr.push(r[item])
          }

          this.arr.push(this.tempArr)
          this.tempArr = []
        }

        // this.handleSubmit = this.handleSubmit.bind(this);

// this.state = {

//   "name":''
//         }

        this.res = null

// this.handleSubmit();
console.log(this.state)
        // self.setState({rollno: response.data.rollno})
              // self.setState({studname: response.data.studname})
              // self.setState({studemail: response.data.studemail})
              // self.setState({studaddress: response.data.studaddress})
              // self.setState({studmobileno: response.data.studmobileno})
              // self.setState({deptid: response.data.deptid})
              // self.setState({courseid: response.data.courseid})
              // self.setState({semid: response.data.semid})
          
        // this.state = {
        //     name:'',
        //     address:'',
        //     phone:'',
        //     email: '',
        //     password: '',
        //     deptkey:'',
        //     hasAgreed: false,
        //     sel: 0,
        //     teams: {
        //       'name':'sushil',
        //       'rollno':'16107'
        //     }
        // };

        this.flag = 0;

        this.countryData = [
          { value: 'USA', name: 'USA' },
          { value: 'CANADA', name: 'CANADA' }            
      ];

    }

//     handleSubmit(e) {

//       console.log('The form was submitted with the following data:');
//       console.log(this.state);

// var promiseResponse
// var self= this  

//       axios({
//         method:"GET",
//         url : "http://127.0.0.1:8000/student/",
//         config: { headers: {'Content-Type': 'multipart/form-data' }}
//           })
//           .then(response => {
//             promiseResponse = response.data;
//             console.log(promiseResponse);
//             self.setState({"name":"sushil"})
//             return promiseResponse; 
//          })
//           .catch(function (response) {
//               //handle error
//               console.log(response);
//           });    
          
//           setTimeout(function() { //Start the timer
//             this.setState({render: true}) //After 1 second, set render to true
//         }.bind(this), 1000)
//         }


    render(){
     
      var namesList = this.arr.map(function(name){
                      return <tr>
                                <td>{name[0]}</td>
                                <td>{name[1]}</td>
                                <td>{name[2]}</td>
                                <td>{name[3]}</td>
                                <td>{name[4]}</td>
                                <td>{name[5]}</td>
                                <td>{name[6]}</td>
                                <td>{name[7]}</td>
                      </tr>
                    })

      return <table border="1">
                <tbody>
                  <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Mobile No</th>
                    <th>Email Addres</th>
                    <th>Department ID</th>
                    <th>Course ID</th>
                    <th>Semester ID</th>
                  </tr>
                  
                  { namesList }
                </tbody>
             </table>
    }
  }
export default StudentList;
