import React, { useState }         from 'react';
import { Link }                    from 'react-router-dom';
import useJobData                  from './jobData';
import { useSearchBarStyles }      from '../Helper/StyleHelper';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {Box, Button, Select, MenuItem, CircularProgress } from '@material-ui/core';



export default (props) => {
  const [loading, setLoading]     = useState(false)
  const [jobSearch, setJobSearch] = useState({
    title   : "",
    position: "Full time",
    remote  : "Remote",
  })
  const { items } = useJobData();

  const handleChange = (e) => {
    e.persist();
    setJobSearch((oldState) => ({
      ...oldState, 
      [e.target.name]: e.target.value,
    }));
  }


  const search = async () => {
    setLoading(true);
    await props.fetchJobsCustom(jobSearch)
    console.log('>>>', jobSearch)
    setLoading(false);
  }


  const handleOnSelect = (item) => {    
    setJobSearch((oldState) => ({
      ...oldState, 
      title: item.name,
    }));
    console.log('handleonselect>>', item);
  }


  const classes = useSearchBarStyles();

  return (
    <>
    <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
      
      <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            onChange={handleOnSelect}
            value={handleOnSelect}
            name="title"
            autoFocus
            />

      <Select onChange={handleChange} value={jobSearch.position} name="position" disableUnderline variant="filled">
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select onChange={handleChange} value={jobSearch.remote} name="remote" disableUnderline variant="filled">
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-Office">In-Office</MenuItem>
      </Select>

      <Button 
        disabled={loading} 
        variant="contained" 
        color="primary" 
        disableElevation 
        onClick={search}
      >
        {loading ? (<CircularProgress color="secondary" size={22} />
            ) : (
        <Link to={`/customSearch`}  style={{ textDecoration: 'none', color: 'white'  }}>
              Search
        </Link>
          )}
      </Button>
    </Box>
    </>
  )
}