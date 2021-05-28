import React, { Component } from "react";
import logo from '../images/thumbs-up.jpg';
import '../images/bgimage.css';
import './home.css';
import Nav from './Nav.js';
import { Bar } from 'react-chartjs-2';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import { useHistory, withRouter,Link } from "react-router-dom";
import { PieChart, Pie, Tooltip } from "recharts";
import Leaderboard from "./Leaderboard.jsx";
import Cards from "./Cards.jsx";
import styles from "./Stats.module.css";
import ActiveRegions from "./ActiveRegions";
import Chart from "./Chart.jsx";

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'complaints',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',


      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}
/*
 <div style={{'background-image' : 'url(' + logo +')' }} className = "auth-home" >
<div className="piechart">
    <h6><b><i>TotalComplaints</i></b></h6>
            <PieChart width={250} height={250}>
  <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label />
  <Tooltip/>
  </PieChart>
  
  </div>
  <div className="piechart1">
      <h6><b><i>DepartmentWiseSolvedComplaints</i></b></h6>
            <PieChart width={250} height={250}>
  <Pie data={data1} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label />
  <Tooltip/>
  </PieChart>
  
  </div>
  <div className="piechart2">
      <h6><b><i>ActiveRegions</i></b></h6>
            <PieChart width={250} height={250}>
  <Pie data={data2} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label />
  <Tooltip/>
  </PieChart>
  
  </div>
  
 
            </div>
           

*/


export default class Statspanel extends Component {
    render() {
    return (<div>
      <Nav />
    
      <div className={styles.container}>
      <h1><b>STATS PANEL</b></h1>
        <br />
        <Cards  />
       
        <Chart />
      
        <div className="row">
        <div className="col-lg-6">
          <Leaderboard />
        </div>

        <div className="col-lg-6">
          <ActiveRegions />
        </div>
      </div>
      </div>



      

    </div>

    );
  }
}
