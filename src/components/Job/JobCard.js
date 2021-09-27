import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from "@material-ui/core";
import { useJobCardStyle } from '../Helper/StyleHelper.js';
import { differenceInBusinessDays } from 'date-fns'
import { Link, Switch, Route } from 'react-router-dom';
import JobDetails from "./JobDetails.js";
import useApplicationData from "../Helper/AppHelper";


export default (props) => {



  const classes = useJobCardStyle();
  return (
    <Box p={2} className={classes.wrapper}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="subtitle1">Job Title: {props.title}</Typography>
          <Typography variant="subtitle1">Required Skills: {props.skill}</Typography>
        </Grid>
          
        <Grid item container direction="column" alignItems="flex-end" xs>

          <Grid item>
            <Typography variant="caption">
            Salary ${props.salary} | Posted {differenceInBusinessDays(Date.now(), props.post_date)} days ago 
            </Typography>
          </Grid>

          <Grid item>
            <Box mt={2}>

            <Button variant="outlined">


              <Link to={`/jobDetails/${props.id}`} style={{ textDecoration: 'none', color: '#637DBB'  }} >Check</Link>

            </Button>

            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

