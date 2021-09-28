import React from "react";
import {
  Grid,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
  makeStyles,
  Box,
  DialogTitle,
} from "@material-ui/core";
import { homeImage } from "../assets/images";
import { Bar, Radar } from "react-chartjs-2";

const dataBar = {
  labels: ["Red", "Erminio", "Brian", "Green", "Dan"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 0, 12, 12, 12, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
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

function About() {
  return (
    <>
      <Grid container spacing={9}>
        <Grid item xs={6}>
          <Box p={5} borderRadius="5%" bgcolor="#fff" boxShadow={1}>
            <DialogTitle>Who is the most Handsome guy?</DialogTitle>

            <Bar data={dataBar} options={optionsBar} />
          </Box>

          <Box p={5} borderRadius="5%" bgcolor="#fff" boxShadow={1}>
              <DialogTitle>Web Developer Skills</DialogTitle>
            <Radar data={dataRadar} options={optionsRadar} />
          </Box>
        </Grid>
        
        <Grid item xs={6}>
          <Box>
            <img
              src={homeImage}
              style={{ width: "-webkit-fill-available" }}
              alt="gettheFUCKout"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
