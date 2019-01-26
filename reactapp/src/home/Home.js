import React, { Component } from "react";
// import pune from "./img/pune.JPG";
import './home.css'
class Home extends Component {
  render() {
    return (
      <div>
        <div class="heading2">
          <h2>School Management System!</h2>
        </div>

        <div className="Info">
          <label className="label" htmlFor="info">Information about the project:-</label>

          <div className="Inner">
            <b>Implemented Main Components as follows:-</b>

            <ul classname='heading'>

              <li className="items">Home Page</li>
              <li className="items">Department Page</li>
              <li className="items">Student Page</li>
              <li className="items">Teacher Page</li>
              <li className="items">Admin Page</li>
              <li className="items">Contact Page</li>

            </ul>

            <b>Student Component Have:-</b>
            <ul classname='heading'>

              <li className="items">Register Page</li>
              <li className="items">Login Page</li>

            </ul>

            <b>Teacher Component Have:-</b>
            <ul classname='heading'>

              <li className="items">Register Page</li>
              <li className="items">Login Page</li>
              <li className="items">Student List Page</li>
              <li className="items">Student Detail Page</li>
              <li className="items">Student Attendance Page</li>
              <li className="items">Student Exam Grade Page</li>

            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;