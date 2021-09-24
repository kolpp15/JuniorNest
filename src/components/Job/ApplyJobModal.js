import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from "@material-ui/core";
import JobQuestion from "./JobQuestion";




export default (props) => {

  // const fetchQuestion = props.questions.map((question) => {
  //   return question
  // })

  return (

    <Dialog open={props.show} onClose={props.close}>
      
      <DialogTitle>Submit Application</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please answer all the questions the employer is asking
        </DialogContentText>
      </DialogContent>

      <JobQuestion questions={props.questions}/>

      <DialogActions>
        <Button onClick={props.close}>Cancel</Button>
        <Button onClick={props.close}>Submit Application</Button>
      </DialogActions>

  </Dialog>
  )
}