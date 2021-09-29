import React from "react";
import { Box, Grid, Typography, Button, MenuItem } from "@material-ui/core";
import { Link } from 'react-router-dom';


export default (props) => (
  <Box py={8} style={{background: "linear-gradient(87deg, #28C7E9 ,#1171ef)"}} color="white">
    <Grid container justify="center">
      <Grid item xs={10}>
        <Box display="flex" justifyContent="space-between">
               <Typography
                variant="h5"
                component="p"
                color="white"

              >
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>juniorNest</Link>
              </Typography>


          <Box display="flex" direction="row" spacing={2}>
            <Box >
              <Button onClick={props.openNewUserProfile} variant="contained" style={{background: "#28C7E9"}} color="white" disableElevation>
              <Link to="/profileForm" style={{ width: "70px", textDecoration: 'none', color: 'white'  }}>Profile </Link>
              </Button>
            </Box>  
            <Box pl={2}>
              <Button onClick={props.openNewJobPost} variant="contained"  style={{background: "#28C7E9"}} color="white" disableElevation>
              <Link to="/newPost" style={{ textDecoration: 'none', color: 'white'  }}>
                New Post
              </Link>
              </Button>
            </Box>
          </Box>   
        </Box>
      </Grid>
    </Grid>
  </Box>
);