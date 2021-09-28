import React from "react";
import { Box, CircularProgress, Button, Grid } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import JobCard from "./JobCard";

export default function CustomSearch(props) {    

  return (
    <>
      <Grid container>
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
         <>

         </>
        </Grid>
      </Grid>
    </>
  );
}
