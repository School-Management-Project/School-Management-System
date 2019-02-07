import React, {Component} from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import Home from "./home/Home";
import Department from "./department/Department";
import Student from "./student/studentMain";
import Teacher from "./teacher/teacherMain";
import Contact from "./contact/Contact";
import Sign_up from "./student/register/SignUpForm";
import AdminSignIn from './admin/Admin';
import sample from './practice/sample';

import './index.css'
import './App.css';

class App extends Component {
  render() {
    return (

      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/department">Department</NavLink></li>
            <li><NavLink to="/teacher/sign-in">Teacher</NavLink></li>
            <li><NavLink to="/student/sign-in">Student</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/department" component={Department}/>
            <Route path="/teacher" component={Teacher}/>
            <Route path="/student" component={Student}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/signup" component={Sign_up}/>
            <Route path="/admin" component={AdminSignIn}/>
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