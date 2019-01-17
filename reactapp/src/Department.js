import React, { Component } from "react";
 
class Department extends Component {
  render() {
    var vals={
      'Computer Science':['MCA','MSc','MTech'],
      'Chemistry':['BSc','MSC']
    }
    return (
    <div>
      {
        Object.keys(vals).map((key, index) => ( 
        <ul classname='raj' key={index} type='circle'><b>****{key}****</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           {vals[key].map(function(name, index){
                    return <li  type ='square' key={ index }>{name}</li> 
                  })}
          </ul> 
        ))
      }
    </div>
    );
  }
}

export default Department;