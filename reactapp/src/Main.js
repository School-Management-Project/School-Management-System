import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
}from "react-router-dom";

import Home from "./Home";
import Department from "./Department";
import Student from "./Student";
import Teacher from "./Teacher";
import Contact from "./Contact";
import Sign_up from "./Sign_up";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>School Management System</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/department">Department</NavLink></li>
            <li><NavLink to="/student">Student</NavLink></li>
            <li><NavLink to="/teacher">Teacher</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
         
            <li class='rr'><NavLink to="/signin">Sign In</NavLink>or<NavLink to="/signup">Sign Up</NavLink></li>
             
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
 
export default Main;    