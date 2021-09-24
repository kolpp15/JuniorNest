
import React, { useState } from "react";
import { Box, Grid, FilledInput, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, IconButton, CircularProgress } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons"
import './AddField.css'
import { storage } from "../../Firebase/firebase";

const initState = {
  first_name: "", 
  last_name: "", 
  phone: "", 
  email: "",
  skill: "",
  education: "",
  description: "",
  linkedin: "",
  user_id: "GMtfe81Z9fbhkBCXKGpM",
 
}

export default (props) => {
  const [loading, setLoading] = useState(false)
  const [userDetails, setUserDetails] = useState(initState)

  
  const handleChange = (e) => {
    e.persist();
      setUserDetails((oldState) => ({...oldState, [e.target.name]: e.target.value,
      }));    
  }

  const handleSubmit = async () => {
    setLoading(true);
    await props.postJob(userDetails)
    closeModal();
  }

  const closeModal = () => {
    setUserDetails(initState)
    setLoading(false)
    props.closeModal()
  }

  return (
    <Dialog open={props.newJobModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center"> 
          User Information
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>      
      </DialogTitle>  

      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="first_name" 
            value={userDetails.title}
            autoComplete="on" 
            placeholder="First Name *" 
            disableUnderline fullWidth 
            />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="last_name" 
            value={userDetails.last_name} 
            placeholder="Last Name *" 
            disableUnderline fullWidth />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="phone" 
            value={userDetails.phone} 
            placeholder="Phone" 
            disableUnderline fullWidth />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="email" 
            value={userDetails.email} 
            placeholder="email" 
            disableUnderline fullWidth />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="skill" 
            value={userDetails.skill} 
            placeholder="skill" 
            disableUnderline fullWidth />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="education" 
            value={userDetails.education} 
            placeholder="Education" 
            disableUnderline fullWidth />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="linkedin" 
            value={userDetails.linkedin} 
            placeholder="linkedin URL" 
            disableUnderline fullWidth />
          </Grid>

          <Grid item xs={12}>
            <FilledInput 
            onChange={handleChange} 
            name="description" 
            value={userDetails.description} 
            placeholder="User description" 
            disableUnderline fullWidth multiline rows={4} />
          </Grid>          
          <FilledInput name="user_id" value={userDetails.user_id} type="hidden" />




        </Grid>
      </DialogContent>

      <DialogActions>      
        <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">*Required fields</Typography>
          <Button onClick={handleSubmit} variant="contained" disableElevation color="primary" disabled={loading}>
            {loading ? (<CircularProgress color="secondary" size={22} />
            ) : (
            "Post Job"
          )}
          </Button>
        </Box>
      </DialogActions> 
    </Dialog>
  );
};