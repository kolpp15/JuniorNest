import React, { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { format } from "date-fns";
import { useViewJobStyle } from '../Helper/StyleHelper';
import ApplyJobModal from "./ApplyJobModal";



export default (props) => {
  const [applyJob, setApplyJob] = useState(false);

  const handleClickOpen = () => {
    setApplyJob(true);
  };

  const handleClose = () => {
    setApplyJob(false);
  };


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

        <Box className={classes.info} display="flex" key="job-title">
          <Typography variant="caption" key="job-title-label">Job Title: </Typography>
          <Typography variant="body2" key="job-title-field">{props.job.title}</Typography>
        </Box>
        <Box className={classes.info} display="flex" key="contract-type">
          <Typography variant="caption" key="contract-type-label">Contract Type: </Typography>
          <Typography variant="body2" key="contract-type-field">{props.job.position}</Typography>
        </Box>
        <Box className={classes.info} display="flex" key="location">
          <Typography variant="caption" key="location-label">Location: </Typography>
          <Typography variant="body2" key="location-field">{props.job.remote}</Typography>
        </Box>
        <Box className={classes.info} display="flex" key="skills">
          <Typography variant="caption" key="skills-label">Skills: </Typography>
          <Typography variant="body2" key="skills-field">{props.job.skill}</Typography>
        </Box>
        <Box className={classes.info} display="flex" key="salary">
          <Typography variant="caption" key="salary-label">Salary: </Typography>
          <Typography variant="body2" key="salary-field">${props.job.salary}</Typography>
        </Box>
        <Box className={classes.info} display="flex" key="description">
          <Typography variant="caption" key="description-label">Description: </Typography>
          <Typography variant="body2" key="description-field">{props.job.description}</Typography>
        </Box>
        <Box className={classes.info} display="flex" key="posted-on">
          <Typography variant="caption" key="post-on-label">Posted On: </Typography>
          <Typography variant="body2" key="post-on-field">
            {props.job.post_date && format(props.job.post_date, "dd/MMM/yyyy HH:MM")}
          </Typography>
        </Box>

      </Box>

    </DialogContent>
    <DialogActions>
      <Button onClick={handleClickOpen} variant="outlined">Apply</Button>
    </DialogActions>

      <ApplyJobModal show={applyJob} close={handleClose} questions={props.job["questions"] } />
  
  </Dialog>
  );
};