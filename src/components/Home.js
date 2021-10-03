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
  Link,
  Slide
} from "@material-ui/core";
import { homeImage } from "../assets/images";
import { Bar, Radar } from "react-chartjs-2";
import { useBoxStyles } from "./Helper/StyleHelper";
import ReactDOM from "react-dom";
import App from "./GoogleTrends/App";
import { csv } from 'd3';
import "animate.css"

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



//read csv--------------
const row = d =>{
  d.TITLEX  = +d.TITLEX
  return d
}
//end read csv--------------

function Home() {

  const classes = useBoxStyles();

  //read csv--------------
  const [data, setData] = useState([]);
  
  useEffect(() => {
    csv('./salary-per-province-2020.csv').then(data => {
      setData(data);
      console.log('csv data: ', data);
    });
  }, []);
 //end read csv--------------
  return (
    
     <Box sx={{ flexGrow: 1 }}>
      <Grid container justify="center" >

        <Grid item xs={12} md={6} lg={6} >
        
            <DialogTitle style={{color: "primary"}}><h1>Web Developer Salary</h1></DialogTitle>
            <Typography style={{paddingLeft: 25, paddingRight: 25}}> Lsorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
            <Button variant="contained" color="primary" style={{marginLeft: 25, marginTop: 30, marginBottom: 50}} disableElevation>
            <Link to="/" style={{ width: "70px", textDecoration: 'none', color: 'white'  }}>FUCK</Link>
            </Button>

    
        </Grid>  

          {/* <Box >
            <DialogTitle>Web Developer Skills</DialogTitle>
            <Divider/>
            <Radar data={dataRadar} options={optionsRadar} />
          </Box> 
          <Box >
            <DialogTitle>Web Developer Skills</DialogTitle>
          </Box> */}
  
        <Grid item xs={12} md={6} lg={6}>
 
            <img
             class="animate__animated animate__fadeInRight "
             
              src={homeImage}
              style={{ width: "-webkit-fill-available" }}
              alt="gettheFUCKout"
            />  
        
        </Grid>

        {/* <Grid item xs={12} md={4} lg={4}  >
            <DialogTitle>Web Developer Salary</DialogTitle>
            <Bar data={dataBar} options={optionsBar} />
        </Grid>

        <Grid item xs={12} md={4} lg={4} >    
          <DialogTitle>Web Developer Salary</DialogTitle>
            <Bar data={dataBar} options={optionsBar} />     
        </Grid>

        <Grid item xs={12} md={4} lg={4}>   
          <DialogTitle>Web Developer Salary</DialogTitle>
          <Bar data={dataBar} options={optionsBar} />     
        </Grid> */}
       
      </Grid>
      </Box>      
    
  );
}

export default Home;
