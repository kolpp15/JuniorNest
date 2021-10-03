import React from "react";
import { Box, CircularProgress, Button, Grid, DialogTitle } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import JobCard from "./JobCard";
import { useBoxStyles } from '../Helper/StyleHelper';
import { Bar } from "react-chartjs-2";
import App from "../GoogleTrends/App";
import Salary from "../Salary/Salary"

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


export default function CustomSearch(props) {    
  const classes = useBoxStyles();

  console.log('propsjobs>>>', props.jobs)
  
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          {props.loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <>
              {props.customSearch && (
                
                <Box my={2} display="flex" justifyContent="flex-end">
                  <Button onClick={props.fetchJobs}>
                    <CloseIcon sies={20} />
                    Custom Search
                  </Button>
                </Box>
              )}
              {props.jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </>
          )}
        </Grid>

        <Grid item xs={4}>
        {props.loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (

         <>

          {/* <Canada item={props.jobs}/> */}
          
          {props.jobs.length && 
          <Salary item={props.jobs}/>}

          {props.jobs.length && 
          <App item={props.jobs}/>}
         
          </>


          )}
         
        </Grid>
      </Grid>
    </>
  );
}
