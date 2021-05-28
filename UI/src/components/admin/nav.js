import React, { Component } from "react";
import './adminhome.css'
export default class Nav extends Component{
    render() {
        return (

            
                <div className ="sidebar">
                    <h2>CITIZENS ENGAGE</h2>
                    <ul>
                        <li><a href="/adminhome"><i className ="fas fa-home"></i>Home</a></li>
                        <li><a href="/viewcomplaints"><i className="fas fa-address-card"></i>View Complaints</a></li>
                        <li><a href="/marker"><i className="fas fa-address-card"></i>Map View</a></li>
                        {/* <li><a href="/pendingcomplaints"><i className="fas fa-blog"></i>Pending Complaints</a></li>
                        <li><a href="/closedcomplaints"><i className="fas fa-address-book"></i>Closed Complaints</a></li> */}
                        <li><a href="/viewusers"><i className="fas fa-address-card"></i>View Users</a></li>
                        <li><a href="/adminleaderboard"><i className="fas fa-address-card"></i>Leaderboard</a></li>
                        <li><a href="/recentlycreated"><i className="fas fa-address-card"></i>Recently Created</a></li>
                        <li><a href="/recentlyclosed"><i className="fas fa-address-card"></i>Recently Closed</a></li>
                        <li><a href="/topranked"><i className="fas fa-address-card"></i>Top Ranked</a></li>
                        <li><a href="/activeregions"><i className="fas fa-address-card"></i>Active Regions</a></li>
                        <li><a href="/adminlogout"><i className="fas fa-map-pin"></i>Logout</a></li>
                    </ul> 
                
                </div>
               
        );
}
}