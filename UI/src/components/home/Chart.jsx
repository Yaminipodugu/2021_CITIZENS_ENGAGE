import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
    const[water,setWater]=useState([]);
    const[electricity,setElectricity]=useState([]);
    const[garbage,setGarbage]=useState([]);
    const[road,setRoad]=useState([]);
  useEffect(() => {
    fetchWater();
    fetchElectricity();
    fetchGarbage();
    fetchRoad();
    }, []);
    const fetchWater = async () => {
      const transacCountfromDb = await fetch("http://localhost:9000/waterchartComplaints");
      const response = await transacCountfromDb.json();
      setWater(response);
    };
    const fetchGarbage = async () => {
      const transacCountfromDb = await fetch("http://localhost:9000/garbagechartComplaints");
      const response = await transacCountfromDb.json();
      setGarbage(response);
    };
    const fetchRoad = async () => {
      const transacCountfromDb = await fetch("http://localhost:9000/roadchartComplaints");
      const response = await transacCountfromDb.json();
      setRoad(response);
    };
    const fetchElectricity = async () => {
      const transacCountfromDb = await fetch("http://localhost:9000/electricitychartComplaints");
      const response = await transacCountfromDb.json();
      setElectricity(response);
    };
  

  
  return (
    <div className={styles.container}>
<Bar
      data={{
        labels: ["Water", "Garbage", "Road", "Electricity"],
        datasets: [
          {
            label: "Complaints",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
              "rgba(242, 234, 0, 0.5)",
            ],
            hoverBackgroundColor: [
              "rgba(0, 77, 153)",
              "rgba(30, 102, 49)",
              "rgba(255, 51, 51)",
              "rgba(204, 153, 0)",
            ],
            data: [
              water.length,
              garbage.length,
              road.length,
              electricity.length,
            ],
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: { display: true, text: `Department wise Number of Complaints` },
      }}
    />
   



    </div>
  );
};

export default Chart;