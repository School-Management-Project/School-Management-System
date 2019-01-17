import React, { Component } from "react";
// import pune from "./img/pune.JPG";

class Home extends Component {
  render() {
    return (

        <div>
<div>
    <h3>
    School Management System Home Page!
    </h3>
</div>
          <img src={require('./img/pun.JPG')}  width="45%" height="40%" />
        </div>
    );
  }
}
 
export default Home;