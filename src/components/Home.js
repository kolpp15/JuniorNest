import React from "react";
import "animate.css"
import { Link }  from 'react-router-dom';
import HomeSteps from "./HomeSteps/HomeSteps";
import { useViewJobStyle } from "./Helper/StyleHelper";
import { homeImage, peopleWalking, flyingPaper } from "../assets/images";
import { Grid, Typography, Box, Button } from "@material-ui/core";

//-----------------------------------------------------------


function Home() {

  const classesViewJobStyle = useViewJobStyle();

  return (
    <>
     <Box sx={{ flexGrow: 1 }} className={classesViewJobStyle.companyName}>
      <Grid container justify="center" >
      

        <Grid item xs={12} sm={12} md={6} lg={6} >
        
            <Typography style={{paddingLeft: 25, color: "#29C7E9", fontSize: '3rem',  marginTop: 30}} >RECRUIT BEST</Typography>
            <Typography style={{paddingLeft: 25, color: "#5E72E4", fontSize: '6rem', fontWeight: 'bold', marginTop: -50}} >JUNIORS</Typography>

            <Typography style={{paddingLeft: 25, paddingRight: 25, paddingTop: 0, color: '#617A8E', fontSize: 'larger'}}> 
            
            <p>Are you tired of seeing all the job posts that says more than 2 years of experience?</p>
            <p>JuniorNest is only for job seekers having less than 2 years of experience.</p> 


            </Typography>

            <Button variant="contained" color="primary" style={{marginLeft: 25, marginTop: 30, marginBottom: 50}} disableElevation>
            <Link to="/customSearch" style={{ width: "100px", textDecoration: 'none', color: 'white'  }}>Find a Job</Link>
            </Button>    
        </Grid>  

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
             class="animate__animated animate__fadeInRight "
              src={homeImage}
              style={{ width: "-webkit-fill-available", marginTop: 80 }}
              alt="imgHome"
            />  
        </Grid>


        
      </Grid>
    </Box> 
    
      <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>

          <img
             class="animate__animated animate__fadeInLeft "
              src={peopleWalking}
              style={{ width: "90%", marginTop: 110 }}
              alt="imgHome"
          />  

          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} >
        
            <Typography style={{paddingLeft: 25, color: "#29C7E9", fontSize: '3rem',  marginTop: 150}} >Simple & Dynamic</Typography>
           

            <Typography style={{paddingLeft: 25, paddingRight: 25, paddingTop: 0, color: '#617A8E', fontSize: 'larger'}}> 
            
            <p>JuniorNest is an easy to use dynamic website where you can search, get up-to-date information, and apply for a job instantly.</p>

            </Typography>

     
           </Grid>  
      </Grid>
    

      <HomeSteps />
      </>
        


    
  );
}

export default Home;
