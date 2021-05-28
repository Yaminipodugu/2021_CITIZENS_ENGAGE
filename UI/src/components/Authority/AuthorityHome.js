import React, { Component } from "react";
import './Authority.css'
import List from './list.js'
import Bulb from './Electric.svg'
import Road from './images/road.svg'
import Sewage from './sewage.svg'
import Water from './w4.svg'
import Garbage from './garbage.svg'
//import Logout from '../images/images/logout.jpg'
class Authority extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        {/* <img src={Bulb} alt="Hello"></img>  */}
        <div class="btn-group">
     <ul>
         <li> <List name="Electricity" icon={Bulb}></List></li>
         <li> <List name="Garbage" icon={Garbage}></List></li>
      <li><List name="Water" icon={Water}></List></li>
          <li><List name="Sewage" icon={Sewage}></List></li>
          <li><List name="Road" icon={Road}></List></li>
          <li><List name="Logout"></List></li>
          {/* <li><List name="Street Dogs" icon={Road}></List></li> */}
     </ul>
     
     
      
      
      
     </div></div>
   
    );
  }
}

export default Authority;
