import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, FilledInput, DialogTitle, DialogContent, DialogActions, DialogContentText, Button, CircularProgress } from "@material-ui/core";
import { useParams } from "react-router";
import { firestore, storage } from "../../Firebase/config";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useAlert } from "react-alert";
import emailjs from "emailjs-com";
import { v4 as uuid } from 'uuid';


const initState = {
  cover_letter: "", 
  status: "Open",
  apply_date: "",
  job_post_id: "",
  user_id: "GMtfe81Z9fbhkBCXKGpM",
  questions_answers: {},
};

const emailJsInfo = {
  email: "erminiomendes@gmail.com",
  first_name: "Emily",
  last_name: "Mendes",
  company_name: "Amazon",
  position: "Web Developer",
  phone: "6046126456",
  resume_id: "faba5031-08ba-4b2a-be99-f1bb1a600213",
  // resume_url: storage.ref('files').child("faba5031-08ba-4b2a-be99-f1bb1a600213").getDownloadURL(),
}




// const resumeId = uuid()
// const storageRef = storage.ref('files').child(resumeId);
// storageRef.getDownloadURL().then((url) => {
//   //fileRef.set(url);
//   //const newState = [...fileUrl, { resumeId, url }];
//   //setFileUrl(newState);
// setFileUrl(url);
// });

export default (props) => {
  const [loading, setLoading] = useState(false);
  const [applyDetails, setApplyDetails] = useState(initState);
  const [jobInfo, setJobInfo] = useState([]);
  const [fileUrl, setFileUrl] = useState([]);

  const params = useParams();
  const hiddenJobId = params.jobId;
  const form = useRef();


  storage.ref('files').child("faba5031-08ba-4b2a-be99-f1bb1a600213").getDownloadURL()
  .then((url) => {
    setFileUrl(url)
  })

  const fetchUniqueJobDetails = async (inputId) => {
    const jobInfo = firestore.collection("job_posts").doc(inputId.jobId);
    const doc = await jobInfo.get();
    const tempJob = doc.data();
    setJobInfo(tempJob);
  };

  useEffect(() => {
    fetchUniqueJobDetails(params);
  }, []);

  let answerStorage = {};

  const alert = useAlert();

  const handleChange = (e) => {
    e.persist();
    if (e.target.name.includes("questions")) {
      answerStorage = e.target.value;
      setApplyDetails((oldState) => ({ ...oldState, ...answerStorage }));
    } else {
      setApplyDetails((oldState) => ({
        ...oldState,
        job_post_id: hiddenJobId,
        [e.target.name]: e.target.value,
      }));
    }
  };




  const handleSubmit = async () => {
    setLoading(true);
    let answersObj = {};
    for (const answer in applyDetails) {
      if (answer.includes("answer")) {
        answersObj[answer] = applyDetails[answer];
        delete applyDetails[answer];
      }
    }
    delete answersObj.questions_answers;
    applyDetails.questions_answers = answersObj;
    await props.postApplication(applyDetails);

    emailjs.sendForm('service_vucruai', 'template_y68z9x3', form.current, 'user_ca7fX34LDZy6mLLa2fw4E')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    setLoading(false);
    alert.success("One Step Closer to your Job!");
    setTimeout (function(){
      window.location.href = '/'
    }, 2000);

  };


  return (
    <Box>
   
      <DialogTitle>Submit Application</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please answer all the questions the employer is asking
        </DialogContentText>
      </DialogContent>


    <form ref={form}>
      <DialogContent>
        <Box>
          {jobInfo.questions && Object.values(jobInfo.questions).map((question, i) => {
            return (
              <>
                <Box pb={5}>
                  <DialogContentText>
                    {question}
                  </DialogContentText>
                  <FilledInput
                    onChange={handleChange}
                    name={`answer${i}`}
                    // value={userDetails.description}
                    fullWidth
                    multiline
                    rows={4}
                  />


                </Box>
              </>
            );
          })}
        </Box>
      
        <Grid item xs={12}>
       
          <FilledInput
            onChange={handleChange}
            name="cover_letter"
            // value={userDetails.description}
            placeholder="Coverletter"
            fullWidth
            multiline
            rows={4}
          /> 
          
          <FilledInput onChange={handleChange} name="job_post_id" type="hidden" value={hiddenJobId}/>
          <FilledInput onChange={handleChange} name="email" type="hidden" value={emailJsInfo.email}/> 
          <FilledInput onChange={handleChange} name="first_name" type="hidden" value={emailJsInfo.first_name}/>
          <FilledInput onChange={handleChange} name="last_name" type="hidden" value={emailJsInfo.last_name}/>
          <FilledInput onChange={handleChange} name="company_name" type="hidden" value={emailJsInfo.company_name}/>
          <FilledInput onChange={handleChange} name="position" type="hidden" value={emailJsInfo.position}/>
          <FilledInput onChange={handleChange} name="phone" type="hidden" value={emailJsInfo.phone}/> 
          <FilledInput onChange={handleChange} name="url_resume" type="hidden" value={fileUrl}/> 

        </Grid>
      </DialogContent>
    </form>

      <DialogActions>
        <Button onClick={props.close}>Cancel</Button>
        <Button
          onClick={(handleSubmit)}
          variant="contained"
          disableElevation
          color="primary"
          disabled={loading}
        > 
          {loading ? (
            <CircularProgress color="secondary" size={22} />
          ) : (
            "Apply Job"
          )}

        </Button>
      </DialogActions>

    </Box>
  );
};
