import React from "react";
import { Grid, Typography, Box, DialogTitle, Button, Card, CardActionArea, CardContent } from "@material-ui/core";
import { homeImage } from "../assets/images";
import { useViewJobStyle } from "./Helper/StyleHelper";
import "animate.css"
import { Link } from 'react-router-dom';
import HomeSteps from "./HomeSteps/HomeSteps";

//-----------------------------------------------------------


function Home() {

  const classesViewJobStyle = useViewJobStyle();

  return (
    <>
     <Box sx={{ flexGrow: 1 }} className={classesViewJobStyle.companyName}>
      <Grid container justify="center" >
      

        <Grid item xs={12} md={6} lg={6} >
        
            <Typography style={{paddingLeft: 25, color: "#29C7E9", fontSize: '3rem', fontWeight: 'bold', marginTop: 30}} >RECRUIT BEST</Typography>
            <Typography style={{paddingLeft: 25, color: "#5E72E4", fontSize: '3rem', fontWeight: 'bold', marginTop: -38}} >JUNIORS</Typography>

            <Typography style={{paddingLeft: 25, paddingRight: 25, paddingTop: 0, color: '#617A8E'}}> 
            
            <p>Are you tired of seeing all the job posts that says more than 2 years of experience?</p>
            <p>JuniorNest is only for job seekers having less than 2 years of experience.</p> 
            <p>It is an easy to use dynamic website where you can search, get up-to-date information, and apply for a job instantly.</p>

            </Typography>

            <Button variant="contained" color="primary" style={{marginLeft: 25, marginTop: 30, marginBottom: 50}} disableElevation>
            <Link to="/customSearch" style={{ width: "100px", textDecoration: 'none', color: 'white'  }}>Find a Job</Link>
            </Button>    
        </Grid>  

        <Grid item xs={12} md={6} lg={6}>
            <img
             class="animate__animated animate__fadeInRight "
              src={homeImage}
              style={{ width: "-webkit-fill-available", marginTop: 50 }}
              alt="gettheFUCKout"
            />  
        </Grid>
        

        <HomeSteps />

      </Grid>
      </Box> 

      </>
    
  );
}

export default Home;
