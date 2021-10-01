import React, { useEffect, useState } from "react";
import {
  Grid,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
  makeStyles,
  Box,
  Item,
  DialogTitle,
  Button,
  Divider,
  Container,
} from "@material-ui/core";
import { homeImage } from "../assets/images";
import { Bar, Radar } from "react-chartjs-2";
import { useBoxStyles } from "./Helper/StyleHelper";
import ReactDOM from "react-dom";
import App from "./GoogleTrends/App";
import { csv } from 'd3';
//-----------------------------------------------------------

const dataBar = {
  labels: ["DB", "Front-End", "Back-End", "test", "test"],
  datasets: [
    {
      label: "# of Votes",
      data: [10, 8, 9, 7, 12, 3],
      backgroundColor: [
        "#F54C48",
        "#2DCEB1",
        "#6B6BE4",
        "rgba(30,165,239, 1)",
        "rgb(251,163,64, 0.9)",
      ],
      borderColor: [
        "#F54C48",
        "#2DCEB1",
        "#6B6BE4",
        "rgba(30,165,239, 1)",
        "rgb(251,163,64, 0.9)",
      ],
      borderWidth: 1,
    },
  ],
};

const optionsBar = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

//-----------------------------------------------------------

const dataRadar = {
  labels: ["React", "Ruby", "JavaScript", "Python", "TypeScript", "MaterialUI"],
  datasets: [
    {
      label: "# of Votes",
      data: [9, 0, 5, 6, 7, 9],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const optionsRadar = {
  scale: {
    ticks: { beginAtZero: true },
  },
};

//-----------------------------------------------------------
const row = d =>{
  d.TITLEX  = +d.TITLEX
  return d
}
function Home() {

  const classes = useBoxStyles();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    csv('./salary-per-province-2020.csv').then(data => {
      setData(data);
      console.log('csv data: ', data);
    });
  }, []);
 
  return (
    <>
      <Grid container spacing={9}>
        <Grid item xs={6}>
          <Box className={classes.wrapper} mb={3}>
            <DialogTitle>Web Developer Salary</DialogTitle>
            <Bar data={dataBar} options={optionsBar} />
          </Box>
          
          {/* <Box className={classes.wrapper}>
            <DialogTitle>Web Developer Skills</DialogTitle>
            <Divider/>
            <Radar data={dataRadar} options={optionsRadar} />
          </Box> */}
          <Box className={classes.wrapper}>
            <DialogTitle>Web Developer Skills</DialogTitle>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box className={classes.wrapper}>
            <img
              src={homeImage}
              style={{ width: "-webkit-fill-available" }}
              alt="gettheFUCKout"
            />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box className={classes.wrapper}>
            {/* <App /> */}
          </Box>
        </Grid>

      </Grid>

     <Container>
      <Grid container spacing={8}>
      
        <Grid item xs={12} md={4} lg={4} className={classes.wrapper}>
            <DialogTitle>Web Developer Salary</DialogTitle>
            <Bar data={dataBar} options={optionsBar} />
        </Grid>

        <Grid item xs={12} md={4} lg={4} className={classes.wrapper}>    
          <DialogTitle>Web Developer Salary</DialogTitle>
            <Bar data={dataBar} options={optionsBar} />     
        </Grid>

        <Grid item xs={12} md={4} lg={4}>   
          <DialogTitle>Web Developer Salary</DialogTitle>
            <Bar data={dataBar} options={optionsBar} />     
        </Grid>
        
      </Grid>
      </Container>      
    </>
  );
}

export default Home;
