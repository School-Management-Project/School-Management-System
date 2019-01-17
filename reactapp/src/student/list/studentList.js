import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from "axios";
import 'react-dropdown/style.css'
import _ from 'lodash';
import './studentlist.css'

class StudentList extends Component {
    constructor() {
        super();

        this.state = {
          data: [
                {id: 1,name: "Simon Bailey"},
                {id: 2,name: "Thomas Burleson"},
                {id: 3,name: "Will Button"},
                {id: 4,name: "Ben Clinkinbeard"},
                {id: 5,name: "Kent Dodds"},
                {id: 6,name: "Trevor Ewen"},
                {id: 7,name: "Aaron Frost"}
            ]
        }
  
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
console.log(this.state.sel)
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
          alert(this.state)
          console.log(this.state)

            e.preventDefault(
                console.log(this.state)
                // axios.get(`http://127.0.0.1:8000/student/1/`)
                // .then((res) => {
                //     console.log(res)
                // } )
            );
        }
        alert("something left empty");

    }

    render() {
        let rows = this.state.data.map(person => {
          return <PersonRow key = {
            person.id
          }
          data = {
            person
          }
          />
        })
        return <table class="table">
          <tbody> {
            rows
          } </tbody> </table>
      }
    }
    
    const PersonRow = (props) => {
      return (
        <tr class="row">
          <td class="td">
            { props.data.id }
          </td>
          <td class="td">
            { props.data.name }
          </td>
        </tr>
      );
    }
  
export default StudentList;









  