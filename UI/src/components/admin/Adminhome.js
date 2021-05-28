import React, { Component } from "react";
//import logo from '../images/userhome.jpg';
import '../images/bgimage.css';
import './adminhome.css'
import Nav from './nav.js';
//import SignUp from "../components/signup.component";
//import User from "./components/user"
/*function Login(prop){
    const onSubmit =() => {
        
        prop.history.push('/User');
    }*/
    export default class Adminhomeome extends Component{
    render() {
        return (

            <div className = "adminhomebg">
                <div className="wrapper">
                    <Nav/>             
                    <div className="main_content">
                        <div className="header">Admin Home</div>                         
                    </div>                      
                </div>      
             
                
           </div>                  
        );
}
}