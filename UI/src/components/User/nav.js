import React, { Component } from "react";
import './UserHome.css'
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
                        <li><a href="/user-home"><i className ="fas fa-home"></i>Home</a></li>
                        <li><a href="/complaint"><i className ="fas fa-user"></i>Register Complaint</a></li>
                        <li><a href="/viewusercomplaints"><i className="fas fa-address-card"></i>View Complaints</a></li>
                        <li><a href="/usermarker"><i className="fas fa-address-card"></i>Map View</a></li>
                        {/* <li><a href="/pendingusercomplaints"><i className="fas fa-blog"></i>Pending Complaints</a></li>
                        <li><a href="/closedusercomplaints"><i className="fas fa-address-book"></i>Closed Complaints</a></li> */}
                        <li><a href="/profile"><i className="fas fa-address-book"></i>My Profile</a></li>
                        <li><a href="/userleaderboard"><i className="fas fa-address-book"></i>Leaderboard</a></li>
                        <li><a href="/userLogout"><i className="fas fa-map-pin"></i>Logout</a></li>
                    </ul> 
                
                </div>
               
        );
}
}