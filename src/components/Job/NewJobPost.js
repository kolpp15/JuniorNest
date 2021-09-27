import React, { useState } from "react";
import { Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, IconButton, CircularProgress } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons"
import './AddField.css'
import { AddCircle, RemoveCircle } from "@material-ui/icons"

const initState = {
  title: "", // we have to add this // webdeveloper
  position: "Full time", // change this in db // full time, part time, contract
  remote: "Remote", // need to add this (boolean) // remote, in-office
  salary: "",
  skill: "",
  education: "",
  description: "",
  post_date: "",
  company_id: "mCRVmyjCLM2FPIZ57Dnw",
  questions: {}
}

export default (props) => {
  const [loading, setLoading] = useState(false)
  const [jobDetails, setJobDetails] = useState(initState)
  const [formValues, setFormValues] = useState([{ questions: "" }])

  let questionStorage = {}
  
  const handleChange = (e) => {
    e.persist();
    if (e.target.name.includes("question")) {
      questionStorage[e.target.name] = e.target.value    
      setJobDetails((oldState) => ({...oldState,
        ...questionStorage
      }));
    } else {
      setJobDetails((oldState) => ({...oldState, [e.target.name]: e.target.value,
      }));
    }
  }

  const handleSubmit = async () => {
    // for (const field in jobDetails) {
    //   if (typeof jobDetails[field] === "string"  && !jobDetails[field]) return;
    // }
    // if (!jobDetails,skills.length) return; 
    setLoading(true);

    let questionsObj = {}
    for (const question in jobDetails) {
      if (question.includes("question")) {
        questionsObj[question] = jobDetails[question]
        delete jobDetails[question]
      }
    }
    delete questionsObj.questions
    jobDetails.questions = questionsObj

    await props.postJob(jobDetails)
    setLoading(false);

  }


  let addFormFields = () => {
    setFormValues([...formValues, { questions: "" }])
  }

  let removeFormFields = (i) => {
      let newFormValues = [...formValues];
      newFormValues.splice(i, 1);
      setFormValues(newFormValues)
  }

  return (
    <>
    {/* <Dialog open={props.newJobPost} fullWidth> */}

    
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center"> 
          Post Job
        </Box>      
      </DialogTitle>  

      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput 
            onChange={handleChange} 
            name="title" 
            value={jobDetails.title}
            autoComplete="off" 
            placeholder="Job title *" 
            fullWidth 
            />
          </Grid>

          <Grid item xs={6}>
          <Select onChange={handleChange} fullWidth name="position" value={jobDetails.position} variant="filled" defaultValue="Full time">
            <MenuItem value="Full time">Full time</MenuItem>
            <MenuItem value="Part time">Part time</MenuItem>
            <MenuItem value="Contract">Contract</MenuItem>
          </Select>
          </Grid>

          <Grid item xs={6}>
            <FilledInput onChange={handleChange} name="education" value={jobDetails.education} placeholder="Education Level *" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <FilledInput onChange={handleChange} name="skill" value={jobDetails.skill} placeholder="Required Skills *" fullWidth />
          </Grid>

          <Grid item xs={6}>
          <Select onChange={handleChange} fullWidth name="remote" value={jobDetails.remote} variant="filled" defaultValue="Remote">
            <MenuItem value="Remote">Remote</MenuItem>
            <MenuItem value="In-Office">In-Office</MenuItem>
          </Select>
          </Grid>

          <Grid item xs={6}>
            <FilledInput onChange={handleChange} name="salary" value={jobDetails.salary} placeholder="Salary" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <FilledInput onChange={handleChange} name="description" value={jobDetails.description} placeholder="Job description *" fullWidth multiline rows={4} />
          </Grid>

          
            <FilledInput name="company_id" value={jobDetails.company_id} type="hidden" />

          <Grid item xs={12}>
            {formValues.map((element, index) => (
              <div className="form-new-question" key={index}>
                <FilledInput placeholder="Question to Applicants *" fullWidth name={`question${index}`} value={jobDetails.questions[`question${index}`]}
                onChange={handleChange} />
                {
                  index===0 ? 
                  <IconButton onClick={() => addFormFields()}>
                  <AddCircle />
                  </IconButton>
                  : 
                  <IconButton onClick={() => removeFormFields(index)}>
                  <RemoveCircle  color="primary"/>
                  </IconButton>               
                }
              </div>
            ))}
          </Grid>

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
    {/* </Dialog> */}
    </>
  );
};