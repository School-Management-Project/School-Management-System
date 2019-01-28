import React, { Component } from "react";

import './department.css'


class Department extends Component {
  render() {
    var vals = {
      'Computer Science': ['MCA', 'MSc', 'MTech'],
      'Chemistry': ['Organic Chemistry', 'Physical Chemistry', 'In-Organic Chemistry', 'Spectoscopy Chemistry'],
      'Mathematics': ['Algebra', 'Geometry', 'Statistics']
    }
    return (
      <div className="inner">
        <h2>List of Department In Our College</h2>
        {
          Object.keys(vals).map((key, index) => (
            <ul classname='heading' key={index} type='circle'><b>{key}</b><br /><br />

              {vals[key].map(function (name, index) {
                return <li className="items" type='square' key={index}>{name}</li>
              })}
              <br /></ul>
          ))
        }
      </div>
    );
  }
}

export default Department;