import React, { Component } from "react";
//import './UserHome.css'
//var eid;
// var profile;
// var userhome;
// var complaint;
export default class Nav extends Component{
 
    constructor(props){
      super(props);
    }
    render() {       
        return (        
                <div className ="sidebar">
                    <h2>CITIZENS ENGAGE</h2>
                    <ul>
                    <li><a href="/complaint"><i className ="fas fa-user"></i>Register Complaint</a></li>
                        <li><a href="/user-home"><i className ="fas fa-home"></i>Home</a></li>
                        
                    </ul> 
                
                </div>
               
        );
}
}