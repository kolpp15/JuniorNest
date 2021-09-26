import React, { useState } from 'react';
import {Box, Button, Select, MenuItem, CircularProgress} from '@material-ui/core';
import { useSearchBarStyles } from '../Helper/StyleHelper';
import CustomSearch from '../Job/CustomSearch';


export default (props) => {
  const [loading, setLoading] = useState(false)
  const [jobSearch, setJobSearch] = useState({
    position: "Full time",
    remote: "Remote"
  })

  const handleChange = (e) => {
    e.persist();
    setJobSearch((oldState) => ({...oldState, [e.target.name]: e.target.value,
    }));
  }

  const search = async () => {
    setLoading(true);
    await props.fetchJobsCustom(jobSearch)
    setLoading(false);
  }
  const classes = useSearchBarStyles();
  return (

    <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
      <Select onChange={handleChange} value={jobSearch.position} name="position" disableUnderline variant="filled">
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select onChange={handleChange} value={jobSearch.remote} name="remote" disableUnderline variant="filled">
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-Office">In-Office</MenuItem>
      </Select>
      <Button disabled={loading} variant="contained" color="primary" disableElevation onClick={search}>
      {loading ? (<CircularProgress color="secondary" size={22} />
            ) : (
            "Search"
          )}
      </Button>
    </Box>

  )
}