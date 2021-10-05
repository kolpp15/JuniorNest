import React from "react";
import theme from "./theme/theme";
import {  ThemeProvider, Grid, Box } from "@material-ui/core";
import Header from "./components/Header/";
import Searchbar from "./components/Searchbar";
import About from "./components/About";
import CustomSearch from "./components/Job/CustomSearch";
import useApplicationData from "./components/Helper/AppHelper";
import NavBar from "./components/Nav/NavBar";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileForm from './components/UserProfile/ProfileForm';
import NewJobPost from './components/Job/NewJobPost';
import JobDetails from './components/Job/JobDetails';
import UserApplyJob from "./components/Job/UserApplyJob";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-snackbar-material-ui"
import Home from "./components/Home";
import EmployerDash from "./components/Dashboard/EmployerDash";
import { erminioFace } from "./assets/images";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}


export default () => {
  const { jobs, postApplication, setJobs, loading, customSearch, newJobPost, setNewJobPost, viewJob, setViewJob, fetchJobs, fetchJobsCustom, postJob, postUser, newUserProfile, setNewUserProfile, fetchUniqueJobDetails, newApplicationPost, setNewApplicationPost } = useApplicationData();
  
  return (
    <>

    <Router>
    <AlertProvider template={AlertTemplate} {...options}>

    <ThemeProvider theme={theme}>
      <NavBar />
      
      <Header openNewJobPost={() => setNewJobPost(true)} openNewUserProfile={() => setNewUserProfile(true)}/>
      {/* <ProfileForm closeModal={() => setNewUserProfile(false)} newUserProfile={newUserProfile} postUser={postUser} />
      <NewJobPost closeModal={() => setNewJobPost(false)} newJobPost={newJobPost} postJob={postJob} />
      <JobDetails job={viewJob} closeModal={()=> setViewJob({})} /> */}
      <Grid container justify="center">
        <Grid item xs={10}>
          <Searchbar fetchJobsCustom={fetchJobsCustom} />        

          <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/about" component={About} />
            <Route path="/employer" component={EmployerDash} />
            <Route path="/customSearch" children={ <CustomSearch jobs={jobs} loading={loading} customSearch={customSearch} fetchJobs={fetchJobs} fetchJobsCustom={fetchJobsCustom}/> }  />
            <Route path="/jobDetails/:jobId" children={ <JobDetails job={setJobs} jobs={jobs}/> } />            
            <Route path="/apply/:jobId" children={ <UserApplyJob newApplicationPost={newApplicationPost} postApplication={postApplication} job={setJobs} jobs={jobs}/> } />
            
            <Route path="/newPost" children={ <NewJobPost newJobPost={newJobPost} postJob={postJob} /> }/>

            <Route path="/profileForm" children={ <ProfileForm newUserProfile={newUserProfile} postUser={postUser} /> }/>
          </Switch>
            

        </Grid>

      </Grid>    

    </ThemeProvider>
    </AlertProvider>
    </Router>

    {/* <Box style={{
        marginTop: -160,
        marginBottom: 20,
        width: 'full',
        height: 300,
        backgroundImage: `url(${erminioFace})`
      }}/> */}
    
    </>
  );
};