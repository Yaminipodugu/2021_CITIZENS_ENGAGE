//import React from 'react';
import React, { Component } from "react";
import Userhome from './userhome.png';
import FeedBack from './Feedback';
import Complaint_registration from "./complaint_registration";
import './append.css';
//import Nav from './nav.js';
import {
    Navbar,
    Nav,
    
    NavDropdown,
    
  } from 'react-bootstrap'


function Update() {
	return (
		<div className="Update">
			<header className="App-header">
			<Nav.Link href="/complaint">Clone complaint</Nav.Link>

			<p  >
				If you are not satsfied with solution  or problem is not solved please reopen the complaint with proof like image regarding complaint. You can clone complaint above ☝️</p>
				
				<img src={Userhome} className="App-logo" alt="userhome" />
				
				
			</header>
			
			<FeedBack
				style={{zIndex:'1', position:'fixed', left:'4px!'}}
				position="left"
				numberOfStars={5}
				headerText="Grievance"
				bodyText="Feedback form"
				buttonText="Provide feedback"
				handleClose={() => console.log("handleclose")}
				handleSubmit={(data) => 
					

		  
         
          
      
          fetch("http://localhost:9000/getfeedback", {
            headers: {Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-origin':'url',
			'Access-Control-Allow-Credentials':'true',
			'POST':'GET'},
            method: 'POST',
            body: JSON.stringify(data)
          })
					.then((response) => { 
						if (!response.ok) {
							return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
						}
						response.json()
					}).then(() => {
						alert('Success!');
					}).catch((error) => {
						alert('Successfully submitted', error);
					})
				}
			
				handleButtonClick={() => console.log("handleButtonClick")}
			/>
		</div>
	);
}

export default Update;
