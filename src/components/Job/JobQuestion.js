import React from "react";
import { Box, DialogContent, TextField } from "@material-ui/core";


export default (props) => {

  return (
  <DialogContent>      
    <Box> 
      {props?.questions && Object.values(props.questions).map((question, i) => {

        return (
          <>
          <Box display="flex">
          <TextField 
            key={`${i}`}
            label={question}
          />
          </Box>
          </>
          )
      })}

    </Box>
  </DialogContent>

  )
}
