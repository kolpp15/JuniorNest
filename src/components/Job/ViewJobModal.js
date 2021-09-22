import React from 'react';
import { 
  Box, 
  Grid, 
  FilledInput, 
  Select, 
  MenuItem, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  makeStyles, 
  Typography, 
  Button, 
  IconButton, 
  CircularProgress 
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { format } from "date-fns";
import { useViewJobStyle } from '../Helper/StyleHelper';



export default (props) => {
  const classes = useViewJobStyle();

  return (
  <Dialog open={!!Object.keys(props.job).length} fullWidth>
    <DialogTitle>
      <Box display="flex" justifyContent="space-between" alignItems="center"> 
        {props.job.title}
        <IconButton onClick={props.closeModal}>
          <CloseIcon />
        </IconButton>
      </Box>      
    </DialogTitle>  

    <DialogContent>
      <Box>

        <Box className={classes.info} display="flex">
          <Typography variant="caption">Job Title: </Typography>
          <Typography variant="body2">{props.job.title}</Typography>
        </Box>
        <Box className={classes.info} display="flex">
          <Typography variant="caption">Contract Type: </Typography>
          <Typography variant="body2">{props.job.position}</Typography>
        </Box>
        <Box className={classes.info} display="flex">
          <Typography variant="caption">Location: </Typography>
          <Typography variant="body2">{props.job.remote}</Typography>
        </Box>
        <Box className={classes.info} display="flex">
          <Typography variant="caption">Skills: </Typography>
          <Typography variant="body2">{props.job.skill}</Typography>
        </Box>
        <Box className={classes.info} display="flex">
          <Typography variant="caption">Salary: </Typography>
          <Typography variant="body2">${props.job.salary}</Typography>
        </Box>
        <Box className={classes.info} display="flex">
          <Typography variant="caption">Description: </Typography>
          <Typography variant="body2">{props.job.description}</Typography>
        </Box>
        <Box className={classes.info} display="flex">
          <Typography variant="caption">Posted On: </Typography>
          <Typography variant="body2">
            {props.job.post_date && format(props.job.post_date, "dd/MMM/yyyy HH:MM")}
          </Typography>
        </Box>

      </Box>

    </DialogContent>
    <DialogActions>
      <Button variant="outlined" component="a" href="https://www.google.ca/" target="_blank">Apply</Button>
    </DialogActions>

  </Dialog>
  );
};