import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom';

import './contact.css'

import Home from '../home/Home'


class Contact extends Component {

  handleSubmit(e) {
    alert("Response Noted Down! Thank You!!")

    let path = `/`;
    this.props.history.push(path);
    e.preventDefault();

  }
  
  render() {
    return (
      <div>

        <h3>Contact Form</h3>

        <div className="FormCenter">
          <form className="FormFields" onSubmit={this.handleSubmit}>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label for="country">Country</label>
                <select id="country" name="country">
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Caada">Canada</option>
                </select>

                <label for="subject">Subject</label>
                <textarea name="body"/>

                <div className="FormField">
                 <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Submit</NavLink>
              </div>

            </form>

            <Route exact path="/" component={Home}></Route>

        </div>
      </div>
    );
  }
}

export default Contact;