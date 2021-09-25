import React from "react";
import { Box, Grid, Typography, Button, MenuItem } from "@material-ui/core";
import { Link } from 'react-router-dom';


export default (props) => (
  <Box py={10} bgcolor="secondary.main" color="white">
    <Grid container justify="center">
      <Grid item xs={10}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">Open Job Listing</Typography> 
          <Box display="flex" direction="row" spacing={2}>
            <Box >
              <Button onClick={props.openNewUserProfile} variant="contained"  color="primary" disableElevation>
              <Link to="/profileForm" style={{ textDecoration: 'none' }}>Profile </Link>
              </Button>
            </Box>  
            <Box pl={2}>
              <Button onClick={props.openNewJobPost} variant="contained" color="primary" disableElevation>
              <Link to="/newPost" style={{ textDecoration: 'none' }}>
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