import React from "react";
import JobCard from "./JobCard";
import App     from "../GoogleTrends/App";
import Salary  from "../Salary/Salary";
import { Close as CloseIcon } from "@material-ui/icons";
import { Box, CircularProgress, Button, Grid } from "@material-ui/core";



export default function CustomSearch(props) {    

  console.log('propsjobs>>>', props.jobs)
  
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
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

        <Grid item xs={12} sm={12} md={4} lg={4}>
        {props.loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (

         <>
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
