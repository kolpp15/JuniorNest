import React from 'react'
import { Box, CircularProgress, Button } from "@material-ui/core";
import { Close as CloseIcon } from '@material-ui/icons';
import JobCard from "./JobCard";
import useApplicationData from "../Helper/AppHelper";



export default function CustomSearch() {
  const { jobs, loading, customSearch, setViewJob, fetchJobs } = useApplicationData();

  return (
  <>
    {loading ? (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    ) : (
      <>
        {customSearch && (
          <Box my={2} display="flex" justifyContent="flex-end">
            <Button onClick={fetchJobs}>
              <CloseIcon siez={20} />
              Custom Search
            </Button>
          </Box>
        )}
      {jobs.map((job) => (<JobCard key={job.id} {...job} />))}

      </>
    )} 
  
  </>  
  )
}
