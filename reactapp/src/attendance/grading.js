import React from 'react';
import Center from 'react-center-tag';

// import $ from 'jqkuery'; 


class Grade extends React.Component {
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
          console.log(this.state.fields);
    
          // try {
    
          //   $.ajax({
          //     type: "GET",
          //     dataType: "application/json",
          //     contentType: 'application/json',
          //     responseType:'application/json',
              
          //     xhrFields: {
          //       withCredentials: false
          //     },
          //     url: 'http://127.0.0.1:8000/List/',
          //     headers: {
          //       'Access-Control-Allow-Credentials' : false,
          //       'Access-Control-Allow-Origin':'*',
          //       'Access-Control-Allow-Methods':'GET',
          //       'Access-Control-Allow-Headers':'application/json',
          //     },
          //     data:{
          //         obj:this.state.fields
          //     }
          //   })
          //   .done(function( data ) {
          //         console.log(data);
          //   })
              
          //  } catch (e) {
          //   console.log(e);
          //  }
        
    }


  render() {

    return (
    <div id="main-registration-container">
     <div id="register">
        
        <Center><br></br><br></br><h1><i> Mark Performance </i> </h1>
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


        Grade:- <input type="radio" name="Grade" onChange={this.handleChange} value="A" />A
        <input type="radio" name="Grade" onChange={this.handleChange} value="B" />B
        <input type="radio" name="Grade" onChange={this.handleChange} value="C" />C
        <input type="radio" name="Grade" onChange={this.handleChange} value="D" />D<br></br><br></br>

       
        <br></br> <input type="submit" className="button"  value="Save"/>
        </form></Center>
    </div>
</div>

      );
  }


}


export default Grade;
