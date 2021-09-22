import React from 'react';
import {Box, Button, Select, MenuItem} from '@material-ui/core';
import { useSearchBarStyles } from '../Helper/StyleHelper';


export default (props) => {
  const classes = useSearchBarStyles();
  return (
    <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
      <Select disableUnderline variant="filled" defaultValue="Full time">
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select disableUnderline variant="filled" defaultValue="Remote">
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-Office">In-Office</MenuItem>
      </Select>
      <Button variant="contained" color="primary" disableElevation>
        Search
      </Button>
    </Box>

  )
}