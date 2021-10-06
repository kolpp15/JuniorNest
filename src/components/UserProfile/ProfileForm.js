import React, { useState } from "react";
import { storage }         from "../../Firebase/config";
import { useAlert }        from "react-alert";
import { v4 as uuid }      from 'uuid';
import { Box, Grid, FilledInput, DialogTitle, DialogContent, DialogActions, Typography, Button, CircularProgress, Card } from "@material-ui/core";


const initState = {
  first_name : "", 
  last_name  : "", 
  phone      : "", 
  email      : "",
  skill      : "",
  education  : "",
  description: "",
  linkedin   : "",
  user_id    : "GMtfe81Z9fbhkBCXKGpM",
  resume_id  : "",
}

export default (props) => {
  const [loading, setLoading]         = useState(false);
  const [userDetails, setUserDetails] = useState(initState);
  const [fileUpload, setFileUpload]   = useState(null);

  const alert = useAlert();
  
  const handleChange = (e) => {
    e.persist();
      setUserDetails((oldState) => ({...oldState, [e.target.name]: e.target.value,
      }));    
  }

  const handleSubmit = async (e) => {
    setLoading(true); 

    const resumeId = uuid();
    const storageRef = storage.ref('files').child(resumeId);
    await storageRef.put(fileUpload);
  
    await props.postUser(userDetails, resumeId)
    alert.success("Profile Update Success! Start Applying Now!");
    setTimeout (function(){
      window.location.href = '/'
    }, 2000);
    setLoading(false);
  }


  const readFiles = (e) => {
    const file = e.target.files[0];
    setFileUpload(file)
  };
  

  return (
    <>
    <Card>
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

          <Grid item xs={6}>

          <Box> 
            Resume: <input type="file" onChange={readFiles} />
          </Box>

          <Typography variant="caption" style={{color: "red"}}><br></br>*Required fields</Typography>
          </Grid>

          <Grid item xs={6}>
          <DialogActions>      
            <Box width="100%" display="flex" justifyContent="end">
               
                <Button onClick={handleSubmit} variant="contained" disableElevation color="primary" disabled={loading}>
                  {loading ? (<CircularProgress color="secondary" size={22} />
                  ) : (
                  "Save"
                  )}
                </Button>
            </Box>
           </DialogActions> 
          </Grid>


        </Grid>
      </DialogContent>

    </Card>                  
    </>
  );
};