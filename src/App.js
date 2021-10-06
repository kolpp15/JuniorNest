import React from "react";
// theme
import theme from "./theme/theme";
// components
import Home from "./components/Home";
import Header from "./components/Header/";
import Searchbar from "./components/Searchbar";
import About from "./components/About";
import NavBar from "./components/Nav/NavBar";
import NewJobPost from './components/Job/NewJobPost';
import JobDetails from './components/Job/JobDetails';
import CustomSearch from "./components/Job/CustomSearch";
import UserApplyJob from "./components/Job/UserApplyJob";
import useApplicationData from "./components/Helper/AppHelper";
import ProfileForm from './components/UserProfile/ProfileForm';
import EmployerDash from "./components/Dashboard/EmployerDash";
// styling
import AlertTemplate from "react-alert-template-snackbar-material-ui"
import { ThemeProvider, Grid } from "@material-ui/core";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// router dom
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}


export default () => {
  const { jobs, postApplication, setJobs, loading, customSearch, newJobPost, setNewJobPost, fetchJobs, fetchJobsCustom, postJob, postUser, newUserProfile, setNewUserProfile, newApplicationPost } = useApplicationData();
  
  return (
    <>

    <Router>
    <AlertProvider template={AlertTemplate} {...options}>

    <ThemeProvider theme={theme}>
      <NavBar />
      
      <Header openNewJobPost={() => setNewJobPost(true)} openNewUserProfile={() => setNewUserProfile(true)}/>
      
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
    
    </>
  );
};