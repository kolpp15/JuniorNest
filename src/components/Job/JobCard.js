import React from 'react';
import { Link } from 'react-router-dom';
import { differenceInBusinessDays }      from 'date-fns'
import { useJobCardStyle }               from '../Helper/StyleHelper.js';
import { Box, Typography, Grid, Button } from "@material-ui/core";


export default (props) => {

  const classes = useJobCardStyle();
  return (
    <Box p={2}  className={classes.wrapper}>
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

