import React, { useState, useEffect } from "react";
import theme from "./theme/theme";
import { Box, ThemeProvider, Grid, CircularProgress } from "@material-ui/core";
import Header from "./components/Header/";
import Searchbar from "./components/Searchbar";
import JobCard from "./components/Job/JobCard";
import NewJobModal from "./components/Job/NewJobModal";
import { firestore, app } from "./Firebase/config";



export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newJobModal, setNewJobModal] = useState(false);

  const fetchJobs = async () => {
    const req = await firestore.collection('job_posts').orderBy('post_date', 'desc').get();
    console.log("************",req);
    const tempJob = req.docs.map((job) => ({...job.data(), id: job.id, post_date: job.data().post_date.toDate()}));
    setJobs(tempJob);
    setLoading(false); 
  };

  const postJob = async jobDetails => {
    await firestore.collection('job_posts').add({
      ...jobDetails, 
      post_date: app.firestore.FieldValue.serverTimestamp(), 
    });
    fetchJobs();
  } 

  useEffect(() => {
    fetchJobs();
  }, [])



  return (
    <ThemeProvider theme={theme}>
      <Header openNewJobModal={() => setNewJobModal(true)} />
      
      <NewJobModal closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} postJob={postJob} />
      
      <Grid container justify="center">
        <Grid item xs={10}>
          <Searchbar />
            
            {loading ? (
              <Box display="flex" justifyContent="center"><CircularProgress /></Box>
            ) : (
              jobs.map((job) => <JobCard key={job.id} {...job} />
            ))}

        </Grid>
      </Grid>
    </ThemeProvider>
  );
};




