import React, { Component } from "react";
//import logo from '../images/thumbs-up.jpg';
import '../images/bgimage.css';
import './home.css';
import Nav from './Nav.js';
import { Bar } from 'react-chartjs-2';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import { useHistory, withRouter,Link } from "react-router-dom";
//import { PieChart, Pie, Tooltip } from "recharts";
import Leaderboard from "./Leaderboard.jsx";
import Cards from "./Cardss.jsx";
import styles from "./Stats.module.css";
import ActiveRegions from "./ActiveRegions";
import Chartt from "./Chartt.jsx";

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
  state = {
    transac: [],
    pendingTransac: [],
    water: [],
    garbage: [],
    road: [],
    electricity: [],
    active: [],
    data1: {}

  };
  componentDidMount() {
    this.fetchTransac();
    this.fetchPendingTransac();
    this.fetchWater();
    this.fetchGarbage();
    this.fetchRoad();
    this.fetchElectricity();
    this.fetchActive();
  };
  fetchTransac = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/getComplaints");
    const response = await transacCountfromDb.json();
    this.setState({ transac: response });
  };
  fetchPendingTransac = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/closedComplaints");
    const response = await transacCountfromDb.json();
    this.setState({ pendingTransac: response });
  };
  fetchWater = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/waterComplaints");
    const response = await transacCountfromDb.json();
    this.setState({ water: response });
  };
  fetchGarbage = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/garbageComplaints");
    const response = await transacCountfromDb.json();
    this.setState({ garbage: response });
  };
  fetchRoad = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/roadComplaints");
    const response = await transacCountfromDb.json();
    this.setState({ road: response });
  };
  fetchElectricity = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/ElectricityComplaints");
    const response = await transacCountfromDb.json();
    this.setState({ electricity: response });
  };
  fetchActive = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/activeRegions");
    const response = await transacCountfromDb.json();
    this.setState({ active: response });
  };
  render() {
    return (<div>
      <Nav />




      <div >

        <h1 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}><b>STATS PANEL</b></h1>
        <div class="green"><h6><b><i>Total complaints</i></b></h6>
          <h6>Total No Complaints:{this.state.transac.length}</h6>
          <h6>No of Solved complaints:{this.state.pendingTransac.length}</h6>

        </div>

        <div class="red"><h6><b><i>DepartmentWiseSolvedComplaints</i></b></h6>
          <h6>Water issues solved:{this.state.water.length}</h6>
          <h6>Road issues solved:{this.state.road.length}</h6>
          <h6>Electricity issues solved:{this.state.electricity.length}</h6>
          <h6>Garbage issues solved:{this.state.garbage.length}</h6>
        </div>

        <div class="blue"><h6><b><i>Active Regions</i></b></h6>
          <h6>{this.state.active}</h6>


        </div>

        <div class="row"><h6 class="primary"><b><i></i></b></h6>


        </div>



      </div>
      <div style={{

        alignItems: "right",
        width: "600px",
        height: "300px"

      }}>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: 'No of complaints per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />

      </div>

      <div className={styles.container}>

        <br />
        <Cards  />

        <Chartt />
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