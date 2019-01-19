import React, { Component } from "react";
// import pune from "./img/pune.JPG";
import './home.css'
class Home extends Component {
  render() {
    return (

        <div>
<div class="heading2">
    <h2>
    School Management System Home Page!
    </h2>
</div>
          <img src={require('./img/pun.JPG')}  width="45%" height="40%" alt="unable to load"/>
        </div>
    );
  }
}
 
export default Home;