import React from "react";
import theme from "./theme/theme";
import { Close as CloseIcon } from '@material-ui/icons';
import { Box, ThemeProvider, Grid, CircularProgress, Button } from "@material-ui/core";
import Header from "./components/Header/";
import Searchbar from "./components/Searchbar";
//import JobCard from "./components/Job/JobCard";
import about from "./components/About";
import CustomSearch from "./components/Job/CustomSearch";

import useApplicationData from "./components/Helper/AppHelper";
import NavBar from "./components/Nav/NavBar";

import {BrowserRouter as Router, Route } from 'react-router-dom';
//import About from './components/About';

import ProfileForm from './components/UserProfile/ProfileForm';
import NewJobPost from './components/Job/NewJobPost';
import JobDetails from './components/Job/JobDetails';
import UserApplyJob from "./components/Job/UserApplyJob";
import { homeImage } from "./assets/images";

import Home from "./components/Home";




export default () => {
  const { jobs, postApplication, setJobs, loading, customSearch, newJobPost, setNewJobPost, viewJob, setViewJob, fetchJobs, fetchJobsCustom, postJob, postUser, newUserProfile, setNewUserProfile, fetchUniqueJobDetails, newApplicationPost, setNewApplicationPost } = useApplicationData();

  return (
    <Router>

    <ThemeProvider theme={theme}>
      <NavBar />
      
      <Header openNewJobPost={() => setNewJobPost(true)} openNewUserProfile={() => setNewUserProfile(true)}/>
      {/* <ProfileForm closeModal={() => setNewUserProfile(false)} newUserProfile={newUserProfile} postUser={postUser} />
      <NewJobPost closeModal={() => setNewJobPost(false)} newJobPost={newJobPost} postJob={postJob} />
      <JobDetails job={viewJob} closeModal={()=> setViewJob({})} /> */}
      <Grid container justify="center">
        <Grid item xs={10}>
          <Searchbar fetchJobsCustom={fetchJobsCustom} />        
            <Route path="/" exact component={Home} /> 
            <Route path="/about" component={about} />

            <Route path="/customSearch" component={CustomSearch} />
            <Route path="/jobDetails/:jobId" children={ <JobDetails job={setJobs} jobs={jobs}/> } />            
            <Route path="/apply/:jobId" children={ <UserApplyJob newApplicationPost={newApplicationPost} postApplication={postApplication} job={setJobs} jobs={jobs}/> } />
            
            <Route path="/newPost" children={ <NewJobPost newJobPost={newJobPost} postJob={postJob} /> }/>

            <Route path="/profileForm" children={ <ProfileForm newUserProfile={newUserProfile} postUser={postUser} /> }/>

            

        </Grid>

      </Grid>    

    </ThemeProvider>
    </Router>
    
  );
};



// <Route path="/about">
//   <About />
// </Route>

// <
