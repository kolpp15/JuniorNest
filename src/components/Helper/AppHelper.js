import { useState, useEffect } from "react";
import { firestore, app } from "../../Firebase/config";

export default function useApplicationData() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [newJobPost, setNewJobPost] = useState(false);
  const [newUserProfile, setNewUserProfile] = useState(false);
  const [viewJob, setViewJob] = useState({});
  const [newApplicationPost, setNewApplicationPost] = useState(false);
  
  const fetchJobs = async () => {
    setCustomSearch(false);
    setLoading(true);
    const req = await firestore
      .collection('job_posts')
      .orderBy('post_date', 'desc')
      .get();
    const tempJob = req.docs.map((job) => ({...job.data(), id: job.id, post_date: job.data().post_date.toDate()}));
    setJobs(tempJob);
    setLoading(false); 
  };

  const fetchJobsCustom = async (jobSearch) => {
    setLoading(true);
    setCustomSearch(true);
    const req = await firestore
      .collection('job_posts')
      .orderBy('post_date', 'desc')
      .where("remote", '==', jobSearch.remote)
      .where("position", '==', jobSearch.position)
      .get();
    const tempJob = req.docs.map((job) => ({...job.data(), id: job.id, post_date: job.data().post_date.toDate()}));
    setJobs(tempJob);
    setLoading(false); 
  }

  const fetchUniqueJobDetails = async (inputId) => {
    // setLoading(true);
    // setCustomSearch(true);
    const tempJobs = firestore.collection('job_posts').doc(inputId.jobId);
    const doc = await tempJobs.get();  
    const tempJob = doc.data()
    setJobs(tempJob);
    // setLoading(false);
 

  }

  const postApplication = async applyDetails => {
    await firestore.collection('applications').add({
      ...applyDetails, 
      apply_date: app.firestore.FieldValue.serverTimestamp(), 
    });
    fetchJobs();
  } 

  const postJob = async jobDetails => {
    await firestore.collection('job_posts').add({
      ...jobDetails, 
      post_date: app.firestore.FieldValue.serverTimestamp(), 
    });
    fetchJobs();
  } 

  const postUser = async userDetails => {
    await firestore.collection('users').add({ ...userDetails });
    fetchJobs();
  } 
  
  useEffect(() => {
    fetchJobs();
  }, [])


  return { jobs, setJobs, loading, setLoading, customSearch, setCustomSearch, newJobPost, setNewJobPost, viewJob, setViewJob, fetchJobs, fetchJobsCustom, postJob, postUser, newUserProfile, setNewUserProfile, fetchUniqueJobDetails, postApplication, newApplicationPost, setNewApplicationPost }

}