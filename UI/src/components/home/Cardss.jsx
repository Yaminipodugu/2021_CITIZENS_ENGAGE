import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cardss.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import { useEffect, useState } from "react";

const Cardss = () => {
    const [transac,setTransac] = useState([]);
    const[solved,setSolved]=useState([]);
    const[active,setActive]=useState([]);
    const[water,setWater]=useState([]);
    const[electricity,setElectricity]=useState([]);
    const[garbage,setGarbage]=useState([]);
    const[road,setRoad]=useState([]);
    const[user,setUser]=useState([]);
  useEffect(() => {
    fetchTransac();
    fetchPendingTransac();
    fetchActive();
    fetchWater();
    fetchElectricity();
    fetchGarbage();
    fetchRoad();
    fetchUser();

  }, []);
  const fetchTransac = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/getComplaints");
    const response = await transacCountfromDb.json();
    setTransac(response);
  };   
  const fetchPendingTransac = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/closedComplaints");
    const response = await transacCountfromDb.json();
    setSolved(response);
  };
  const fetchActive = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/activeRegions");
    const response = await transacCountfromDb.json();
    setActive(response);
  };
  const fetchWater = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/waterComplaints");
    const response = await transacCountfromDb.json();
    setWater(response);
  };
  const fetchGarbage = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/garbageComplaints");
    const response = await transacCountfromDb.json();
    setGarbage(response);
  };
  const fetchRoad = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/roadComplaints");
    const response = await transacCountfromDb.json();
    setRoad(response);
  };
  const fetchElectricity = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/electricityComplaints");
    const response = await transacCountfromDb.json();
    setElectricity(response);
  };
  const fetchUser = async () => {
    const transacCountfromDb = await fetch("http://localhost:9000/getUsers");
    const response = await transacCountfromDb.json();
    setUser(response);
  };
  //const active = confirmed["value"] - recovered["value"] - deaths["value"];
  let cardDetails = [
    {
      style: styles.infected,
      text: "Complaints",
      value: transac.length,
      bottomText: "Number of Complaints in citizenEngage",
    },
    {
      style: styles.recovered,
      text: "Solved",
      value: solved.length,
      bottomText: "No of solved complaints in citizenEngage",
    },
    {
      style: styles.deaths,
      text: "Users",
      value: user.length,
      bottomText: "Number of users in citizenEngage",
    },
    {
      style: styles.active,
      text: "Active Regions",
      value: active.length,
      bottomText: "Number of active areas",
    },
    {
        style: styles.deaths,
        text: "Water",
        value: water.length,
        bottomText: "Number of water issues solved through citizenEngage",
      },
      {
        style: styles.active,
        text: "Road",
        value: road.length,
        bottomText: "Number of road issues solved through citizenEngage",
      },
      {
        style: styles.recovered,
        text: "Electricity",
        value: electricity.length,
        bottomText: "Number of electricity issues solved through citizenEngage",
      },
      {
        style: styles.infected,
        text: "Garbage",
        value: garbage.length,
        bottomText: "Number of garbage issues solved through citizenEngage",
      },

      
    
  ];
  
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardDetails.map((detail, index) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={2}
            className={cx(styles.Card, detail.style)}
            key={index}
            style={{ margin: "23.675px 23.675px", padding: "12px" }}
          >
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                <b>{detail.text}</b>
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={detail.value}
                  duration={2}
                  separator=","
                />
              </Typography>
             
              <Typography color="textSecondary" variant="body2">
               
              </Typography>
              <Typography color="textSecondary" variant="body2">
               
              </Typography>
              <Typography variant="body2">{detail.bottomText}</Typography>

            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cardss;
