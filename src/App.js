import React from "react";
import theme from "./theme/theme";
import { Close as CloseIcon } from '@material-ui/icons';
import { Box, ThemeProvider, Grid, CircularProgress, Button } from "@material-ui/core";
import Header from "./components/Header/";
import Searchbar from "./components/Searchbar";
import JobCard from "./components/Job/JobCard";
import NewJobModal from "./components/Job/NewJobModal";
import ViewJobModal from "./components/Job/ViewJobModal";
import useApplicationData from "./components/Helper/AppHelper";
import NavBar from "./components/Nav/NavBar";






export default () => {
  const { jobs, loading, customSearch, newJobModal, setNewJobModal, viewJob, setViewJob, fetchJobs, fetchJobsCustom, postJob } = useApplicationData();


  return (
    <ThemeProvider theme={theme}>
      <NavBar />

      <Header openNewJobModal={() => setNewJobModal(true)} />
      
      <NewJobModal closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} postJob={postJob} />
      <ViewJobModal job={viewJob} closeModal={()=> setViewJob({})} />


      <Grid container justify="center">
        <Grid item xs={10}>
          <Searchbar fetchJobsCustom={fetchJobsCustom} />
            
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
              {jobs.map((job) => (<JobCard open={() => setViewJob(job)} key={job.id} {...job} />))}
              </>
            )}

        </Grid>
      </Grid>
    </ThemeProvider>
  );
};




