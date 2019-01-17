import React, { Component } from 'react';
import { HashRouter as HashRouter, Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './student/register/SignUpForm';
import SignInForm from './student/login/SignInForm';
import Home from "./home/Home";
import Department from "./src1/Department";
import Student from "./student/studentMain";
import Teacher from "./teacher/teacherMain";
import Contact from "./src1/Contact";
import Sign_up from "./student/register/SignUpForm";
import './src1/index.css'

import './App.css';

class App extends Component {
  render() {
    return (

      <HashRouter>
        <div>
          {/* <h1>School Management System</h1> */}
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/department">Department</NavLink></li>
            <li><NavLink to="/student/sign-in">Student</NavLink></li>
            <li><NavLink to="/teacher/sign-in">Teacher</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
         
            <li class='rr'><NavLink to="/signin">Sign In</NavLink>or
                <NavLink to="/signup">Sign Up</NavLink>
            </li>
             
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/department" component={Department}/>
            <Route path="/student" component={Student}/>
            <Route path="/teacher" component={Teacher}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/signup" component={Sign_up}/>
          </div>
          </div>
        </HashRouter>


    );
  }
}

export default App;




// import React, { Component } from "react";
// import {
//   Route,
//   NavLink,
//   HashRouter
// }from "react-router-dom";



// class Main extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <div>
//           {/* <h1>School Management System</h1> */}
//           <ul className="header">
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/department">Department</NavLink></li>
//             <li><NavLink to="/student">Student</NavLink></li>
//             <li><NavLink to="/teacher">Teacher</NavLink></li>
//             <li><NavLink to="/contact">Contact</NavLink></li>
         
//             <li class='rr'><NavLink to="/signin">Sign In</NavLink>or<NavLink to="/signup">Sign Up</NavLink></li>
             
//           </ul>
//           <div className="content">
//             <Route exact path="/" component={Home}/>
//             <Route path="/department" component={Department}/>
//             <Route path="/student" component={Student}/>
//             <Route path="/teacher" component={Teacher}/>
//             <Route path="/contact" component={Contact}/>
//             <Route path="/signup" component={Sign_up}/>
//           </div>
//           </div>
//         </HashRouter>
//     );
//   }
// }
 
// export default Main;    