import React from 'react';
import Center from 'react-center-tag';

import {
  Route,
  HashRouter
}from "react-router-dom";


import Grade from './grading';


class Attendance extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      let b="s"
      let fields = this.state.fields;
      fields[b] = "click";
      this.setState({
        fields
      });
       console.log(this.state.fields);
//          window.location.assign('./grading.js'+this.state.fields.dept+'/some-action');
        }

  render() {
//    var message='You selected '+this.state.selectValue;
        if (this.state.fields.s) {

        return(    
          <HashRouter>
          <div>
           <ul className="header">
            </ul>
            <div className="content">
              <Route path="" component={Grade}/>
            </div>
            </div>
          </HashRouter>
        )
    }
  
    return (
    <div id="main-registration-container">
     <div id="register">
        
        <Center><br></br><br></br><h1><i> Attendance </i> </h1>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        

        <div><br></br><br></br><br></br><br></br><label>Department :-    </label>
        
        <select
        name="dept" 
        value={this.state.fields.dept} 
        onChange={this.handleChange}>
        <option  value="computer">Computer</option>
        <option  value="Electronics">Electronics</option>
        <option  value="Law">Law</option>
        </select>
        </div><br></br>  


        <div><br></br><label>Course :-    </label>
        
        <select 
        name="course"
        value={this.state.fields.course} 
        onChange={this.handleChange}>
        <option  value="MCA">MCA</option>
        <option  value="MCS">MCS</option>
        <option  value="Mtech">Mtech</option>
        </select>
        </div><br></br>  

        <div><br></br><label>Student :-    </label>
        
        <select 
        name="student name"
        value={this.state.fields.student} 
        onChange={this.handleChange}>
        <option  value="sid">sid</option>
        <option  value="khore">khore</option>
        <option  value="siddharth">siddharth</option>
        </select>
        </div><br></br><br></br>  

        <input type="radio" name="status" onChange={this.handleChange} value="Present" />Present
        <input type="radio" name="status" onChange={this.handleChange} value="Absent" />Absent<br></br><br></br>

       
        <br></br> <input type="submit" className="button"  value="Save"/>
        </form></Center>
    </div>
</div>

      );
  }

}

export default Attendance;
