import React, { useState, useEffect } from "react";
import {
  Box,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  Grid,
  Card
} from "@material-ui/core";
import { useViewJobStyle } from "../Helper/StyleHelper";
import { useParams } from "react-router";
import { firestore, app } from "../../Firebase/config";
import { Link } from "react-router-dom";
import App from "../GoogleTrends/App";
import Salary from "../Salary/Salary";
import { FormatAlignRight } from "@material-ui/icons";


export default (props) => {
  
  const [applyJob, setApplyJob] = useState(false);
  const [jobInfo, setJobInfo] = useState([]);
  const params = useParams();
  const classes = useViewJobStyle();

  const fetchUniqueJobDetails = async (inputId) => {
    const jobInfo = firestore.collection("job_posts").doc(inputId.jobId);
    const doc = await jobInfo.get();
    const tempJob = doc.data();
    setJobInfo(tempJob);
  };

  useEffect(() => {
    fetchUniqueJobDetails(params);
  }, []);


  return (
    <>
    
      <Grid container spacing={3} >
        <Grid item xs={12} sm={12} md={8} lg={8}>
        <Card style={{height: 370}}>
          <Box p={2} className={classes.wrapper}>

            <DialogTitle>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ß
              >
                {jobInfo.title}
              </Box>
            </DialogTitle>


            <DialogContent>
              <Box>
                <Box className={classes.info} display="flex" key="job-title">
                  <Typography variant="caption" key="job-title-label">
                    Job Title:{" "}
                  </Typography>
                  <Typography variant="body2" key="job-title-field">
                    {jobInfo.title}
                  </Typography>
                </Box>
                <Box className={classes.info} display="flex" key="contract-type">
                  <Typography variant="caption" key="contract-type-label">
                    Contract Type:{" "}
                  </Typography>
                  <Typography variant="body2" key="contract-type-field">
                    {jobInfo.position}
                  </Typography>
                </Box>
                <Box className={classes.info} display="flex" key="location">
                  <Typography variant="caption" key="location-label">
                    Location:{" "}
                  </Typography>
                  <Typography variant="body2" key="location-field">
                    {jobInfo.remote}
                  </Typography>
                </Box>
                <Box className={classes.info} display="flex" key="skills">
                  <Typography variant="caption" key="skills-label">
                    Skills:{" "}
                  </Typography>
                  <Typography variant="body2" key="skills-field">
                    {jobInfo.skill}
                  </Typography>
                </Box>
                <Box className={classes.info} display="flex" key="salary">
                  <Typography variant="caption" key="salary-label">
                    Salary:{" "}
                  </Typography>
                  <Typography variant="body2" key="salary-field">
                    ${jobInfo.salary}
                  </Typography>
                </Box>
                <Box className={classes.info} display="flex" key="description">
                  <Typography variant="caption" key="description-label">
                    Description:{" "}
                  </Typography>
                  <Typography variant="body2" key="description-field">
                    {jobInfo.description}
                  </Typography>
                </Box>
              </Box>
            </DialogContent>




            <Box mt={2} pr={8} display="flex" justifyContent="flex-end" >
              <Button variant="outlined">
                <Link
                  to={`/apply/${params.jobId}`}
                  style={{ textDecoration: "none", color: "#637DBB" }}>
                  Apply
                </Link>
              </Button>
            </Box>     
          
          </Box> 
        </Card>
        </Grid>
 

        <Grid item xs={12} sm={12} md={4} lg={4}>
          {props.jobs.length && 
          <Salary item={props.jobs}/>}     
        </Grid>
      </Grid>
    </>
  );
};
