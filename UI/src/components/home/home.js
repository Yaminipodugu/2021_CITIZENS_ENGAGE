import React, { Component } from "react";
import logo from '../images/thumbs-up.jpg';
import '../images/bgimage.css';
import './home.css';
import Nav from './Nav.js';
import { Grid } from 'gymnast';
//import { useHistory, withRouter,Link } from "react-router-dom";
import {PieChart, Pie, Tooltip} from "recharts";
const data=[
    {name:"No of  complaints solved",value: 56},
    {name:"Total No of  complaints",value: 100},
        ];
 const data1=[
    {name:"Water issues solved",value: 25},
    {name:"Road issues solved",value: 10},
    {name:"Electricity issues solved",value:15},
    {name:"Garbage issues solved",value:6},
        ];
const data2=[
    {name:"Kondapur",value: 10},
    {name:"Balapur",value: 8},
    {name:"kukatpally",value:5},
    {name:"Shaikpet",value:15},
    {name:"Ecil",value:7},
        ];
        


    
        
           
        
        
        
        


        
export default class Home extends Component {
    state={
        transac:[],
        pendingTransac:[]
    };  
    componentDidMount(){
        this.fetchTransac();
        this.fetchPendingTransac();
    };
     fetchTransac = async () => {
        const transacCountfromDb = await fetch("http://localhost:9000/getComplaints");
        const response = await transacCountfromDb.json();
        this.setState({transac:response});
      };
      fetchPendingTransac = async () => {
        const transacCountfromDb = await fetch("http://localhost:9000/pendingComplaints");
        const response = await transacCountfromDb.json();
        this.setState({pendingTransac:response});
      };
      
    render() {
        return (<div>
            <Nav/>
        
           
    
            <h1 style={{'background-image' : 'url(' + logo +')' }} className = "auth-home" ></h1>

            

  
 
            </div>

           
           
            

          
            
            
        );
    }
}