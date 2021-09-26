import React, { useState } from "react";
import { Box, Grid, FilledInput, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, IconButton, CircularProgress } from "@material-ui/core";
import Upload from "./Upload";
import { Close as CloseIcon } from "@material-ui/icons";
// import useApplicationData from "../Helper/AppHelper";


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
  // const { postUser } = useApplicationData();

  
  const handleChange = (e) => {
    e.persist();
      setUserDetails((oldState) => ({...oldState, [e.target.name]: e.target.value,
      }));    
  }

  const handleSubmit = async () => {
    setLoading(true);
    await props.postUser(userDetails)

  }

  return (
    <>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center"> 
          User Information

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
            fullWidth 
            />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="last_name" 
            value={userDetails.last_name} 
            placeholder="Last Name *" 
            fullWidth />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="phone" 
            value={userDetails.phone} 
            placeholder="Phone" 
            fullWidth />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="email" 
            value={userDetails.email} 
            placeholder="email" 
            fullWidth />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="skill" 
            value={userDetails.skill} 
            placeholder="Skills" 
            fullWidth />
          </Grid>

          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="education" 
            value={userDetails.education} 
            placeholder="Education" 
            fullWidth />
          </Grid>

          <Grid item xs={12}>
            <FilledInput 
            onChange={handleChange} 
            name="linkedin" 
            value={userDetails.linkedin} 
            placeholder="Linkedin URL" 
            fullWidth />
          </Grid>

          <Grid item xs={12}>
            <FilledInput 
            onChange={handleChange} 
            name="description" 
            value={userDetails.description} 
            placeholder="Summary" 
            fullWidth multiline rows={4} />
          </Grid>          
          <FilledInput name="user_id" value={userDetails.user_id} type="hidden" />

          <Grid item xs={12}>
            <Upload 
            onChange={handleChange} 
            />
          </Grid>

        </Grid>
      </DialogContent>

      <DialogActions>      
        <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">*Required fields</Typography>
          <Button onClick={handleSubmit} variant="contained" disableElevation color="primary" disabled={loading}>
            {loading ? (<CircularProgress color="secondary" size={22} />
            ) : (
            "Save"
          )}
          </Button>
        </Box>
      </DialogActions> 
    </>
  );
};