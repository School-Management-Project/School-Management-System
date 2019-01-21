import React, {Component} from 'react'
import './detail.css'

class StudentDeatil extends Component{
    constructor(){
        super();

        this.state = {
            
                    rollNo : 1,
                    name : 'sushil',
                    address : 'Baramati',
                    phone : '8378007899',
                    email : 'sushilmaxbhile@gmail.com',
                    dept : 'Computer Science'
        
        }
    }
    

    render(){
        return(
 <div class="detail">
         <p>
            <label>Roll No:- </label>
            {this.state.rollNo}
        </p>

        <p>
            <label>Name:- </label>
            {this.state.name}
        </p>

        <p>
            <label >Email:- </label>
            {this.state.email}
        </p>

        <p>
            <label>Address:- </label>
            {this.state.address}
        </p>

        <p>
            <label>Phone Number:- </label>
            {this.state.phone}
        </p>

        <p>
            <label>Department:- </label>
            {this.state.dept}
        </p>
        

         </div> );
    }
}

export default StudentDeatil;