import React from "react";
import { Box, CircularProgress, Button, Grid } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import JobCard from "./JobCard";
import useApplicationData from "../Helper/AppHelper";




// // javascipt plugin for creating charts
// import { Chart } from 'chart.js';

// // react plugin used to create charts
// import { Bar } from "react-chartjs-2";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// //import Box from "@material-ui/core/Box";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardHeader from "@material-ui/core/CardHeader";


// import { chartOptions, parseOptions, chartExample2 } from "../Chart/charts.js";

// import componentStyles from "../Chart/Dashboard.js";

// const useStyles = makeStyles(componentStyles);


export default function CustomSearch() {
  const { jobs, loading, customSearch, setViewJob, fetchJobs } =
    useApplicationData();




    // const classes = useStyles();

    // if (window.Chart) {
    //   parseOptions(Chart, chartOptions());
    // }
  
    // const titleTypographyPropsObj = {
    //   component: Box,
    //   variant: "h6",
    //   letterSpacing: ".0625rem",
    //   marginBottom: ".25rem!important",
    //   classes: {
    //     root: classes.textUppercase,
    //   },
    // }
  
    // const subheaderTypographyPropsObj = {
    //   component: Box,
    //   variant: "h2",
    //   marginBottom: "0!important",
    //   color: "initial",
    // }
  
    // const cardRootClasses = {
    //   root: classes.cardRoot,
    // }
  
    // const cardHeaderRootClasses = { root: classes.cardHeaderRoot }






  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <>
              {customSearch && (
                <Box my={2} display="flex" justifyContent="flex-end">
                  <Button onClick={fetchJobs}>
                    <CloseIcon siez={20} />
                    Custom Search
                  </Button>
                </Box>
              )}
              {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </>
          )}
        </Grid>
        <Grid item xs={6}>
        <>

    </>
        </Grid>
      </Grid>
    </>
  );
}
